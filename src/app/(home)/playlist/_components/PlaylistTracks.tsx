import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { SpotifyPlaylist } from '../../_lib/types';

export default async function PlaylistTracks({
	playlist,
}: {
	playlist: SpotifyPlaylist;
}) {
	const api = SpotifyApi.withClientCredentials(
		process.env.SPOTIFY_CLIENT_ID!,
		process.env.SPOTIFY_SECRET!
	);

	return (
		<div className="w-full h-full bg-transparent/20 -translate-y-[13rem]"></div>
	);
}
