# Portfolio Integration Tasks

## Phase 1 — Asset Preparation
- [/] Copy gambling classification images → `public/projects/gambling-classification/`
- [ ] Copy LEGIT project files → `public/showcase/legit/`

## Phase 2 — Ecommerce Static Demo
- [ ] Read key ecommerce files (ShopContext, Navbar, pages) to understand changes needed
- [ ] Patch `ShopContext.jsx` — replace API calls with static product data
- [ ] Patch `vite.config.js` — set base path to `/showcase/ecommerce/`
- [ ] Add Demo Mode banners to Login, Cart, Orders, PlaceOrder pages
- [ ] Build ecommerce frontend and copy output → `public/showcase/ecommerce/`

## Phase 3 — Gambling Case Study Page (Next.js)
- [ ] Create `src/app/projects/gambling-classification/page.tsx`

## Phase 4 — Portfolio `projects.ts` Updates
- [ ] Add `liveUrl`, `githubUrl`, `caseStudyUrl` fields to project entries

## Phase 5 — Work Section UI Updates
- [ ] Update `work.tsx` to show CTA link buttons on project cards

## Phase 6 — LEGIT Showcase Page
- [ ] Create `src/app/showcase/legit/page.tsx` with iframe embed

## Phase 7 — Verify
- [ ] Build Next.js portfolio (`npm run build`)
- [ ] Check ecommerce demo loads at `/showcase/ecommerce/`
