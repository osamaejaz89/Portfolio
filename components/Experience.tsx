"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="A journey through my last few years of building, shipping, and leading — from trainee to Manager IT (HO)."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-rn-300/60 via-white/10 to-accent/40 md:left-1/2"
          />

          <ul className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="relative pl-12 md:pl-0"
                >
                  {/* Timeline dot */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2"
                  >
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-rn-300/40" />
                    <span className="relative h-3 w-3 rounded-full bg-rn-300 shadow-glow" />
                  </span>

                  {/* Card container */}
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-12 ${
                      isLeft ? "" : "md:[&>*:first-child]:col-start-2"
                    }`}
                  >
                    <div
                      className={
                        isLeft ? "md:text-right md:pr-8" : "md:pl-8"
                      }
                    >
                      <div className="glass-card relative p-6 transition-all hover:-translate-y-1 hover:border-rn-300/30">
                        {exp.current && (
                          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                            Current
                          </span>
                        )}

                        <div className="mb-2 flex items-center gap-2 font-mono text-xs text-rn-200">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </div>

                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5 text-rn-300" />
                            {exp.company}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-rn-300" />
                            {exp.location}
                          </span>
                        </div>

                        <ul
                          className={`mt-4 space-y-2 text-sm leading-relaxed text-slate-300 ${
                            isLeft ? "md:text-left" : ""
                          }`}
                        >
                          {exp.highlights.map((h, idx) => (
                            <li key={idx} className="flex gap-2 text-left">
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.projects && exp.projects.length > 0 ? (
                          <div className="mt-4 text-left">
                            <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                              Key Projects
                            </div>
                            <p className="text-sm text-slate-400">
                              {exp.projects.join(" · ")}
                            </p>
                          </div>
                        ) : null}

                        <div
                          className={`mt-4 flex flex-wrap gap-2 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          {exp.stack.map((tech) => (
                            <span key={tech} className="chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
