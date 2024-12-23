/* eslint-disable react/jsx-key */
import { Button } from "@/components/ui/button";
import { getPopularAlbum } from "@/lib/data-service";
import PopularAlbumCard from "./PopularAlbumCard";

export default async function PopularAlbum() {
  const { data: albums } = await getPopularAlbum();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-primary-foreground ml-3">
          Popular albums and singles
        </h1>
        <Button className="text-secondary font-semibold" variant={"link"}>
          Show all
        </Button>
      </div>
      <div className="flex">
        {albums.map((album) => {
          const photoUrl = album.cover_url;
          return <PopularAlbumCard album={album} photoUrl={photoUrl} />;
        })}
      </div>
    </div>
  );
}
