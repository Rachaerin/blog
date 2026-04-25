import type { Metadata } from "next";

export const DEFAULT_WEB_TITLE = "Create. Erase. Repeat.";

const scheme = process.env.NEXT_PUBLIC_SCHEME || "https";
const fqdn =
  process.env.NEXT_PUBLIC_FQDN || process.env.VERCEL_URL || "liucy.cn";
export const baseUrl = `${scheme}://${fqdn}`;

export const createCompleteUrl = (path: string) => {
  return `${baseUrl}/${path.startsWith("/") ? path.slice(1) : path}`;
};

export const _Metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s - ${DEFAULT_WEB_TITLE}`,
    default: DEFAULT_WEB_TITLE,
  },
  applicationName: DEFAULT_WEB_TITLE,
  authors: [{ name: "Rachaerin", url: "https://github.com/Rachaerin" }],
  description: "Create. Erase. Repeat.",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Blog", "Web"],
  category: "Personal Website",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: DEFAULT_WEB_TITLE,
    description: "Create. Erase. Repeat.",
    siteName: DEFAULT_WEB_TITLE,
    type: "website",
    url: "/",
    emails: ["chengyongliu@foxmail.com"],
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 1200,
        height: 630,
        alt: DEFAULT_WEB_TITLE,
      },
    ],
  },
};