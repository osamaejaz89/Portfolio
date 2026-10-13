"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Academics"
          title="Education"
          description="Formal grounding in computer science, alongside a lifetime of shipping, breaking, and fixing software."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass-card relative overflow-hidden p-6 md:p-8"
            >
              <div
                aria-hidden
                className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-rn-400/10 blur-3xl"
              />

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-rn-300/30 bg-rn-300/10 text-rn-200">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {edu.institution}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-rn-300" />
                        {edu.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-rn-300" />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
