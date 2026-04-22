# CLAUDE.md — Portfolio Website Reference

## Project Overview
A single-page portfolio website built with Vite + React + TypeScript. Scaffolded via Lovable.dev. Deployed to GoDaddy shared hosting (Apache).

## Tech Stack
| Layer | Library | Version |
|---|---|---|
| Build | Vite | 5.4 |
| UI | React | 18.3 |
| Language | TypeScript | 5.8 |
| Styling | Tailwind CSS | 3.4 |
| Components | shadcn/ui (Radix UI) | latest |
| Routing | react-router-dom | 6.30 |
| State/Data | @tanstack/react-query | 5.83 |
| Forms | react-hook-form + zod | 7.61 / 3.25 |
| Charts | recharts | 2.15 |
| Testing | Vitest + Playwright | 3.2 / 1.57 |

## Project Structure
```
src/
  pages/
    Index.tsx          # Home page — assembles all 9 portfolio sections
    NotFound.tsx       # 404 fallback route
  components/
    portfolio/         # All page section components
      HeroSection.tsx
      AboutSection.tsx
      FeaturedWorkSection.tsx
      GallerySection.tsx
      TrailerSection.tsx
      VisionSection.tsx
      AchievementsSection.tsx
      ContactSection.tsx
      Footer.tsx
    ui/                # shadcn/ui primitives (do not edit manually)
  hooks/               # Custom React hooks
  lib/                 # Utility functions (cn, etc.)
  index.css            # Global styles + CSS variables + Google Fonts import
  App.tsx              # Root: QueryClientProvider > TooltipProvider > BrowserRouter > Routes
  main.tsx             # React DOM entry point
index.html             # HTML shell — update title/meta before each deploy
vite.config.ts         # Vite config; path alias @ → ./src; port 8080 in dev
tailwind.config.ts     # Brand colors + font families
```

## Brand Design Tokens

### Colors (HSL)
| Token | Value | Usage |
|---|---|---|
| `gold` | 40 60% 50% | Primary, accent, ring |
| `gold-light` | 40 50% 70% | Hover states |
| `cream` | 40 33% 97% | Background |
| `cream-dark` | 40 25% 93% | Card background |
| `charcoal` | 220 20% 14% | Foreground / text |
| `charcoal-light` | 220 10% 46% | Muted text |

Use Tailwind classes: `text-gold`, `bg-cream`, `text-charcoal`, etc.

### Typography
- **Headings (h1–h6):** `Playfair Display` serif — loaded from Google Fonts CDN
- **Body:** `Inter` sans-serif — loaded from Google Fonts CDN
- Tailwind classes: `font-serif` (Playfair Display), `font-sans` (Inter)

## Routing
`BrowserRouter` is used. Only two routes exist:
- `/` → `<Index />` (main portfolio page)
- `*` → `<NotFound />` (404)

**GoDaddy requires `.htaccess` in `public_html/` for SPA routing to work.** Without it, refreshing any URL returns a 404.

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:8080
npm run build        # Production build → dist/
npm run preview      # Preview dist/ locally before deploy
npm run test         # Run Vitest unit tests
```

## Production Build & GoDaddy Deployment

### Before Every Deploy — Update `index.html`
Replace Lovable placeholder values:
```html
<title>YOUR SITE NAME HERE</title>
<meta name="description" content="YOUR DESCRIPTION" />
<meta name="author" content="YOUR NAME" />
<meta property="og:title" content="YOUR SITE NAME HERE" />
<meta property="og:description" content="YOUR DESCRIPTION" />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
<meta name="twitter:title" content="YOUR SITE NAME HERE" />
<meta name="twitter:description" content="YOUR DESCRIPTION" />
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
```

### Build Steps
```bash
npm run build
# Output: dist/ folder
```

### Upload to GoDaddy
1. Log in to GoDaddy cPanel → **File Manager**
2. Navigate to `public_html/`
3. Delete old files if redeploying
4. Upload ALL contents of `dist/` directly into `public_html/` (not the `dist/` folder itself — its contents)
5. The `index.html` must live at `public_html/index.html`

### Required `.htaccess` (SPA Routing)
Create `public_html/.htaccess` with:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
This ensures all routes (including 404s) serve `index.html` so React Router can handle them.

### SSL
- Enable **Free SSL** in GoDaddy cPanel → SSL/TLS → Manage SSL
- Or use the Let's Encrypt option in cPanel if available on your plan

### Domain Pointing
If domain was purchased separately from hosting:
- GoDaddy cPanel → Domains → Manage DNS
- Point `A record` to your hosting server IP (find in cPanel → General Info)
- Changes propagate in 24–48 hours

## Known Issues / Pre-Deploy Checklist
- [ ] `index.html` title is "Lovable App" — **must update** before deploying
- [ ] OG/Twitter images point to `lovable.dev` CDN — **must replace** with own image
- [ ] Google Fonts load from CDN — requires visitor internet access (acceptable)
- [ ] No environment variables needed currently (no API keys in use)

## Conventions
- Path alias `@` maps to `src/` — use `@/components/...` not relative paths
- All portfolio section components live in `src/components/portfolio/`
- shadcn/ui components in `src/components/ui/` — do not edit these manually; use the shadcn CLI to add/update
- Dark mode is configured via `class` toggle on `<html>` — no dark mode styles are currently defined in `index.css`
- Forms use `react-hook-form` with `zod` schemas for validation
