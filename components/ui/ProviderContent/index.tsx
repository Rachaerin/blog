"use client"

import { PhotoProvider } from "react-photo-view";

type Props = {
  children: React.ReactNode;
};

export default function ProviderContent({ children }: Props) {
  return <PhotoProvider>{children}</PhotoProvider>;
}
