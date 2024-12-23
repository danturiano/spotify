import { Button } from "@/components/ui/button";
import { getPopularArtist } from "@/lib/data-service";
import PopularArtistCard from "./PopularArtistCard";

export default async function PopularArtist() {
  const { data: artists } = await getPopularArtist();

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
          const photoUrl = artist.photo_url;
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
