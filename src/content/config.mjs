// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
/**
 * @type {CollectionConfig}
 */
const posts = {
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z.date().optional(),
      tags: z.array(z.string()).optional(),
      categories: z.array(z.string()).optional(),
      image: image()
        .refine((img) => img.width >= 480, {
          message: "Cover image must be at least 480 pixels wide!",
        })
        .optional(),
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

/**
 * @type {CollectionConfig}
 */
const siteItems = {
  type: "data",
  schema: z.object({
    title: z.string(),
    blogUrl: z.string(),
  }),
};

const blogCollection = defineCollection(posts);
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  portal: blogCollection,
  nav: navItems,
};
