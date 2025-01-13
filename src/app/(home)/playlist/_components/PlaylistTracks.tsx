import { SpotifyPlaylist } from '../../_lib/types';

export default function PlaylistTracks({
	playlist,
}: {
	playlist: SpotifyPlaylist;
}) {
	console.log(playlist);

	return (
		<div className="w-full h-full bg-transparent/20 -translate-y-[13rem]"></div>
	);
}
