const HASHNODE_API = "https://gql.hashnode.com/";
const HOST = "gaoyang.hashnode.dev";
import type { CollectionEntry } from "astro:content";

export async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(HASHNODE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL Errors:", JSON.stringify(json.errors, null, 2));
  }
  if (!json.data) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPublication() {
  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        isTeam
        title
        about {
          html
        }
        descriptionSEO
        links {
            twitter
            github
            hashnode
        }
      }
    }
  `;
  const data = await fetchAPI(query, { host: HOST });
  return data.publication;
}

export async function getPosts(first = 50, after = null): Promise<CollectionEntry<"blog">[]> {
  const query = `
    query Publication($host: String!, $first: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              tags {
                name
                slug
              }
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;
  const data = await fetchAPI(query, { host: HOST, first, after });

  // Map Hashnode post structure to Astro Paper CollectionEntry<"blog"> structure
  return data.publication.posts.edges.map(({ node }: any) => {
    return {
      id: node.slug,
      slug: node.slug,
      body: "", // Used mainly if fetching full markdown, not needed for lists
      collection: "blog",
      data: {
        title: node.title,
        modDatetime: null,
        pubDatetime: new Date(node.publishedAt),
        description: node.brief,
        draft: false,
        tags: node.tags?.map((tag: any) => tag.name) || [],
        author: "Gao Yang",
        canonicalURL: `https://${HOST}/post/${node.slug}`,
        editPost: {
          disabled: true,
          url: "",
          appendFilePath: false
        }
      }
    } as CollectionEntry<"blog">;
  });
}

export async function getPostBySlug(slug: string) {
  const query = `
    query Publication($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          title
          subtitle
          publishedAt
          coverImage {
            url
          }
          content {
            html
          }
        }
      }
    }
  `;
  const data = await fetchAPI(query, { host: HOST, slug });
  return data.publication.post;
}
