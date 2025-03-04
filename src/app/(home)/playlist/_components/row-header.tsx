import { Clock } from "lucide-react";
import React from "react";

export default function RowHeader() {
  return (
    <div className="grid grid-cols-2 px-2 w-full">
      <div className="flex gap-4 items-center">
        <p className="w-4 text-end">#</p>
        <p className="text-xs">Title</p>
      </div>
      <div className="grid grid-cols-3 text-xs items-center">
        <p>Album</p>
        <p className="text-end">Date added</p>
        <div className="flex justify-end items-center">
          <Clock size={18} />
        </div>
      </div>
    </div>
  );
}
