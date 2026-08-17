# 👨‍💻 Hi there, I'm 高阳Sunny 👋

Welcome to the source repository for my personal blog!

## 🌐 Live Site

Check it out at **[gaoyang.dev](https://gaoyang.dev)**

## 📚 About This Blog

This blog is built using a modern decoupled architecture:

- **Frontend**: [Astro](https://astro.build/) - A blazingly fast web framework.
- **Backend/CMS**: [Hashnode Headless CMS](https://hashnode.com/headless) - My blog posts are managed and served via Hashnode's GraphQL API.
- **Hosting**: Deployed on [Cloudflare Pages](https://pages.cloudflare.com/) for optimal global performance.

Only the post content and metadata are fetched dynamically from Hashnode. The blog's title, descriptions, and other core layout settings are managed locally in this codebase to ensure complete customization of the design and UX.

## 🚀 Deployment (Cloudflare Pages)

To deploy this project using Cloudflare Pages:

1. Push this repository to GitHub.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com) and go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select this repository.
4. Configure the build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Save and Deploy!
6. After deployment, navigate to the **Custom Domains** tab in your Pages project settings to bind `gaoyang.dev`.

## 🙏 Acknowledgements

A huge thank you to [Sat Naing](https://satnaing.dev/) for creating the original [Astro Paper](https://github.com/satnaing/astro-paper) theme! This blog is heavily inspired by and built on top of that fantastic, minimal, responsive, and SEO-friendly Astro theme.

---

_🔆 Make something rocks 🎸 Better Sunny Next Time 🔆_
