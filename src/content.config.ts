import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experiences = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experiences" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    type: z.string(), // "Full-time", "Contract", etc.
    period: z.string(),
    country: z.string().optional(),
    description: z.string(),
    current: z.boolean().default(false),
    order: z.number(),
    tags: z.array(z.string()).optional(),
    website: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const honors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/honors" }),
  schema: z.object({
    title: z.string(),
    award: z.string(),
    description: z.string(),
    year: z.number(),
    badge: z.string().optional(),
    badgeColor: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { experiences, projects, honors };
