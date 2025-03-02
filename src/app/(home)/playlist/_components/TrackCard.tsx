"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formatDate, msToMinutesAndSeconds } from "@/lib/utils";
import Link from "next/link";
import { TrackCardProps } from "../../_lib/types";
import { useState } from "react";
import { Play } from "lucide-react";

export default function TrackCard({ track, index }: TrackCardProps) {
  const date = formatDate(track.album.release_date);
  const duration = msToMinutesAndSeconds(track.duration_ms);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="grid grid-cols-2 hover:bg-neutral-600/40 rounded-md px-2 py-2 data-[state=open]:bg-red-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 items-center" key={index}>
        {isHovered ? (
          <button className="w-8 flex items-center justify-center">
            <Play size={14} />
          </button>
        ) : (
          <p className="w-8 text-center">{index + 1}</p>
        )}
        <Avatar className="size-10 rounded-md shadow-md shrink-0">
          <AvatarImage src={track.album.images[0].url} />
        </Avatar>
        <div className="flex flex-col min-w-0 mr-8">
          <Link href={`/track/${track.id}`} className="max-w-full">
            <p className="text-md text-primary-foreground font-medium hover:underline truncate">
              {track.name}
            </p>
          </Link>
          <Link href={`/artist/${track.artists[0].id}`} className="max-w-full">
            <p className="text-sm text-secondary font-medium hover:underline truncate">
              {track.album.artists[0].name}
            </p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center text-xs">
        <Link href={`/album/${track.album.id}`}>
          <p className="hover:underline truncate">{track.album.name}</p>
        </Link>
        <p className="text-end">{date}</p>
        <p className="text-end">{duration}</p>
      </div>
    </div>
  );
}
