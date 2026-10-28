import { SITE } from "@/config";

// Locale-scoped UI strings. Keyed by SITE.locale (PUBLIC_SITE_LOCALE at build time).
const strings = {
  zh: {
    homeTitle: "I’m 高阳Sunny — Hello World: Re-Act",
    postsTitle: "Posts — 高阳Sunny",
    archivesTitle: "文章｜Hello World: Re-Act",
    aboutTitle: "About — 高阳Sunny",
    friendsTitle: "友情链接 — 高阳Sunny",
    friends: "友情链接",
    posts: "文章",
    about: "关于",
    postsDesc: "All the articles I've posted.",
    ccLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans",
  },
  en: {
    homeTitle: "Sunny Gao — Sunny Gao's Blog",
    postsTitle: "Posts | Sunny Gao's Blog",
    archivesTitle: "Posts | Sunny Gao's Blog",
    aboutTitle: "About | Sunny Gao's Blog",
    friendsTitle: "Friends | Sunny Gao's Blog",
    friends: "Friends",
    posts: "Posts",
    about: "About",
    postsDesc: "All the articles I've posted.",
    ccLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
} as const;

export const t = strings[SITE.locale];
