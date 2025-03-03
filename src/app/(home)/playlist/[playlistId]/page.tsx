import { getPlaylist } from "../../_lib/data-service";
import PlaylistContainer from "../_components/playlist-container";
import PlaylistHeader from "../_components/PlaylistHeader";
import PlaylistTracks from "../_components/PlaylistTracks";

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
