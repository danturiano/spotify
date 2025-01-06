'use client';

import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useExtractColors } from 'react-extract-colors';
import { SpotifyPlaylist } from '../../_lib/types';

type PlaylistHeaderProps = {
	playlist: SpotifyPlaylist;
	firstTrackImage: string;
};

export default function PlaylistHeader({
	playlist,
	firstTrackImage,
}: PlaylistHeaderProps) {
	const { dominantColor } = useExtractColors(firstTrackImage, {
		format: 'hex',
	});

	return (
		<div
			className={`p-4 flex items-end gap-4 w-full rounded-md`}
			style={{
				backgroundImage: `linear-gradient(to bottom, ${dominantColor}, #171717)`,
			}}
		>
			<Avatar className="size-56 rounded-sm shadow-md">
				<AvatarImage src={firstTrackImage} />
			</Avatar>
			<div className="flex flex-col justify-end max-w-[80%]">
				<p>Playlist</p>
				<h1 className="text-6xl font-extrabold text-primary-foreground text-nowrap">
					{playlist.name}
				</h1>
			</div>
		</div>
	);
}
