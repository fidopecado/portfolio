# Firdaus Ravi Faizzani — Portfolio

A responsive personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui conventions.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.example` to `.env.local` and set the public origin:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute origin used for canonical links, Open Graph and Twitter cards. Defaults to `http://localhost:3000`. |

Leaving it at the default builds fine, but shared links will preview against localhost.

## External links

Every off-site destination lives in [`src/data/links.ts`](src/data/links.ts):

- `socialLinks` — profile links. An entry with an empty `href` is skipped, so a half-filled profile never ships a dead link.
- `cyMonitor` — the CYMonitor repository, project site and hosted app.

## Project demos

| Project | Route | Source |
| --- | --- | --- |
| CYMonitor | `/showcase/cymonitor` | iframe of the GitHub Pages build in the `CYMonitor` repo |
| E-Commerce | `/showcase/ecommerce` | static build in `public/showcase/ecommerce` |
| GITLEGIT Mochi | `/showcase/legit` | static site in `public/showcase/legit` |
| Sentiment Analysis | `/showcase/sentiment-analysis` | iframe of the Streamlit Cloud app |

The CYMonitor demo is hosted from the firmware repository rather than copied here, so the demo can never drift from the code it documents. Deploy that repo's Pages workflow before linking to this route.

## Deployment

The site builds as a self-contained Docker image:

```bash
docker build -t portfolio .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://your-domain.example portfolio
```

`NEXT_PUBLIC_SITE_URL` is baked in at build time, so pass it to `docker build` as well when the image is built by CI:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.example -t portfolio .
```

Hosted targets work the same way — set `NEXT_PUBLIC_SITE_URL` in the project's environment settings before the first build. The app uses no platform-specific APIs, so Vercel is a drop-in target; Cloudflare Pages needs an adapter for the Next runtime and is a later migration.

## Validation

```bash
npm run lint
npm run build
```

CI runs both on every push and pull request.

## Design credit

The grayscale design tokens are adapted from the MIT-licensed [e-ink.subl](https://github.com/e-ink-colorscheme/e-ink.subl) color scheme.
