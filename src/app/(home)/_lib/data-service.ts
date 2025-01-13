import { auth } from '@/auth';
import { SpotifyArtist } from './types';

const artistIds = [
	'1vCWHaC5f2uS3yhpwWbIA6',
	'6eUKZXaKkcviH0Ku9w2n3V',
	'66CXWjxzNUsdJxJ2JdwvnR',
	'246dkjvS1zLTtiykXe5h60',
	'3TVXtAsR1Inumwj472S9r4',
	'2CIMQHirSU0MQqyYHq0eOx',
	'7dGJo4pcD2V6oG8kP0tJRR',
	'6qqNVTkY8uBg9cP3Jd7DAH',
	'4MCBfE4596Uoi2O4DtmEMz',
	'6jJ0s89eD6GaHleKKya26X',
	'4NHQUGzhtTLFvgF5SZesLK',
	'1GxkXlMwML1oSg5eLPiAz3',
	'4dpARuHxo51G3z768sgnrY',
	'5yG7ZAZafVaAlMTeBybKAL',
	'0NIPkIjTV8mB795yEIiPYL',
	'3WrFJ7ztbogyGnTHbHJFl2',
	'64KEffDW9EtZ1y2vBYgq8T',
	'64M6ah0SkkRsnPGtGiRAbb',
	'6MDME20pz9RveH9rEXvrOM',
	'5pKCCKE2ajJHZ9KAiaK11H',
	'4LLpKhyESsyAXpc4laK94U',
	'2tIP7SsRs7vjIcLrU85W8J',
	'6S2OmqARrzebs0tKUEyXyp',
	'5Pwc4xIPtQLFEnJriah9YJ',
	'3mIj9lX2MWuHmhNCA7LSCW',
	'2wY79sveU1sp5g7SokKOiI',
	'6D2qc1bZn2f7VnG9nmMHYG',
	'3jOstUTkEu2JkjvRdBA5Gu',
	'4gzpq5DPGxSnKTe4SA8HAU',
	'5vBSrE1xujD2FXYRarbAXc',
	'6gi6y1xwmVszDWkUqab1qw',
	'0hCNtLu0JehylgoiP8L4Gh',
	'3nFkdlSjzX9mRTtwJOzDYB',
	'5yxyJsFanEAuwSM5kOuZKc',
	'5vVeeQzBr2DkPxqxuQd8Mz',
	'7gn8YnmOlGQ8PstRpIY2Ct',
	'6LuN9FCkKOj5PcnpouEgny',
	'4kI8Ie27vjvonwaB2ePh8T',
	'7vUkm6bXFFwbSFCRbz9WDO',
	'4dpARuHxo51G3z768sgnrY',
	'7FIoB5PHdrMZVC3q2HE5MS',
	'5rSXSAkZ67PYJSvpUpkOr7',
	'6nfotmg2oOHFTf8K26bDrB',
	'1DxLCyH42yaHKGK3IyO4Ki',
	'5qRSs6mvI17zrkJpOHkCoM',
	'4bthkVgSWDAzy6tNT11gDt',
	'0L8ExT028jH3ddEcZwqJJ5',
	'1Xyo4u8uXC1ZmMpatF05PJ',
];

export async function getTopArtist(accessToken: string | undefined) {
	try {
		const response = await fetch(
			`https://api.spotify.com/v1/artists?ids=${artistIds.join(',')}`,
			{
				cache: 'force-cache',
				next: { revalidate: 3600 },
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		if (!data.artists || !Array.isArray(data.artists)) {
			throw new Error('Invalid response format');
		}

		const validArtists: SpotifyArtist[] = data.artists.filter(
			(artist: SpotifyArtist) =>
				artist !== null && typeof artist === 'object' && 'followers' in artist
		);

		const topArtists = validArtists
			.sort((a, b) => b.followers.total - a.followers.total)
			.slice(0, 6);

		return topArtists;
	} catch (error) {
		console.error('Error fetching artists:', error);
		throw error;
	}
}

export async function getPlaylist(playlist_id: string) {
	const session = await auth();
	if (!session) {
		throw new Error('No session found');
	}

	try {
		const response = await fetch(
			`https://api.spotify.com/v1/playlists/${playlist_id}`,
			{
				cache: 'force-cache',
				next: { revalidate: 3600 },
				headers: {
					Authorization: `Bearer ${session.accessToken}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getUserPlaylist() {
	const session = await auth();
	if (!session) {
		throw new Error('No session found');
	}

	const user_id = session?.user?.name;

	try {
		const response = await fetch(
			`https://api.spotify.com/v1/users/${user_id}/playlists?limit=20`,
			{
				cache: 'force-cache',
				next: { revalidate: 3600 },
				headers: {
					Authorization: `Bearer ${session.accessToken}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getPlaylistTracks(playlist_id: string) {
	const session = await auth();
	if (!session) {
		throw new Error('No session found');
	}
	try {
		const response = await fetch(
			`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
			{
				cache: 'force-cache',
				next: { revalidate: 3600 },
				headers: {
					Authorization: `Bearer ${session.accessToken}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}
