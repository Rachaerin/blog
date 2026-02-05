import { cn } from "@/lib/utils";
import "../styles/tailwindcss.css";
import { _Metadata } from "@/lib/_metadata";

export const metadata = _Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={cn("max-w-3xl mx-auto p-3")}>
        {children}
      </body>
    </html>
  );
}
