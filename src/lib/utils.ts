import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function msToMinutesAndSeconds(ms: number): string {
  const minutes = Math.floor(ms / 60000); // Convert milliseconds to minutes
  const seconds = Math.floor((ms % 60000) / 1000); // Get the remainder in milliseconds and convert to seconds
  return `${minutes}:${seconds.toString().padStart(2, "0")}`; // Format as "minutes:seconds"
}

export const darkenHSL = (hsl: string, percent: number): string => {
  // Extract H, S, and L values using regex
  const match = hsl.match(/hsl\(\s*(\d+),\s*(\d+)%,\s*(\d+)%\s*\)/);
  if (!match) {
    throw new Error("Invalid HSL format. Expected 'hsl(H, S%, L%)'");
  }

  let [, h, s, l] = match.map(Number); // Convert captured values to numbers

  // Reduce lightness by the given percentage
  l = Math.max(0, l - percent); // Ensure lightness doesn't go below 0%

  return `hsl(${h}, ${s}%, ${l}%)`;
};
