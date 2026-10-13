"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile",
    description:
      "React Native apps for iOS and Android, focused on performance, UX polish, and maintainable architecture.",
  },
  {
    icon: Code2,
    title: "Full-Stack JavaScript",
    description:
      "Production-ready Node.js + MongoDB backends integrated with React and Next.js dashboards.",
  },
  {
    icon: Zap,
    title: "Performance & UX",
    description:
      "Profiling, crash-free releases, CI/CD pipelines, and thoughtful UI/UX refinements that move the needle.",
  },
  {
    icon: Briefcase,
    title: "Team Leadership",
    description:
      "Leading frontend teams, code reviews, mentorship, and cross-functional collaboration to ship on time.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="A quick intro"
          description="A peek at who I am, what I do, and how I think about building software."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            <div className="mb-2 flex items-center gap-4 sm:hidden">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-2xl border border-white/10 object-cover object-top"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {personalInfo.name}
                </p>
                <p className="text-xs text-slate-500">{personalInfo.location}</p>
              </div>
            </div>
            <p>{personalInfo.summary}</p>
            <p>
              I care about{" "}
              <span className="text-rn-200">
                clean architecture, reusable components, and fast feedback
                loops
              </span>
              . From Dastgyr and Expert Ads to Salaam Takaful and EFU’s digital
              insurance platforms, I’ve helped teams ship software that is a
              joy to use and a pleasure to maintain.
            </p>
            <p>
              Outside of work, I enjoy sharpening my craft through courses,
              mentoring, and exploring the latest in the React Native and
              TypeScript ecosystems.
            </p>

            {/* Stats strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="glass-card px-4 py-5 text-center"
                >
                  <div className="text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: feature grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="glass-card group relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-rn-300/30"
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-rn-400/10 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-rn-300/30 bg-rn-300/10 text-rn-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
