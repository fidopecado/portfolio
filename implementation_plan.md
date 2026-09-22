# Portfolio Integration — Full Implementation Plan

## Summary

Connect all four past projects from `D:\Past Project` into the Next.js portfolio at `C:\Users\Fido\Documents\Portfolio`. 

Q1 — Ecommerce Demo Scope (the most complex one): The MERN frontend has Cart, Login, Orders, PlaceOrder — all require a live backend. Do you want:

A) Keep all pages, show a "⚠️ Demo Mode" banner on protected actions — users can still browse/navigate everything
B) Strip to read-only: Home, Collection, Product detail, About, Contact only
Q2 — TikTok Sentiment Analysis (it's a Streamlit Python app — can't run in Next.js):

A) Just add a GitHub link button to the existing project card (quick)
B) Build a full case-study page like the gambling one, with screenshots from the dashboard
Q3 — LEGIT (Bootstrap HTML site):

A) Copy it into public/showcase/legit/ and embed via <iframe> in a portfolio sub-page
B) Just link to GitHub in the project card

The user's answers: **Q1=A** (Demo Mode banners), **Q2=A** (GitHub link), **Q3=A** (iframe embed).

---

## Proposed Changes

### Component 1 — Portfolio Data Layer

---

#### [MODIFY] [projects.ts](file:///C:/Users/Fido/Documents/Portfolio/src/data/projects.ts)

Add three optional link fields to the project type definition and populate them per project:

```ts
// New optional fields on each project object
liveUrl?: string        // external or internal live/demo URL
githubUrl?: string      // GitHub repository
caseStudyUrl?: string   // internal Next.js route (e.g. /projects/gambling-classification)
```

**Populated values:**

| Project | `liveUrl` | `githubUrl` | `caseStudyUrl` |
|---|---|---|---|
| E-Commerce (01) | `/showcase/ecommerce/` | — | — |
| Gambling Classification (02) | — | — | `/projects/gambling-classification` |
| TikTok Sentiment (03) | — | `https://github.com/...` | — |
| LEGIT (05) | `/showcase/legit/` | — | — |

> [!NOTE]
> GitHub URL for the TikTok Sentiment project needs to be confirmed by the user and inserted manually after implementation.

---

### Component 2 — Work Section UI

---

#### [MODIFY] [work.tsx](file:///C:/Users/Fido/Documents/Portfolio/src/components/sections/work.tsx)

Add a row of CTA link buttons at the bottom of each `CardContent`. Only renders when the project has at least one link field defined. Buttons:
- **"View Demo"** → opens `liveUrl` (internal path, no `target="_blank"`)
- **"Case Study"** → client-side navigation to `caseStudyUrl`
- **"GitHub"** → opens `githubUrl` in a new tab

---

### Component 3 — Gambling Classification Case Study Page

---

#### [NEW] `src/app/projects/gambling-classification/page.tsx`

A full Next.js page styled with the portfolio's design system (same fonts, colors, `Card` components, `Badge` components). All content is static — no data fetching.

**Source material:**
- Content: `D:\Past Project\Gambling-Classification-with-IBM-Granite\Readme.md`
- Images: already copied to `public/projects/gambling-classification/`

**Page structure:**

1. **Back link** — `← Back to Portfolio` linking to `/#work`
2. **Hero block**
   - Title: *"Deteksi Komentar Judi Online pada YouTube (ID) dengan LLM IBM Granite"*
   - Subtitle / type badge
   - Tech stack badges: Python, IBM Granite 3.2, Prompt Engineering, NLP, Kaggle
3. **Problem Statement section** — Gambling comment obfuscation in YouTube ID; why simple filters fail
4. **EDA Highlights section** — Three images in a responsive grid:
   - `Top10Channel.png`
   - `Top20Video.png`
   - `Wordcloud.png`
   - Caption text from the README (target audience analysis)
5. **Methodology section** — Numbered steps + two code blocks showing Prompt Awal and Prompt Final (with glossary and few-shot examples)
6. **Results — IBM Granite Large-Scale Test** — Table (N=2222 → 8884, accuracy stable ~88–89%)
7. **Results — Prompt Engineering Effect** — Table (Prompt Awal 73.33% → Prompt Final 96.67%)
8. **Results — Multi-Model Comparison** — Full table (6 models × 2 prompts)
9. **Key Insight** — Callout: FN/FP error analysis, Granite 3.3 regression note
10. **Dataset credit** — Link to Kaggle dataset by `yaemico`

---

### Component 4 — Ecommerce Static Demo

The ecommerce frontend is a **separate Vite project** at `D:\Past Project\PKL\ecommerce-app\frontend`. It will be patched in-place, built, and the output dropped into `public/showcase/ecommerce/` in the Next.js portfolio.

---

#### Step 4a — [NEW] Static products data file

**File:** `D:\Past Project\PKL\ecommerce-app\frontend\src\assets\staticProducts.js`

Create a JS file exporting a hardcoded array of `products` objects — a representative sample (~10–15 products) extracted from the existing `assets.js` with static local image paths. This replaces the live MongoDB API response.

Each product object shape (matching what the backend would have returned):
```js
{
  _id: "static_001",
  name: "...",
  description: "...",
  price: 150000,
  image: ["/assets/p_img1.png"],  // relative paths via Vite asset import
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L", "XL"],
  bestseller: true,
  date: 1711885751448,
}
```

---

#### Step 4b — [MODIFY] `ShopContext.jsx`

