"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  // Add a background blur once the user has scrolled past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is currently in view for active-link styling
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-navy-950/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-slate-100"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-rn-300/30 bg-rn-300/10 text-rn-200 transition-all group-hover:border-rn-300/60 group-hover:shadow-glow">
            {"<"}
            <span className="text-gradient font-bold">O</span>
            {"/>"}
          </span>
          <span className="hidden sm:inline">
            {personalInfo.firstName}
            <span className="text-rn-300">.</span>
            dev
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => {
            const isActive = activeHash === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  <span className="mr-1 font-mono text-xs text-rn-300/70">
                    0{i + 1}.
                  </span>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-rn-300/20 bg-rn-300/5"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={personalInfo.resumeUrl}
          download
          className="btn-primary hidden md:inline-flex"
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-rn-300/40 hover:text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="container pb-6">
              <ul className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-900/90 p-3 backdrop-blur-xl">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-rn-300/10 hover:text-white"
                    >
                      <span className="font-mono text-xs text-rn-300/70">
                        0{i + 1}.
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 px-1">
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
