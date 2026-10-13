"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Kind Words"
          title="Testimonials"
          description="A few snippets from teammates and clients I’ve had the pleasure of working with."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass-card relative p-6"
            >
              <Quote
                aria-hidden
                className="absolute right-5 top-5 h-10 w-10 text-rn-300/15"
              />
              <blockquote className="text-sm leading-relaxed text-slate-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/5 pt-4">
                <div className="font-semibold text-white">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
