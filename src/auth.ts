import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Spotify from 'next-auth/providers/spotify';

// Define types for token and session
interface ExtendedToken extends JWT {
	accessToken?: string;
	refreshToken?: string;
	accessTokenExpires?: number;
	error?: string;
	expires?: string;
}

const scopes = [
	'user-read-email',
	'playlist-read-private',
	'playlist-read-collaborative',
	'user-read-currently-playing',
	'user-modify-playback-state',
].join(',');

const LOGIN_URL = `https://accounts.spotify.com/authorize?scope=${encodeURIComponent(
	scopes
)}`;

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Spotify({
			clientId: process.env.SPOTIFY_CLIENT_ID!,
			clientSecret: process.env.SPOTIFY_SECRET!,
			authorization: LOGIN_URL,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		authorized({ auth }) {
			return !!auth?.user;
		},
		async jwt({ token, account }) {
			// Initial sign in
			if (account) {
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					accessTokenExpires: account.expires_at,
				};
			}

			const now = Math.floor(Date.now() / 1000);
			const difference = Math.floor((token.accessTokenExpires! - now) / 60);
			const refreshToken = token.refreshToken;
			console.log(`Token still active for ${difference} minutes.`);

			if (difference <= 10) {
				const request = await fetch('https://accounts.spotify.com/api/token', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Authorization: `Basic ${Buffer.from(
							`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET}`
						).toString('base64')}`,
					},
					body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
					cache: 'no-cache',
				});

				if (request.ok) {
					const response = await request.json();
					const { access_token, expires_in, refresh_token } = response;
					const timestamp = Math.floor((Date.now() + expires_in * 1000) / 1000);

					console.log(response);
					console.log(`New access token: ${access_token}`);

					return {
						...token,
						accessToken: access_token,
						accessTokenExpires: timestamp,
						refreshToken: refresh_token,
					};
				} else {
					console.error(
						`Failed to refresh token: ${request.status} ${request.statusText}`
					);
				}
			}

			return token;
		},
		async session({ session, token }) {
			return {
				...session,
				accessToken: token.accessToken,
			};
		},
	},
	pages: {
		signIn: '/login',
	},
});
