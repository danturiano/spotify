import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { formatDate, msToMinutesAndSeconds } from '@/lib/utils';
import Link from 'next/link';
import { TrackCardProps } from '../../_lib/types';

export default function TrackCard({ track, index }: TrackCardProps) {
	const date = formatDate(track.album.release_date);
	const duration = msToMinutesAndSeconds(track.duration_ms);

	return (
		<div className="grid grid-cols-2 hover:bg-neutral-600/40 rounded-md py-2 px-2">
			<div className="flex gap-4 items-center" key={index}>
				<p className="w-4 text-end">{index + 1}</p>
				<Avatar className="size-10 rounded-md shadow-md">
					<AvatarImage src={track.album.images[0].url} />
				</Avatar>
				<div className="flex flex-col">
					<Link href={`/track/${track.id}`}>
						<p className="text-md text-primary-foreground font-medium hover:underline">
							{track.name}
						</p>
					</Link>
					<Link href={`/artist/${track.artists[0].id}`}>
						<p className="text-sm text-secondary font-medium hover:underline">
							{track.album.artists[0].name}
						</p>
					</Link>
				</div>
			</div>
			<div className="grid grid-cols-3 items-center text-xs">
				<Link href={`/album/${track.album.id}`}>
					<p className="hover:underline">{track.album.name}</p>
				</Link>
				<p className="text-end">{date}</p>
				<p className="text-end">{duration}</p>
			</div>
		</div>
	);
}
