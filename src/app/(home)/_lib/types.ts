export type SpotifyArtist = {
    external_urls: { spotify: string };
    followers: { total: number };
    genres: string[];
    id: string;
    images: Array<{ url: string; height: number; width: number }>;
    name: string;
    popularity: number;
    type: string;
    uri: string;
  };