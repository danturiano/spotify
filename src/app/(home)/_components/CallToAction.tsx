import { Button } from "@/components/ui/button";
import React from "react";

export default function CallToAction() {
  return (
    <div className="px-4 py-2 bg-gradient-to-r to-indigo-500 via-purple-500 from-pink-600 flex justify-between items-center">
      <div className="p-1">
        <h1 className="text-sm font-bold">Preview of Spotify</h1>
        <p className="text-md">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <Button className="rounded-3xl py-6 px-8 font-bold">Sign up free</Button>
    </div>
  );
}
