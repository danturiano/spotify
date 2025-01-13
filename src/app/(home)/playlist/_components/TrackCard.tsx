import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { formatDate, msToMinutesAndSeconds } from '@/lib/utils';
import { TrackCardProps } from '../../_lib/types';

export default function TrackCard({ track, index }: TrackCardProps) {
	const date = formatDate(track.album.release_date);
	const duration = msToMinutesAndSeconds(track.duration_ms);

	return (
		<div className="grid grid-cols-2">
			<div className="flex gap-4 items-center" key={index}>
				<p className="w-4 text-end">{index + 1}</p>
				<Avatar className="size-12 rounded-md shadow-md">
					<AvatarImage src={track.album.images[0].url} />
				</Avatar>
				<div className="flex flex-col">
					<p className="text-md text-primary-foreground font-medium">
						{track.name}
					</p>
					<p className="text-sm text-secondary font-medium">
						{track.album.artists[0].name}
					</p>
				</div>
			</div>
			<div className="grid grid-cols-3 text-xs">
				<p>{track.album.name}</p>
				<p className="text-end">{date}</p>
				<p className="text-end">{duration}</p>
			</div>
		</div>
	);
}
