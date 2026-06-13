# PetVitals Website

Self-hosted Next.js replacement for the current PetVitals Wix marketing site.

## Phase 1 Scope

- Homepage
- Shared layout
- Navbar and mobile menu
- Footer
- Reusable marketing components
- Core SEO files
- Docker/self-hosting scaffolding

Phase 2 adds About, Features, Contact, Privacy, Terms, Account Deletion, and static blog pages.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm install
npm run build
npm start
```

## Contact Form

The contact form posts to `/api/contact` and sends email with Nodemailer over SMTP. Configure these values in production:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `CONTACT_TO`

## Docker

```bash
cp .env.example .env
docker compose up --build
```

## Deployment Notes

This app is static-first and self-hosting friendly. It can run on VPS hosting, Docker, Coolify, Railway, Render, DigitalOcean, Hetzner, Cloudflare Pages, Vercel, or Netlify.

For Docker/Coolify-style deployments, use the included `Dockerfile` and expose port `3000`.

For Node hosting, run `npm install`, `npm run build`, and `npm start`.

## Wix Migration Notes

Migration analysis is documented in `docs/migration-analysis.md`.
The architecture plan is documented in `docs/architecture-plan.md`.
Extracted public assets are stored in `public/assets`.
Missing assets, if any, are documented in `docs/missing-assets.md`.
