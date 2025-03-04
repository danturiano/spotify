"use client";

import { Button } from "@/components/ui/button";
import { darkenHSL } from "@/lib/utils";
import { Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useExtractColors } from "react-extract-colors";
import { useInView } from "react-intersection-observer";
import { SpotifyPlaylist } from "../../_lib/types";
import RowHeader from "./RowHeader";

type PlaylistContainerProps = {
  children: React.ReactNode;
  playlist: SpotifyPlaylist;
};

export default function PlaylistContainer({
  children,
  playlist,
}: PlaylistContainerProps) {
  const image = playlist.images[0].url;

  const { dominantColor } = useExtractColors(image, {
    format: "hsl",
    sortBy: "vibrance",
  });

  const { ref, entry } = useInView({
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    rootMargin: "-120px 0px 0px 0px",
  });

  const [opacity, setOpacity] = useState(0);
  const [showSecondaryHeader, setShowSecondaryHeader] = useState(false);

  // Calculate opacity based on intersection ratio
  useEffect(() => {
    if (!entry) return;

    // When main header is fully visible, secondary header should be invisible (opacity 0)
    // When main header is starting to go out of view, secondary header should start appearing
    // When main header is completely out of view, secondary header should be fully visible (opacity 1)

    // This inverts the intersection ratio and allows for smoother transitions
    const calculatedOpacity = Math.min(
      1,
      Math.max(0, 1 - entry.intersectionRatio)
    );

    // Set the opacity state
    setOpacity(calculatedOpacity);
    if (calculatedOpacity > 0.8) {
      setOpacity(1);
    }

    // Show secondary header only when it starts to have some opacity
    setShowSecondaryHeader(calculatedOpacity > 0.6);
  }, [entry]);

  return (
    <div className="w-full h-screen overflow-y-auto bg-primary relative rounded-md scrollbar-none">
      {showSecondaryHeader && (
        <div
          className="sticky top-0 flex items-center py-2 px-4 z-30 w-full transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: `${darkenHSL(dominantColor!, 30)}`,
            opacity: opacity.toFixed(2),
          }}
        >
          <div className="flex space-x-2 items-center">
            <Button className="rounded-full bg-spotify size-11" iconSize={"sm"}>
              <Play />
            </Button>
            <p className="text-2xl tracking-tight font-bold">{playlist.name}</p>
          </div>
        </div>
      )}
      {showSecondaryHeader && opacity === 1 && (
        <div className="sticky top-[57px] w-full z-40 bg-secondary-foreground h-10 px-6 flex items-center justify-between border-b border-accent">
          <RowHeader />
        </div>
      )}
      <div
        ref={ref}
        className="absolute h-[30rem] w-full"
        style={{
          background: `linear-gradient(180deg, ${dominantColor} 10%, #121212 100%)`,
        }}
      ></div>
      {children}
    </div>
  );
}
