import { getPlaylistTracks } from '../../_lib/data-service';
import { Track } from '../../_lib/types';
import TrackCard from './TrackCard';

interface PlaylistResponse {
	items: {
		track: Track;
		added_at: string;
		added_by: {
			id: string;
			type: 'user';
		};
		is_local: boolean;
	}[];
	limit: number;
	offset: number;
	total: number;
}

export default async function PlaylistTracks({
	playlist_id,
}: {
	playlist_id: string;
}) {
	const data: PlaylistResponse = await getPlaylistTracks(playlist_id);
	return (
		<div className="w-full h-full bg-transparent/20 -translate-y-[13rem]">
			<div className="p-6 flex flex-col gap-4">
				{data.items.map(({ track }, index) => (
					<TrackCard key={index} track={track} index={index} />
				))}
			</div>
		</div>
	);
}
