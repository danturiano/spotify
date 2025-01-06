import { getPlaylist, getPlaylistTracks } from '../../_lib/data-service';
import PlaylistHeader from '../_components/PlaylistHeader';

export default async function Page({
	params,
}: {
	params: Promise<{ playlistId: string }>;
}) {
	const playlistId = (await params).playlistId;
	const playlist = await getPlaylist(playlistId);
	const tracks = await getPlaylistTracks(playlistId);

	const firstTrackImage = tracks.items[0].track.album.images[0].url;

	return (
		<div className="w-full">
			<PlaylistHeader playlist={playlist} firstTrackImage={firstTrackImage} />
		</div>
	);
}
