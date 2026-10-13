"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Smartphone, Sparkles } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          description="A selection of freelance and product work spanning mobile apps, marketplaces, and real-time systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isRn = project.accent === "rn";
            const hasStoreLinks = Boolean(project.links?.length);
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.04 * i }}
                className="glass-card group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-rn-300/40 hover:shadow-glow"
              >
                {/* Full-card link only when there are no explicit store buttons */}
                {project.url && !hasStoreLinks ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label={`Open ${project.title}`}
                  />
                ) : null}

                {project.image ? (
                  <div className="relative h-52 overflow-hidden border-b border-white/5 bg-navy-900 sm:h-56">
                    <Image
                      src={project.image}
                      alt={`${project.title} app screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-wider text-slate-300">
                      {project.category}
                    </span>
                  </div>
                ) : null}

                <div className="relative flex flex-1 flex-col p-6">
                  {/* Accent blob */}
                  <div
                    aria-hidden
                    className={cn(
                      "absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                      isRn ? "bg-rn-400/20" : "bg-accent/20",
                      "opacity-40"
                    )}
                  />

                  {/* Top row */}
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl border",
                        isRn
                          ? "border-rn-300/30 bg-rn-300/10 text-rn-200"
                          : "border-accent/30 bg-accent/10 text-accent"
                      )}
                    >
                      <Smartphone className="h-5 w-5" />
                    </div>
                    {!project.image ? (
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                        {project.category}
                      </span>
                    ) : null}
                  </div>

                  {project.client ? (
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      {project.client}
                    </p>
                  ) : null}

                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-rn-200">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Highlight */}
                  <div
                    className={cn(
                      "mt-4 inline-flex items-center gap-1.5 self-start rounded-full border px-3 py-1 text-xs font-medium",
                      isRn
                        ? "border-rn-300/30 bg-rn-300/5 text-rn-200"
                        : "border-accent/30 bg-accent/5 text-accent"
                    )}
                  >
                    <Sparkles className="h-3 w-3" />
                    {project.highlight}
                  </div>

                  {/* Platforms */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.platforms.map((p) => (
                      <span
                        key={p}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Store / external links */}
                  {hasStoreLinks ? (
                    <div className="relative z-30 mt-4 flex flex-wrap gap-2">
                      {project.links!.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                            isRn
                              ? "border-rn-300/30 bg-rn-300/10 text-rn-200 hover:bg-rn-300/20"
                              : "border-accent/30 bg-accent/10 text-accent hover:bg-accent/20"
                          )}
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                {/* Hover arrow — decorative */}
                <div className="pointer-events-none absolute right-5 top-5 z-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight
                    className={cn(
                      "h-5 w-5 drop-shadow-lg",
                      isRn ? "text-rn-200" : "text-accent"
                    )}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          And many more across Dastgyr and beyond —
          <a
            href="#contact"
            className="ml-1 text-rn-200 underline underline-offset-4 hover:text-white"
          >
            get in touch
          </a>{" "}
          for the full case studies.
        </motion.p>
      </div>
    </section>
  );
}
