# indrayam.com blog

This repository contains the static HTML blog published at [indrayam.com](https://indrayam.com/). It is the v1 site in the wider `indrayam.com` experience, alongside the resume, Daily Diff, and docs sites. The parent [`AGENTS.md`](../AGENTS.md) describes how those sites fit together and applies to work that crosses repository boundaries.

## Project map

- `index.html` — home page and recent posts.
- `archives/` — archived posts, category pages, and archive navigation.
- `aboutme.html`, `disclaimer.html`, and `404.html` — supporting site pages.
- `style.css` — shared blog styling and responsive layout.
- `js/` — browser scripts used by the pages.
- `images/` — images and other media referenced by the site.
- `robots.txt` and `sitemap.xml` — crawler guidance and published URL inventory.
- `vercel.json` — Vercel redirects for legacy post URLs.

## Working on the site

Read [`AGENTS.md`](AGENTS.md) before editing. It covers preservation, scope, and verification expectations. This is a static site; no general build or test command is documented. Check the relevant files and identify an appropriate way to preview any page or behavior you change. Do not assume editing a source file regenerates other pages or assets.
