"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Continuous Learning"
          title="Certifications"
          description="A sample of the courses I’ve completed to keep my craft sharp."
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.04 * i }}
              className="glass-card flex items-start gap-4 p-5 transition-all hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-snug text-white">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
