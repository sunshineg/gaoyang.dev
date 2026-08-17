import { getCollection, type CollectionEntry } from "astro:content";
import { SITE } from "@/config";

export type BlogPost = CollectionEntry<"blog">;

// Collection backing the current build locale: "blog" (zh) or "blog-en" (en).
// Both collections share the same schema, so entries are interchangeable.
const BLOG_COLLECTION = SITE.locale === "en" ? "blog-en" : "blog";

/**
 * Fetch all blog posts for the current build locale
 * (selected via the PUBLIC_SITE_LOCALE environment variable).
 */
export const getBlogPosts = (): Promise<BlogPost[]> =>
  getCollection(BLOG_COLLECTION) as Promise<BlogPost[]>;
