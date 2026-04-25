import MDX from "@/components/ui/mdx";
import { PostOverview } from "@/lib/types";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Slug({ params }: Props) {
  const { slug } = await params;

  const post = (allPosts as PostOverview[]).find((p) => p._meta.path === slug);
  if (!post) {
    notFound();
  }
  return (
    <article>
      <h1 className="font-bold mb-4 text-2xl">{post.title}</h1>
      <p className="my-4 text-[#999]" title={post.date}>
        Posted on {post.time}
        <span className="tag-link ml-2">{post.category}</span>
      </p>
      <MDX code={post.mdx} />
    </article>
  );
}

export const generateStaticParams = async () => {
  return (allPosts as PostOverview[]).map((post) => ({
    slug: post._meta.path,
  }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = (allPosts as PostOverview[]).find((p) => p._meta.path === slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.description,
  };
};
