"use client";

import { MDXContent } from "@content-collections/mdx/react";
import Pre from "./pre";

export default function MDX({ code }: { code: string }) {
  return (
    <div className="markdown-docs prose max-w-full" id="markdown-docs">
      <MDXContent
        code={code}
        components={{
          pre: Pre,
        }}
      />
    </div>
  );
}