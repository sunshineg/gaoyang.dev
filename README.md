# 👨‍💻 Hi there, I'm 高阳 Sunny 👋

Welcome to the source repository for my personal blog — [gaoyang.dev](https://gaoyang.dev)（中文）and [sunnygao.com](https://sunnygao.com)（English）.

## 🌐 Live Sites

| Site | Language | URL |
|------|----------|-----|
| gaoyang.dev | 中文 | [gaoyang.dev](https://gaoyang.dev) |
| sunnygao.com | English | [sunnygao.com](https://sunnygao.com) |

## 📚 About This Blog

This blog is built on a **static-first** architecture — no external CMS, no runtime API calls, just Markdown + Astro + Cloudflare CDN.

- **Framework**: [Astro 5](https://astro.build/) + [AstroPaper](https://github.com/satnaing/astro-paper) theme, restyled with the MindMux design system
- **Content**: Blog posts are stored as Markdown files in the same repository (`src/data/blog/` for Chinese, `src/data/blog-en/` for English). The build is fully self-contained.
- **Build & Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) with global CDN distribution — push to `main` triggers automatic build and deploy
- **Search**: [Pagefind](https://pagefind.app/) — static search index generated at build time
- **Syntax Highlighting**: [Shiki](https://shiki.style/) with custom transformers
- **OG Images**: [Satori](https://github.com/vercel/satori) + @resvg/resvg-js — dynamically generated per post at build time

### One repo, two sites

Both sites share the same codebase and theme, differentiated only by the `PUBLIC_SITE_LOCALE` environment variable:

| `PUBLIC_SITE_LOCALE` | Site | Content Collection | Domain |
|----------------------|------|--------------------|--------|
| `zh` (default) | 中文博客 | `src/data/blog/` | gaoyang.dev |
| `en` | English blog | `src/data/blog-en/` | sunnygao.com |

Two Cloudflare Pages projects connect to this single repository, each with its own locale environment variable. Every push to `main` triggers both sites to build and deploy independently.

## 🛠️ Local Development

```bash
pnpm install     # install dependencies
pnpm dev         # start dev server (Chinese site by default)
pnpm build       # build for production (Chinese)
pnpm build:en    # build English site
```

## 🚀 Deployment

Deployment is fully automated via Cloudflare Pages Git integration — no manual steps needed:

1. **Chinese site** — Pages project `gaoyang`, build command `pnpm build`, custom domain `gaoyang.dev`
2. **English site** — Pages project `sunnygao`, build command `pnpm build`, env var `PUBLIC_SITE_LOCALE=en`, custom domain `sunnygao.com`

Push to `main` → both projects auto-build → live.

## 📄 License

This repository uses **dual licensing** (inspired by [steipete.me](https://github.com/steipete/steipete.me/blob/main/LICENSE)):

- **Blog Posts & Documentation**: Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — share and adapt the content, even commercially, as long as appropriate credit is given.
- **Code (Theme, Scripts, Configuration)**: Licensed under the [MIT License](./LICENSE) — see the [LICENSE](./LICENSE) file for full details.

## 🙏 Acknowledgements

- **[AstroPaper](https://github.com/satnaing/astro-paper)** by [Sat Naing](https://satnaing.dev/) — the minimal, responsive, SEO-friendly Astro theme this blog is built upon.
- **[MindMux](https://mindmux.ai/)** — The content maintenance, iteration, and publishing of this blog are all powered by [MindMux](https://mindmux.ai/), an AI-native knowledge compiler and project brain that helps you compile a living project brain — capturing decisions, context, and knowledge into Markdown that evolves with your work. Built with MindMux.

---

_🔆 Make something rocks 🎸 Better Sunny Next Time 🔆_
