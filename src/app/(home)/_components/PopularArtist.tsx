import { Button } from "@/components/ui/button";
import PopularArtistCard from "./PopularArtistCard";
import { getPopularArtist } from "../_lib/actions";

export default async function PopularArtist() {

  const artists = await getPopularArtist();
  if (!artists) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-primary-foreground ml-3">
          Popular artists
        </h1>
        <Button className="text-secondary font-semibold" variant={"link"}>
          Show all
        </Button>
      </div>
      <div className="flex">
        {artists.map((artist) => {
          const photoUrl = artist.images[0]?.url;
          return (
            <PopularArtistCard
              artist={artist}
              photoUrl={photoUrl}
              key={artist.id}
            />
          );
        })}
      </div>
    </div>
  );
}
