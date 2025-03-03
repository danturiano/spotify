import { getUserPlaylist } from "../../_lib/data-service";
import { SpotifyPlaylist } from "../../_lib/types";
import PlaylistCard from "./PlaylistCard";
import SearchButton from "./SearchButton";

export default async function Playlist() {
  const data = await getUserPlaylist();

  return (
    <div className="overflow-y-scroll h-screen w-full scrollbar-none">
      <SearchButton />
      {data.items.map((item: SpotifyPlaylist) => {
        const photoUrl = item.images[0]?.url;
        return (
          <PlaylistCard key={item.id} playlist={item} photoUrl={photoUrl} />
        );
      })}
    </div>
  );
}
