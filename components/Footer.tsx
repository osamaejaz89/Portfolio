"use client";

import { Heart } from "lucide-react";
import { navLinks, personalInfo, socialLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-navy-950/60 py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          {/* Brand + tagline */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-slate-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-rn-300/30 bg-rn-300/10 text-rn-200">
                {"<"}
                <span className="text-gradient font-bold">O</span>
                {"/>"}
              </span>
              {personalInfo.firstName}
              <span className="text-rn-300">.</span>dev
            </a>
            <p className="mt-3 max-w-sm text-sm text-slate-500">
              Senior React Native &amp; Frontend Developer — crafting fast,
              reliable, delightful experiences.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-400 md:justify-end">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-rn-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/playground"
                  className="transition-colors hover:text-rn-200"
                >
                  Playground
                </a>
              </li>
            </ul>

            {/* Socials */}
            <ul className="mt-5 flex items-center justify-center gap-3 md:justify-end">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-rn-300/50 hover:text-rn-200"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with{" "}
            <Heart className="h-3.5 w-3.5 text-rn-300" aria-hidden />
            using Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
