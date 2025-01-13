import { getPlaylist } from '../../_lib/data-service';
import PlaylistHeader from '../_components/PlaylistHeader';
import PlaylistTracks from '../_components/PlaylistTracks';

export default async function Page({
	params,
}: {
	params: Promise<{ playlistId: string }>;
}) {
	const playlistId = (await params).playlistId;
	const playlist = await getPlaylist(playlistId);

	return (
		<div className="w-full relative">
			<PlaylistHeader playlist={playlist} />
			<PlaylistTracks playlist_id={playlistId} />
		</div>
	);
}
