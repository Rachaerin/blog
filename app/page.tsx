import CustomizeLink from "@/components/ui/customize-link";
import { DEFAULT_WEB_TITLE } from "@/lib/_metadata";
import { postsOrderedByDate } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="md:flex justify-between">
        <div className="text-2xl font-bold py-2">{DEFAULT_WEB_TITLE}</div>
        <ul className="flex items-center gap-4">
          <li className="h-full">
            <CustomizeLink href="/">HOME</CustomizeLink>
          </li>
          <li className="h-full">
            <CustomizeLink href="/about">ABOUT</CustomizeLink>
          </li>
          <li className="h-full">
            <CustomizeLink href="/gallery">GALLERY</CustomizeLink>
          </li>
          <li className="h-full">
            <CustomizeLink href="/books">BOOKS</CustomizeLink>
          </li>
          <li className="h-full">
            <CustomizeLink href="/friends">FRIENDS</CustomizeLink>
          </li>
        </ul>
      </nav>
      <h3 className="my-4 text-xl font-bold">
        <span className="mr-2 text-[#ff2056]">#</span>All articles
      </h3>
      <ul className="all-articles">
        {postsOrderedByDate.map((post, ind) => (
          <li key={ind} className="my-1">
            <span className="text-[#999] mr-3 w-[6rem] inline-block">{post.date}</span>
            <Link
              href={post.url}
              className="hover:bg-[#e60076] hover:text-[#f9fafb]"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
