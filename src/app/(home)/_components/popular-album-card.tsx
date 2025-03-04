"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React, { useState } from "react";

type CardProps = {
  album: {
    artist_id: string;
    artist_name: string | null;
    cover_url: string | undefined;
    created_at: string;
    id: string;
    release_date: string | null;
    title: string;
  };
  photoUrl: string | undefined;
};

export default function PopularAlbumCard({ album, photoUrl }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={album.id}
      className="flex flex-col gap-3 hover:bg-accent p-3 hover:rounded-md hover:cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar className="h-[13.5rem] w-[13.5rem] rounded-md">
        <AvatarImage src={photoUrl} />
      </Avatar>
      {isHovered && (
        <Button
          size={"icon"}
          className="absolute bottom-20 left-40 rounded-full ml-2 bg-spotify"
        >
          <Play strokeWidth={3} />
        </Button>
      )}
      <div className="space-y-1 ml-1">
        <h1 className="font-medium">{album.title}</h1>
        <p className="text-sm text-secondary">{album.artist_name}</p>
      </div>
    </div>
  );
}