Replace all backend/axios logic with static data:

- Remove `axios` import
- Remove `backendUrl` (was `import.meta.env.VITE_BACKEND_URL`)
- Replace `getProductsData()` which called `/api/product/list` → import `staticProducts` and call `setProducts(staticProducts)` directly in `useEffect`
- Remove `getUserCart()` — no auth in demo
- Keep `addToCart`, `updateQuantity`, `getCartCount`, `getCartAmount` — these work purely on local `cartItems` state, no API needed
- Remove the token-guarded axios calls inside `addToCart` and `updateQuantity` (keep the local state mutations)
- Keep `token` and `setToken` in context value (pages still reference them) but initialize to `""` permanently — no login ever succeeds

---

#### Step 4c — [MODIFY] `Login.jsx`

- Remove `axios` import
- Replace `onSubmitHandler` with a demo-mode handler that shows a toast: *"Demo Mode — Login is disabled in this portfolio showcase."* and prevents navigation
- Add a **Demo Mode banner** at the top of the form:
  ```
  ⚠️ Demo Mode — This is a static portfolio showcase. Authentication is disabled.
  ```

---

#### Step 4d — [MODIFY] `Cart.jsx`

- Add a **Demo Mode banner** at the top of the cart page:
  ```
  ⚠️ Demo Mode — Cart items are stored locally. Checkout is disabled.
  ```
- Intercept the "PROCEED TO CHECKOUT" button's `onClick` → show a toast instead of navigating to `/place-order`:
  *"Demo Mode — Checkout is not available in this portfolio showcase."*

---

#### Step 4e — [MODIFY] `Orders.jsx`

- Remove `axios` import
- Replace `loadOrderData()` with a function that sets `orderData` to a hardcoded sample array (2–3 fake orders) so the page renders something meaningful
- Add a **Demo Mode banner** at the top:
  ```
  ⚠️ Demo Mode — Showing sample order data.
  ```

---

#### Step 4f — [MODIFY] `PlaceOrder.jsx`

- Remove `axios` import
- Replace `onSubmitHandler` → show toast: *"Demo Mode — Order placement is disabled in this portfolio showcase."*
- Add a **Demo Mode banner** at the top of the form

---

#### Step 4g — [MODIFY] `vite.config.js`

```js
export default defineConfig({
  plugins: [react()],
  base: '/showcase/ecommerce/',   // ← add this
  server: { port: 5173 }
})
```

This ensures all asset paths in the built output resolve correctly when served from `/showcase/ecommerce/` inside the portfolio.

---

#### Step 4h — Build & deploy output

```bash
# Run inside D:\Past Project\PKL\ecommerce-app\frontend
npm install
npm run build
```

Copy the contents of `D:\Past Project\PKL\ecommerce-app\frontend\dist\` → `C:\Users\Fido\Documents\Portfolio\public\showcase\ecommerce\`

> [!NOTE]
> The ecommerce demo will be accessible at `/showcase/ecommerce/` as a standalone static React app embedded within the portfolio's `public/` folder. No Next.js routing is needed — Next.js just serves the static files.

---

### Component 5 — LEGIT Showcase Page

---

#### [COPY — already done] LEGIT static files

Files already copied from `D:\Past Project\LEGIT\` → `public/showcase/legit/` (minus `node_modules`).

> [!WARNING]
> The LEGIT site uses Bootstrap CSS loaded from `node_modules/bootstrap/`. After copying (without node_modules), the CSS reference in `index.html` will be broken. We need to check `index.html` to see if it references a CDN or local path. If local, we'll patch the HTML to use the Bootstrap CDN URL instead.

#### [NEW] `src/app/showcase/legit/page.tsx`

A Next.js page that embeds the LEGIT site in a full-screen `<iframe>`:

```tsx
export default function LegitShowcase() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header bar */}
      <div className="flex items-center gap-4 px-6 py-3 border-b bg-background text-sm text-muted-foreground font-mono">
        <a href="/#work" className="hover:text-foreground transition-colors">← Back to Portfolio</a>
        <span className="text-border">|</span>
        <span>GITLEGIT Mochi — Company Profile (Static Demo)</span>
      </div>
      {/* Iframe embed */}
      <iframe
        src="/showcase/legit/index.html"
        className="flex-1 w-full border-0"
        style={{ height: 'calc(100vh - 49px)' }}
        title="LEGIT Mochi Business Company Profile"
      />
    </main>
  )
}
```

---

## Verification Plan

### Build Tests
```bash
# 1. Build the ecommerce static demo
cd "D:\Past Project\PKL\ecommerce-app\frontend"
npm run build

# 2. Build the Next.js portfolio
cd "C:\Users\Fido\Documents\Portfolio"
npm run build
```

### Manual Verification Checklist
- [ ] **`/#work`** — All 6 project cards show; cards with links display CTA buttons
- [ ] **`/projects/gambling-classification`** — Page loads, all 3 EDA images visible, both prompt code blocks render, all 3 result tables correct
- [ ] **`/showcase/ecommerce/`** — React app loads; Home, Collection, About, Contact pages navigate correctly; Login shows demo banner; Cart shows demo banner + checkout blocked; Orders shows sample data; PlaceOrder shows demo banner
- [ ] **`/showcase/legit/`** — iframe loads the LEGIT Bootstrap site correctly with CSS intact
- [ ] **Portfolio build** — `npm run build` exits with code 0, no TypeScript errors
