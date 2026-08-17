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

## 🌍 English Site (sunnygao.com)

The same repository also builds an English site, **[sunnygao.com](https://sunnygao.com)**, selected via the `PUBLIC_SITE_LOCALE` environment variable (`zh` | `en`, default `zh`):

- `PUBLIC_SITE_LOCALE=zh` (default): site config points to `gaoyang.dev`, posts come from `src/data/blog/`.
- `PUBLIC_SITE_LOCALE=en`: site config points to `sunnygao.com`, posts come from `src/data/blog-en/`.

Deploy both sites from this one repository with **two Cloudflare Pages projects**:

1. **Chinese site** (existing project):
   - **Build command**: `pnpm build` (no extra env vars needed; locale defaults to `zh`)
   - **Custom domain**: `gaoyang.dev`
2. **English site** (create a second Pages project connected to the same repository):
   - **Build command**: `pnpm build:en` — or keep `pnpm build` and set the environment variable `PUBLIC_SITE_LOCALE=en` under **Settings** -> **Environment variables**
   - **Build output directory**: `dist`
   - **Custom domain**: `sunnygao.com`

Every push to the repo triggers both projects to build and deploy their respective sites. The theme stays identical across both; only the site config (domain, title, author, description) and the content collection differ.

## 🙏 Acknowledgements

A huge thank you to [Sat Naing](https://satnaing.dev/) for creating the original [Astro Paper](https://github.com/satnaing/astro-paper) theme! This blog is heavily inspired by and built on top of that fantastic, minimal, responsive, and SEO-friendly Astro theme.

---

_🔆 Make something rocks 🎸 Better Sunny Next Time 🔆_
