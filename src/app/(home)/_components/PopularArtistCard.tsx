"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React, { useState } from "react";

type CardProps = {
  artist: {
    bio: string | null;
    created_at: string;
    id: string;
    name: string;
    photo_url: string | undefined;
  };
  photoUrl: string | undefined;
};

export default function PopularArtistCard({ artist, photoUrl }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={artist.id}
      className="flex flex-col gap-3 hover:bg-accent p-3 hover:rounded-md hover:cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar className="h-[13.5rem] w-[13.5rem]">
        <AvatarImage src={photoUrl} />
      </Avatar>
      {isHovered && (
        <Button
          size={"icon"}
          className="absolute bottom-[5.3rem] left-40 rounded-full ml-2 bg-spotify"
        >
          <Play strokeWidth={3} />
        </Button>
      )}
      <div className="space-y-1 ml-1">
        <h1 className="font-medium">{artist.name}</h1>
        <p className="text-sm text-secondary">Artist</p>
      </div>
    </div>
  );
}
