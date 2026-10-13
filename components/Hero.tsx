"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/lib/data";
import TypingEffect from "./TypingEffect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.05 * i },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-rn-400/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Left: text */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for new opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-mono text-sm text-rn-300"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">{personalInfo.name}</span>
            <span className="text-rn-300">.</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-4 min-h-[2.5em] text-2xl font-semibold text-slate-200 sm:text-3xl md:text-4xl"
          >
            I build{" "}
            <TypingEffect
              phrases={personalInfo.typingRoles}
              className="text-gradient"
            />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Senior React Native & Frontend Developer with{" "}
            <span className="text-slate-200">5+ years</span> of experience
            shipping production-grade apps for Android, iOS, and the web. I
            currently lead frontend engineering as{" "}
            <span className="text-slate-200">Manager IT (HO)</span> at EFU
            General Insurance.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-6 flex items-center gap-2 text-sm text-slate-400"
          >
            <MapPin className="h-4 w-4 text-rn-300" />
            {personalInfo.location}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-ghost">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
            className="mt-8 flex items-center gap-3"
          >
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-rn-300/50 hover:text-rn-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* Right: profile portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-rn-400/40 via-rn-300/10 to-accent/40 opacity-60 blur-2xl" />
          <div className="relative animate-float overflow-hidden rounded-[2rem] border border-white/10 bg-navy-800/60 shadow-2xl shadow-rn-400/10">
            <Image
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              width={480}
              height={600}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent px-5 pb-5 pt-16">
              <p className="font-mono text-xs text-rn-300">
                {personalInfo.title.split("|")[0].trim()}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {personalInfo.name}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 hover:text-rn-200 md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-600 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-rn-300"
          />
        </span>
      </motion.a>
    </section>
  );
}
