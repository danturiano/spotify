import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Play, Plus } from "lucide-react";
import { getPlaylistTracks, getUserPlaylist } from "../../_lib/data-service";
import { SpotifyPlaylist, Track } from "../../_lib/types";
import RowHeader from "./row-header";
import TrackCard from "./track-card";

interface PlaylistResponse {
  items: {
    track: Track;
    added_at: string;
    added_by: {
      id: string;
      type: "user";
    };
    is_local: boolean;
  }[];
  limit: number;
  offset: number;
  total: number;
}

export default async function PlaylistTracks({
  playlist_id,
}: {
  playlist_id: string;
}) {
  const data: PlaylistResponse = await getPlaylistTracks(playlist_id);
  const userPlaylist = await getUserPlaylist();
  const isAddedToLibrary = userPlaylist.items.some(
    (playlist: SpotifyPlaylist) => playlist.id === playlist_id
  );

  return (
    <div className="w-full bg-transparent/20 -translate-y-2">
      <div className="p-6 flex flex-col gap-4">
        <div className="grid grid-cols-2">
          <div className="flex gap-4 items-center">
            <Button className="rounded-full bg-spotify size-14" iconSize={"sm"}>
              <Play />
            </Button>
            <div className="flex gap-2">
              <Button
                className={`rounded-full size-9 text-secondary ${
                  isAddedToLibrary
                    ? "bg-spotify text-primary"
                    : "border-2 border-secondary bg-transparent"
                }`}
                iconSize={"sm"}
              >
                {isAddedToLibrary ? <Check /> : <Plus />}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 text-xs items-center"></div>
        </div>
        <RowHeader />
        <Separator className=" bg-muted-foreground" />
        <div>
          {data.items.map(({ track }, index) => (
            <TrackCard key={index} track={track} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
