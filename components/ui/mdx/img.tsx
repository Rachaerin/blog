"use client";

import { PhotoView } from "react-photo-view";
import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  blurDataURL?: string;
};

export default function MarkdownImage({ src, alt }: Props) {
  if (!src) {
    throw new Error("src and alt is required");
  }
  return (
    <PhotoView src={src}>
      <Image
        alt={alt ?? ""}
        src={src}
        width={200}
        height={200}
        className="mb-2 mt-2 cursor-pointer"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          maxHeight: "340px",
        }}
        placeholder="blur"
        blurDataURL="/img/giphy-1.gif"
      />
    </PhotoView>
  );
}
