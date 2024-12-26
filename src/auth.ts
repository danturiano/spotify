import NextAuth, { Session } from "next-auth";
import Spotify from "next-auth/providers/spotify";
import { JWT } from "next-auth/jwt";

// Define types for token and session
interface ExtendedToken extends JWT {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpires?: number;
  error?: string;
}

interface ExtendedSession extends Session {
  accessToken?: string;
  accessTokenExpires?: number;
}

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-modify-playback-state",
].join(",");

const LOGIN_URL = `https://accounts.spotify.com/authorize?scope=${encodeURIComponent(
  scopes
)}`;

async function refreshAccessToken(
  token: ExtendedToken
): Promise<ExtendedToken> {
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", token.refreshToken!);

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET
          ).toString("base64"),
      },
      body: params,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to refresh access token");
    }

    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? token.refreshToken,
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

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
    async jwt({ token, account }): Promise<ExtendedToken> {
      // Initial sign in
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at! * 1000, // convert to ms
        };
      }

      // Return token if access token hasn't expired
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token expired, refresh it
      return await refreshAccessToken(token);
    },
    async session({ session, token }): Promise<ExtendedSession> {
      return {
        ...session,
        accessToken: token.accessToken,
      };
    },
  },
});
