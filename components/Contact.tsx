"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Send } from "lucide-react";
import { contactCards, personalInfo } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Let’s Talk"
          title="Get in Touch"
          description="Have a role, project, or collaboration in mind? I’m always open to interesting conversations."
        />

        <div className="mx-auto max-w-5xl">
          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800/80 via-navy-900/60 to-navy-900/80 p-8 shadow-card backdrop-blur-sm md:p-12"
          >
            <div
              aria-hidden
              className="absolute -top-20 left-1/3 h-60 w-60 rounded-full bg-rn-400/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-rn-200">
                  Ready when you are
                </p>
                <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Building something cool?{" "}
                  <span className="text-gradient">Let’s build it together.</span>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  Whether you need a production-grade React Native app, a
                  high-performance Next.js dashboard, or senior engineering
                  leadership — I’d love to hear about it.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="btn-primary"
                  >
                    <Send className="h-4 w-4" />
                    Email Me
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="btn-ghost"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Contact cards */}
              <ul className="grid gap-3 sm:grid-cols-2">
                {contactCards.map((c, i) => {
                  const Icon = c.icon;
                  const external = c.href.startsWith("http");
                  return (
                    <motion.li
                      key={c.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                    >
                      <a
                        href={c.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="group flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-rn-300/40 hover:bg-white/[0.07]"
                      >
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-rn-300/30 bg-rn-300/10 text-rn-200">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                            {c.label}
                          </div>
                          <div className="truncate text-sm text-slate-200 group-hover:text-white">
                            {c.value}
                          </div>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:text-rn-200" />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
