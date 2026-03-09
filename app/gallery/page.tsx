"use client";

import { PhotoView } from "react-photo-view";
import { formatDateWithYMD } from "@/lib/utils";
import { wallpapers } from "@/lib/wall";

export default function Gallery() {
  return (
    <main>
      {wallpapers.map((wall, ind) => (
        <div key={ind} className="mb-4">
          <div>
            <h1 className="font-bold md:text-4xl text-2xl">{wall.title}</h1>
            <div className="md:text-xs mt-3 mb-8 tracking-widest">
              <span>{formatDateWithYMD(wall.date)}</span> -{" "}
              <span>{wall.text}</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {wall.list.map((g, i) => (
              <div key={i}>
                <PhotoView src={g}>
                  <img src={g} alt="wallpaper" />
                </PhotoView>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
