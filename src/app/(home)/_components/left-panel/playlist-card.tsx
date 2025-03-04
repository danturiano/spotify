"use client";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Play } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SpotifyPlaylist } from "../../_lib/types";

type PlaylistProps = {
  playlist: SpotifyPlaylist;
  photoUrl: string | undefined;
};

export default function PlaylistCard({ playlist, photoUrl }: PlaylistProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const playlistId = pathname.replace("/playlist/", "");

  return (
    <Link
      href={`/playlist/${playlist.id}`}
      key={playlist.id}
      className="flex gap-3 p-3 hover:bg-accent hover:rounded-md hover:cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar className="size-12">
        <AvatarImage src={photoUrl} className="rounded-sm relative" />
      </Avatar>
      {isHovered && (
        <Play strokeWidth={3} className="absolute top-6 left-6" color="white" />
      )}
      <div className="flex flex-col truncate max-w-[calc(100%-4rem)]">
        <h1
          className={`text-md text-primary-foreground ${
            playlist.id === playlistId ? "text-spotify" : ""
          }`}
        >
          {playlist.name}
        </h1>
        <p className="text-sm text-secondary font-medium">
          Playlist · {playlist.owner.display_name}
        </p>
      </div>
    </Link>
  );
}
