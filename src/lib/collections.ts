import { getCollection } from "astro:content";

// Which content collections hold each language's articles.
export const COLLECTIONS = {
  bg: { blog: "blog", portal: "portal", sections: "sections" },
  en: { blog: "blog-en", portal: "portal-en", sections: "sections-en" },
} as const;

/** Maps each translated article to its counterpart: "/blog/x" ↔ "/en/blog/y". */
export async function articleAlternates(kind: "blog" | "portal"): Promise<Map<string, string>> {
  const english = await getCollection(COLLECTIONS.en[kind]);
  const map = new Map<string, string>();
  for (const post of english) {
    const bg = post.data.translationOf;
    if (!bg) continue;
    map.set(`/${kind}/${bg}`, `/en/${kind}/${post.slug}`);
    map.set(`/en/${kind}/${post.slug}`, `/${kind}/${bg}`);
  }
  return map;
}

