import rss from "@astrojs/rss";
import { getBlogPosts } from "@/utils/getPosts";
import getSortedPosts from "@/utils/getSortedPosts";
import { getPath } from "@/utils/getPath";
import { SITE } from "@/config";

export async function GET() {
  const posts = getSortedPosts(await getBlogPosts());

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(post => ({
      link: new URL(getPath(post.id, post.filePath), SITE.website).toString(),
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDatetime,
    })),
  });
}
