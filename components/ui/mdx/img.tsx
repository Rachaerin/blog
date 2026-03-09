"use client";

import { PhotoView } from "react-photo-view";

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
      <img alt={alt} src={src} />
    </PhotoView>
  );
}
