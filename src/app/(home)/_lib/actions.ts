"use server";

import { auth } from "@/auth";
import { getTopArtist } from "./data-service";

export async function getPopularArtist() {
  const session = await auth();
  if (!session?.user) return null;

  const artists = await getTopArtist(session.accessToken);

  return artists;
}
