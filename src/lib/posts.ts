import type { CollectionEntry } from "astro:content";
import { formatDate as fmt, type Lang } from "./i18n";

type Post = CollectionEntry<"blog" | "portal" | "blog-en" | "portal-en">;

export function sortByDate<T extends Post>(posts: T[]): T[] {
  return [...posts].sort(
    (a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0),
  );
}

export function formatDate(date: Date, lang: Lang = "bg"): string {
  return fmt(date, lang);
}

/** Groups posts by one of their list fields (tags or categories). */
export function groupBy<T extends Post>(posts: T[], field: "tags" | "categories") {
  const groups: Record<string, T[]> = {};
  for (const post of posts) {
    for (const key of post.data[field] ?? []) {
      (groups[key] ??= []).push(post);
    }
  }
  return groups;
}
