import { z, defineCollection, reference } from "astro:content";

// Articles ("Статии") and portal entries ("Синхромистичен портал") share one shape.
const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().default("Astral ARRA"),
      date: z.date().optional(),
      description: z.string().optional(),
      section: reference("sections").optional(),
      tags: z.array(z.string()).optional(),
      categories: z.array(z.string()).optional(),
      image: image().optional(),
    }),
});

// The topic sections of "Статии" (Таро, Астрал, Magick...), with their intro
// and the articles that are announced but not written yet.
const sections = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      tagline: z.string(),
      image: image().optional(),
      upcoming: z
        .array(
          z.object({
            title: z.string(),
            teaser: z.string().optional(),
            image: image().optional(),
          }),
        )
        .default([]),
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
    motto: z.string().optional(),
  }),
});

export const collections = {
  blog: posts,
  portal: posts,
  sections,
  nav,
  site,
};
