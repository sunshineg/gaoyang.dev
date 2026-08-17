// Build-time site locale: "zh" (gaoyang.dev, default) | "en" (sunnygao.com).
// Set via the PUBLIC_SITE_LOCALE environment variable at build time.
const LOCALE = process.env.PUBLIC_SITE_LOCALE === "en" ? "en" : "zh";

export const SITE = {
  website: LOCALE === "en" ? "https://sunnygao.com/" : "https://gaoyang.dev/", // replace this with your deployed domain
  author: LOCALE === "en" ? "Sunny Gao" : "高阳Sunny",
  profile: "https://github.com/sunshineg",
  desc:
    LOCALE === "en"
      ? "Sunny Gao's blog on startups, open source and products"
      : "高阳Sunny 的个人博客，记录创业、开源与产品思考",
  title: LOCALE === "en" ? "Sunny Gao's Blog" : "Hello World: Re-Act",
  locale: LOCALE,
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/sunshineg/gaoyang.dev/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
