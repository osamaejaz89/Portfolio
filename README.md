# Osama Ejaz — Portfolio

A modern, production-ready personal portfolio for **Osama Ejaz** — Manager IT (HO) at EFU General Insurance and Senior React Native / Frontend Developer based in Karachi, Pakistan.

Built as a single-page, beautifully animated showcase of experience, projects, skills, and contact details.

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + React 18
- [TypeScript](https://www.typescriptlang.org) (strict)
- [Tailwind CSS](https://tailwindcss.com) with a custom navy + React-Native-blue + accent-green theme
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered animations, page progress, and micro-interactions
- [Lucide React](https://lucide.dev) icons
- Google Fonts (Inter + JetBrains Mono) via `next/font`
- First-class SEO via `Metadata`, Open Graph, Twitter cards, `robots.ts`, and `sitemap.ts`

## Features

- Animated hero with a typewriter effect cycling through roles/titles
- Sticky, blurred navigation with active-section highlighting and a smooth scroll-progress bar
- Fully responsive (mobile-first) with a polished mobile menu
- Vertical, alternating experience timeline
- Project grid with hover effects, category tags, platform badges, and tech-stack chips
- Animated skills section with progress bars + soft-skill chips
- Education, certifications, and testimonial placeholders
- Glowing "Get in Touch" call-to-action with direct email / phone / LinkedIn / maps links
- Dark mode by default with a deep-navy + React-Native-blue palette and green accents
- Accessibility: reduced-motion support, focus states, aria-labels, semantic landmarks
- Optimized build: compressed, no `x-powered-by`, modern image formats

## Folder structure

```
.
├── app/                      # Next.js App Router
│   ├── globals.css           # Tailwind base + theme tokens
│   ├── layout.tsx            # Root layout, fonts, SEO metadata
│   ├── page.tsx              # Single-page composition of all sections
│   ├── robots.ts             # SEO: /robots.txt
│   └── sitemap.ts            # SEO: /sitemap.xml
├── components/               # All UI components (one per section)
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── ScrollProgress.tsx
│   ├── SectionHeading.tsx
│   ├── Skills.tsx
│   ├── Testimonials.tsx
│   └── TypingEffect.tsx
├── lib/
│   ├── data.ts               # ← All portfolio content (edit here!)
│   └── utils.ts              # `cn` classname helper
├── types/
│   └── index.ts              # Shared TypeScript types
├── public/                   # Static assets (drop resume.pdf here)
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
├── README.md
└── CUSTOMIZATION.md          # Step-by-step customization guide
```

## Run locally

> Requires **Node.js 18.17+** (Node 20 recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server at http://localhost:3000
npm run dev

# 3. Build for production
npm run build

# 4. Run the production build locally
npm start

# (Optional) Type-check + lint
npm run type-check
npm run lint
```

Using another package manager? The equivalents all work:

```bash
pnpm install && pnpm dev
yarn install && yarn dev
bun install && bun run dev
```

## Deploy

The easiest path is [Vercel](https://vercel.com):

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel — it auto-detects Next.js.
3. Deploy. Your portfolio goes live with zero configuration.

Other supported targets: Netlify, Cloudflare Pages, AWS Amplify, Docker, or any Node host that runs `next start`.

## Resume PDF

Drop your resume PDF into `public/resume.pdf`. The "Download Resume" buttons throughout the site link to `/resume.pdf` automatically. See `public/resume.pdf.README.txt` for notes.

## Customization

For a full walkthrough (colors, content, new sections, SEO, favicon, analytics), see **[CUSTOMIZATION.md](./CUSTOMIZATION.md)**.

## License

This is a personal portfolio for Osama Ejaz. You’re welcome to use the source as inspiration — please swap in your own content before publishing.
