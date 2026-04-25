import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  href: string;
  children: React.ReactNode;
}

export default function EditableLink({ children, className, href }: Props) {
  return (
    <Link className={cn(" text-[#b3b3b3] hover:text-[#ff2056] hover:underline hover:underline-offset-4", className)} href={href}>
      {children}
    </Link>
  );
}
