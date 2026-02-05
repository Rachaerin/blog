import { allPosts } from "content-collections";
import { compareDesc } from "date-fns";
import { PostOverview } from "./types";

export const postsOrderedByDate = (allPosts as PostOverview[]).sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);
