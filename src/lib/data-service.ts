import supabase from "./supabase";

export async function getPopularArtist() {
  const { data: artists, error } = await supabase.from("artists").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cannot fetch popular artists");
  }

  return { data: artists };
}

export async function getPopularAlbum() {
  const { data: albums, error } = await supabase.from("albums").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cannot fetch popular albums");
  }

  return { data: albums };
}
