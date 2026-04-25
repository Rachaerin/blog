import { _Metadata } from "@/lib/_medatada";
import "react-photo-view/dist/react-photo-view.css";
import "../styles/tailwindcss.css";

export const metadata = _Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
