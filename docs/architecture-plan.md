# PetVitals Architecture Plan

## Migration Strategy

Build a static-first Next.js site that preserves the current PetVitals content, app-store CTAs, visual identity, and SEO-friendly URLs while removing all Wix runtime dependencies.

Phase 1 scope:

- Homepage
- Shared layout
- Navbar and mobile menu
- Footer
- Design tokens and reusable marketing components
- Core SEO files
- Self-hosting scaffolding

Phase 2 scope:

- About
- Features
- Contact
- Privacy
- Terms
- Account Deletion
- Blog listing and post pages
- Contact API route
- Static MDX blog migration

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  AppStoreButtons.tsx
  CtaSection.tsx
  FAQSection.tsx
  FeatureCard.tsx
  Footer.tsx
  HeroSection.tsx
  MobileMenu.tsx
  Navbar.tsx
  SectionHeading.tsx
data/
  home.ts
lib/
  site.ts
public/
  assets/
docs/
  migration-analysis.md
  architecture-plan.md
  missing-assets.md
```

## Component Map

- `Navbar`: shared top navigation, logo, desktop links, mobile trigger.
- `MobileMenu`: accessible mobile drawer/panel.
- `Footer`: product/company links, app badges, social links, contact email.
- `HeroSection`: homepage headline, copy, app badges, app screenshot composition.
- `FeatureCard`: reusable feature/benefit card.
- `SectionHeading`: consistent section label, title, and description.
- `CTASection`: app download and learn-more calls to action.
- `FAQSection`: semantic FAQ content using native disclosure controls.
- `AppStoreButtons`: app-store/google-play image badges.

## SEO Plan

- Use Next.js metadata API.
- Set `metadataBase` to `https://www.petvitals.app`.
- Use canonical URLs.
- Generate static `robots.txt` and `sitemap.xml`.
- Preserve public URL paths.
- Use semantic heading order and descriptive image alt text.
- Add OpenGraph/Twitter metadata using local assets.

## Performance Plan

- Use static rendering by default.
- Use `next/image` for local image optimization.
- Avoid client JavaScript except for the mobile menu.
- Avoid Framer Motion in Phase 1 unless a clear need appears.
- Keep homepage components small and cache-friendly.
- Use Docker standalone output for self-hosting.

## Deployment Plan

Supported targets:

- VPS with Node
- Docker / Docker Compose
- Coolify
- Railway
- Render
- DigitalOcean
- Hetzner
- Cloudflare Pages
- Vercel
- Netlify

Required commands:

```bash
npm install
npm run build
npm start
```

Docker will use Next.js standalone output.
