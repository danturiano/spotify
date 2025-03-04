import { getPlaylist } from "../../_lib/data-service";
import PlaylistContainer from "../_components/playlist-container";
import PlaylistHeader from "../_components/playlist-header";
import PlaylistTracks from "../_components/playlist-tracks";

export default async function Page({
  params,
}: {
  params: Promise<{ playlistId: string }>;
}) {
  const playlistId = (await params).playlistId;
  const playlist = await getPlaylist(playlistId);

  return (
    <PlaylistContainer playlist={playlist}>
      <PlaylistHeader playlist={playlist} />
      <PlaylistTracks playlist_id={playlistId} />
    </PlaylistContainer>
  );
}
