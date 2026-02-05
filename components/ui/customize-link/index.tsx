import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomizeLink({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[#ff2056] hover:bg-[#e60076] hover:text-[#f9fafb] underline underline-offset-8 inline-block h-full flex items-center",
        className
      )}
    >
      {children}
    </Link>
  );
}
