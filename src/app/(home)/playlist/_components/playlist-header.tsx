"use client";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { SpotifyPlaylist } from "../../_lib/types";

export default function PlaylistHeader({
  playlist_details,
}: {
  playlist_details: SpotifyPlaylist;
}) {
  const image = playlist_details.images[0].url;
  const totalHrs = (playlist_details.tracks.total * 180) / 60 / 60;

  return (
    <div className="w-full relative h-[18rem] p-6">
      <div className="flex align-bottom items-end gap-4 min-w-0">
        <Avatar className="min-h-[14rem] min-w-[14rem] size-56 shadow-md">
          <AvatarImage src={image} />
        </Avatar>
        <div className="flex flex-col gap-4 items-start min-w-0">
          <div className="flex flex-col gap-2 max-w-full">
            <p className="text-sm capitalize text-primary-foreground/95">
              {playlist_details.type}
            </p>
            <h1 className="text-6xl font-extrabold truncate text-primary-foreground">
              {playlist_details.name}
            </h1>
          </div>
          <div className="flex text-xs gap-2">
            <p className="font-medium">
              <span className="font-bold text-primary-foreground">
                {playlist_details.owner.display_name} ● ‎
              </span>
              {playlist_details.tracks.total} songs, about {totalHrs.toFixed()}{" "}
              {totalHrs > 1 && totalHrs < 2 ? "hr" : "hrs"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
