# Customization Guide

Everything you’re likely to change lives in **`lib/data.ts`**. You should almost never need to edit a component for a content-only change.

---

## 1. Update personal info, title, and summary

Open `lib/data.ts` and edit the `personalInfo` object:

```ts
export const personalInfo = {
  name: "Your Name",
  firstName: "Your",
  title: "Your Role | Your Specialty",
  typingRoles: [
    "Senior React Native Developer",
    "Frontend Engineer",
    // add / remove / reorder as needed
  ],
  location: "City, Country",
  phone: "+XX-XXX-XXX-XXXX",
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  resumeUrl: "/resume.pdf",
  summary: "Your professional summary...",
  stats: [
    { label: "Years of Experience", value: "5+" },
    // ...
  ],
};
```

- `typingRoles` feeds the animated typewriter in the hero — keep 3-6 entries.
- `stats` shows up as a 2×2 / 1×4 metrics strip in the About section.

## 2. Update the navigation

Edit `navLinks` in `lib/data.ts`. Each entry needs a `label` and an in-page `#anchor` that matches a section `id` in `app/page.tsx`.

```ts
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  // add more here
];
```

## 3. Update social / contact links

- `socialLinks` — rendered in the hero and footer. Uses icons from `lucide-react`.
- `contactCards` — rendered in the big "Get in Touch" CTA.

Replace the placeholder GitHub and Twitter URLs with your real profiles (or remove those entries entirely).

## 4. Update experience, projects, skills, education, certifications, testimonials

All of these are simple arrays in `lib/data.ts`:

| What                  | Array name        | Where it renders                      |
| --------------------- | ----------------- | ------------------------------------- |
| Jobs / roles          | `experiences`     | `components/Experience.tsx` (timeline)|
| Featured projects     | `projects`        | `components/Projects.tsx` (card grid) |
| Skill categories      | `skillGroups`     | `components/Skills.tsx` (progress bars)|
| Soft skills           | `softSkills`      | `components/Skills.tsx` (chips)       |
| Education             | `education`       | `components/Education.tsx`            |
| Certifications        | `certifications`  | `components/Certifications.tsx`       |
| Testimonials          | `testimonials`    | `components/Testimonials.tsx`         |

Each object is fully typed in `types/index.ts`, so your IDE will auto-complete valid fields.

### Project card accent color

Each project has an `accent: "rn" | "accent"` field.
- `"rn"` → React-Native blue accent.
- `"accent"` → green accent.
Alternate them for visual variety across the grid.

## 5. Change the color palette

All theme tokens live in **`tailwind.config.ts`** under `theme.extend.colors`:

```ts
colors: {
  navy: { 950: "#020617", 900: "#060B1A", 800: "#0A1124", /* ... */ },
  rn:   { DEFAULT: "#61DAFB", 300: "#61DAFB", /* ... */ },
  accent: { DEFAULT: "#22D3A5", /* ... */ },
}
```

Update the hex values and the entire site re-themes automatically.

The radial glow / grid background lives in **`app/globals.css`** under the `body` selector — tweak the gradient stops there if you want a different backdrop mood.

## 6. Change fonts

Fonts are set up in `app/layout.tsx` using `next/font/google`:

```ts
import { Inter, JetBrains_Mono } from "next/font/google";
```

Swap either import for any Google font (e.g. `Manrope`, `Space_Grotesk`, `Fira_Code`) and update the CSS variables in `tailwind.config.ts` (`fontFamily.sans` / `fontFamily.mono`) if you rename them.

## 7. Add your resume PDF

Place your resume at `public/resume.pdf`. That’s it — every "Download Resume" button already points to `/resume.pdf`.

Want a different filename? Update `personalInfo.resumeUrl` in `lib/data.ts` (e.g. `"/Osama-Ejaz-Resume.pdf"`) and place the file at that exact path under `public/`.

## 8. SEO, Open Graph, and site URL

Edit `app/layout.tsx`:

- `metadataBase: new URL("https://osamaejaz.dev")` — set to your real domain.
- `metadata.title`, `metadata.description`, `metadata.keywords` — tune for your profile.
- `metadata.openGraph.*` and `metadata.twitter.*` — update URL, description, and add an OG image if you have one.

Add an Open Graph image:

1. Export a 1200×630 PNG as `public/og-image.png`.
2. Add to `metadata.openGraph`:
   ```ts
   images: [{ url: "/og-image.png", width: 1200, height: 630 }],
   ```

Also update the domain in `app/robots.ts` and `app/sitemap.ts`.

## 9. Favicon

Add `app/favicon.ico` (or `app/icon.png` — Next.js picks it up automatically). You can also add `app/apple-icon.png` (180×180) for iOS home screens.

## 10. Add or remove a section

1. Create a new component in `components/YourSection.tsx` (start from any existing section as a template — they all use the shared `SectionHeading` component).
2. Import it in `app/page.tsx` and drop it where you want it:
   ```tsx
   <Skills />
   <YourSection />   {/* new */}
   <Education />
   ```
3. Add a matching entry to `navLinks` in `lib/data.ts` if it should appear in the navbar.

## 11. Analytics (optional)

For [Vercel Analytics](https://vercel.com/analytics):

```bash
npm install @vercel/analytics
```

Then in `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

For Google Analytics, use [`@next/third-parties`](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries).

## 12. Contact form (optional)

The current `Contact` section uses direct `mailto:` / `tel:` / LinkedIn links for zero-backend simplicity. If you want an actual form:

- [Formspree](https://formspree.io), [Resend](https://resend.com), or [EmailJS](https://www.emailjs.com) are all drop-in friendly.
- Add a server action in `app/actions/contact.ts` and point a `<form action={...}>` at it.

---

## Where everything renders, at a glance

| Section         | Component file                      | Data source in `lib/data.ts` |
| --------------- | ----------------------------------- | ---------------------------- |
| Hero            | `components/Hero.tsx`               | `personalInfo`, `socialLinks`|
| About           | `components/About.tsx`              | `personalInfo`               |
| Experience      | `components/Experience.tsx`         | `experiences`                |
| Projects        | `components/Projects.tsx`           | `projects`                   |
| Skills          | `components/Skills.tsx`             | `skillGroups`, `softSkills`  |
| Education       | `components/Education.tsx`          | `education`                  |
| Certifications  | `components/Certifications.tsx`     | `certifications`             |
| Testimonials    | `components/Testimonials.tsx`       | `testimonials`               |
| Contact         | `components/Contact.tsx`            | `personalInfo`, `contactCards`|
| Footer          | `components/Footer.tsx`             | `personalInfo`, `socialLinks`, `navLinks`|

Happy shipping!
