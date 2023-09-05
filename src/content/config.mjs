// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
/**
 * @type {CollectionConfig}
 */
const posts = {
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
};

/**
 * @type {CollectionConfig}
 */
const navItems = {
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
    }),
  ),
};

const blogCollection = defineCollection(posts);
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  nav: navItems,
};
