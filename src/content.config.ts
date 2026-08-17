import { defineCollection, z, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH_ZH = "src/data/blog";
export const BLOG_PATH_EN = "src/data/blog-en";

// Content directory for the current build locale (PUBLIC_SITE_LOCALE).
export const BLOG_PATH = SITE.locale === "en" ? BLOG_PATH_EN : BLOG_PATH_ZH;

const blogSchema = ({ image }: SchemaContext) =>
  z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: image().or(z.string()).optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
    hideEditPost: z.boolean().optional(),
    timezone: z.string().optional(),
  });

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH_ZH}` }),
  schema: blogSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH_EN}` }),
  schema: blogSchema,
});

export const collections = { blog, "blog-en": blogEn };
