import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function SpotifySocials() {
  return (
    <div className="flex gap-2">
      <Link
        href={"https://instagram.com/spotify"}
        className="flex items-center justify-center bg-accent rounded-full h-10 w-10"
      >
        <InstagramLogo size={22} />
      </Link>
      <Link
        href={"https://facebook.com/spotify"}
        className="flex items-center justify-center bg-accent rounded-full h-10 w-10"
      >
        <FacebookLogo size={22} />
      </Link>
      <Link
        href={"https://twitter.com/spotify"}
        className="flex items-center justify-center bg-accent rounded-full h-10 w-10"
      >
        <TwitterLogo size={22} />
      </Link>
    </div>
  );
}
