"use client";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useExtractColors } from "react-extract-colors";
import { SpotifyPlaylist } from "../../_lib/types";

export default function PlaylistHeader({
  playlist,
}: {
  playlist: SpotifyPlaylist;
}) {
  const image = playlist.images[0].url;
  const totalHrs = (playlist.tracks.total * 180) / 60 / 60;

  const { dominantColor } = useExtractColors(image, {
    format: "hsl",
    sortBy: "vibrance",
  });

  return (
    <div
      className={`p-6 flex items-start w-full rounded-t-lg h-[30rem]`}
      style={{
        background: `linear-gradient(180deg, ${dominantColor} 0%, #121212 100%)`,
      }}
    >
      <div className="flex align-bottom items-end gap-4 min-w-0">
        <Avatar className="min-h-[14rem] min-w-[14rem] size-56 rounded-md shadow-md">
          <AvatarImage src={image} />
        </Avatar>
        <div className="flex flex-col gap-4 items-start min-w-0">
          <div className="flex flex-col gap-2 max-w-full">
            <p className="text-sm capitalize text-primary-foreground/95">
              {playlist.type}
            </p>
            <h1 className="text-6xl font-extrabold truncate text-primary-foreground">
              {playlist.name}
            </h1>
          </div>
          <div className="flex text-xs gap-2">
            <p className="font-medium">
              <span className="font-bold text-primary-foreground">
                {playlist.owner.display_name} ● ‎
              </span>
              {playlist.tracks.total} songs, about {totalHrs.toFixed()} hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
