import { z, defineCollection } from "astro:content";

// Articles ("Статии") and portal entries ("Синхромистичен портал") share one shape.
const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default("Astral ARRA"),
      date: z.date().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      categories: z.array(z.string()).optional(),
      image: image()
        .refine((img) => img.width >= 480, {
          message: "Корицата трябва да е поне 480 px широка.",
        })
        .optional(),
    }),
});

const nav = defineCollection({
  type: "data",
  schema: z.array(z.object({ title: z.string(), url: z.string() })),
});

const site = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
  }),
});

export const collections = {
  blog: posts,
  portal: posts,
  nav,
  site,
};
