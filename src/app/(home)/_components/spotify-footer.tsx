import React from "react";
import SpotifySocials from "./spotify-socials";
import { Separator } from "@/components/ui/separator";

const data = [
  {
    title: "Company",
    items: ["About", "Jobs", "For the Record"],
  },
  {
    title: "Communities",
    items: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
  },
  {
    title: "Useful Links",
    items: ["Support", "Free Mobile App"],
  },
  {
    title: "Spotify Plans",
    items: [
      "Premium Individual",
      "Premium Duo",
      "Premium Family",
      "Premium Student",
      "Spotify Free",
    ],
  },
];

const footerData = [
  "Legal",
  "Safety & Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Accessibility",
];

export default function SpotifyFooter() {
  return (
    <div className="w-full flex flex-col gap-10 p-6 mb-16 justify-between">
      <div className="flex justify-between">
        {data.map((item) => {
          return (
            <div className="flex-col">
              <h1 className="font-semibold mb-1">{item.title}</h1>
              <div className="flex-col space-y-1">
                {item.items.map((item) => (
                  <p className="text-secondary">{item}</p>
                ))}
              </div>
            </div>
          );
        })}
        <SpotifySocials />
      </div>
      <Separator className="h-[0.5px] bg-secondary" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {footerData.map((item) => (
            <p className="text-secondary text-xs">{item}</p>
          ))}
        </div>
        <p className="text-xs text-secondary">© 2025 Spotify AB</p>
      </div>
    </div>
  );
}
