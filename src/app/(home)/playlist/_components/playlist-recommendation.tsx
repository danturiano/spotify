import React from "react";

export default function PlaylistRecommendation() {
  return (
    <div>
      <div className="flex flex-col mb-20 px-8 space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Recommended</h1>
        <p className="text-sm text-secondary font-medium">
          Based on what's in this playlist
        </p>
      </div>
    </div>
  );
}
