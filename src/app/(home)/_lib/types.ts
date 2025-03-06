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

export type SpotifyPlaylist = {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: Array<{ url: string; height: number; width: number }>;
  name: string;
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    id: string;
    type: string;
    uri: string;
  };
  primary_color: unknown;
  public: boolean;
  snapshot_id: string;
  tracks: { href: string; total: number; items?: Track[] };
  type: string;
  uri: string;
};

export interface ExternalUrls {
  spotify: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Album {
  album_type: "compilation" | "single" | "album";
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  total_tracks: number;
  type: "album";
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  track: { name: string };
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
}

export interface TrackCardProps {
  track: Track;
  index: number;
}
