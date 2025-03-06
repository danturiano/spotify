import { getPlaylistDetails } from "../../_lib/data-service";
import { SpotifyPlaylist } from "../../_lib/types";
import PlaylistContainer from "../_components/playlist-container";
import PlaylistHeader from "../_components/playlist-header";
import PlaylistTracks from "../_components/playlist-tracks";

export default async function Page({
  params,
}: {
  params: Promise<{ playlistId: string }>;
}) {
  const playlistId = (await params).playlistId;
  const playlist_details: SpotifyPlaylist = await getPlaylistDetails(
    playlistId
  );

  return (
    <PlaylistContainer playlist_details={playlist_details}>
      <PlaylistHeader playlist_details={playlist_details} />
      <PlaylistTracks playlist_id={playlistId} />
    </PlaylistContainer>
  );
}
