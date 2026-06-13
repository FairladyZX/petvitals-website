# PetVitals Wix Migration Analysis

Generated: 2026-05-23

## Current Site

- Source: https://www.petvitals.app/
- Wix site ID: `b18c06ac-193f-44b0-8d06-fe4343b6d999`
- Business name: PetVitals
- Contact email: info@petvitals.app
- Current Wix apps: Promote SEO, Wix Blog, Wix Forms & Payments, Wix Invoices
- Velo: disabled
- Site purpose: static marketing website for the PetVitals mobile app, with legal pages, contact, and blog content.

## Detected Page Structure

- `/` - Homepage
- `/features` - Feature detail page
- `/about` - Company/about page
- `/blog` - Blog listing
- `/terms` - Terms and Conditions
- `/privacy` - Privacy Policy
- `/contactus` - Contact form/page
- `/account-deletion` - Account deletion instructions

## Navigation

Primary navigation:

- Home
- Features
- About
- Blog
- More menu, containing legal/contact links

Footer navigation:

- Product: F.A.Q. / Early Access depending on page
- Company: Terms, Privacy, Contact Us, Account Deletion
- Social icons: Instagram, Facebook, Twitter/X, YouTube, TikTok
- Email: info@petvitals.app

## Brand And Visual Identity

- Logo: extracted to `/public/assets/PetVitalsLogo.png`
- Core colors: bright app blue, vivid orange, white, charcoal text, light blue surfaces
- Visual style: rounded mobile app screenshots, friendly pet photography, trustworthy pet-care language
- Typography detected in Wix output: Avenir-like body text and Kanit for some branded text. Migration will use `Inter` for readable product copy and keep brand feel through color, spacing, and imagery.

## Homepage Content

Main messaging:

- "Keep Your Pet's Medical History, Health And Activities In One Convenient App"
- PetVitals helps pet owners manage health activity, reminders, checkups, pet records, diet, walks, grooming, medication, and documents.
- Current CTAs link to:
  - App Store: https://apps.apple.com/us/app/petvitals-pet-health-tracker/id6755055480
  - Google Play: https://play.google.com/store/apps/details?id=com.petvitals.petvitals&utm_source=na_Med

Homepage sections detected:

- Hero with app store badges and app screenshots
- "Pet Health Made Easy!" feature trio: Reminders, Health, Pet Profiles
- Feature grid: Vet Visits, Track Pet Walks, Pills, Record Keeping, Trimming and more, Diet Control
- Mission bands: "WE CARE", "WE SIMPLIFY"
- CTA: "Want to learn more?"
- FAQ section
- Social follow/footer

## Blog

Wix Blog API returned 25 published posts. Recent posts include:

- Pet Food Recall Checklist: What To Do (Without Panicking)
- Revolutionizing Pet Care with Innovative Pet Health Technology
- Pet Hydration Clues Owners Can Watch For
- Interesting Cat Health Facts You'll Love to Know
- For Pet Owners who care.

Migration recommendation: static MDX files under `content/blog`, with generated listing and slug pages. No CMS is needed for this size.

## Forms

Wix Forms & Payments is installed and `/contactus` contains a contact page/form. Migration recommendation:

- Use a Next.js API route at `/api/contact`.
- Send mail through SMTP using Nodemailer, with Zoho SMTP or another provider.
- Keep secrets in environment variables.
- Provide a graceful mailto fallback on the page.

This avoids Wix dependency while staying simple for self-hosting.

## SEO

Detected page titles/descriptions are saved in `docs/crawl-report.json`.

Phase 1 SEO work:

- Root metadata
- Canonical URL
- OpenGraph/Twitter tags
- `robots.txt`
- `sitemap.xml`

Phase 2 SEO work:

- Per-page metadata for About, Features, Contact, Privacy, Terms, Account Deletion, Blog index, and all blog posts.
- Preserve existing slugs where possible.

## Assets

- Public asset extraction downloaded 156 files into `/public/assets`.
- One Wix resized asset returned HTTP 403 and is documented in `/docs/missing-assets.md`.
- Raw crawled HTML snapshots are stored under `/docs/source-*.html` for reference only. They must not be copied as implementation code.

## Wix-Specific Dependencies To Remove

- Wix hosting
- Wix Blog runtime
- Wix Forms & Payments runtime
- Wix SEO app output
- Wix-generated scripts, CSS, layout IDs, and tracking bootstraps

No dynamic Wix feature appears required for Phase 1.
