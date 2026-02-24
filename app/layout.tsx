import { cn } from "@/lib/utils";
import "../styles/tailwindcss.css";
import { _Metadata } from "@/lib/_metadata";
import Flower from "@/components/ui/wall-img/flower";
import Girl from "@/components/ui/wall-img/girl";

export const metadata = _Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={cn("max-w-3xl mx-auto p-3")}>
        <Flower />
        <Girl />
        {children}
      </body>
    </html>
  );
}
