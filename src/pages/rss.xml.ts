import rss from "@astrojs/rss";
import { getPosts, getPublication } from "@/utils/hashnode";
import { SITE } from "@/config";

export async function GET() {
  const posts = await getPosts(50);
  const publication = await getPublication();

  return rss({
    title: publication.title,
    description: publication.descriptionSEO || SITE.desc,
    site: SITE.website,
    items: posts.map((post: any) => ({
      link: post.data.canonicalURL,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDatetime,
    })),
  });
}
