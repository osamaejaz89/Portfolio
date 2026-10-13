"use client";

import { motion } from "framer-motion";
import { skillGroups, softSkills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Stack"
          description="The languages, frameworks, and tools I reach for every day — plus the soft skills that make it all click."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * groupIdx }}
              className="glass-card p-6"
            >
              <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white">
                <span className="font-mono text-rn-300">{`0${groupIdx + 1}.`}</span>
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.items.map((skill, i) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="font-mono text-xs text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.05 * i,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-rn-400 to-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <h3 className="mb-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {softSkills.map((skill) => (
              <span key={skill} className="chip text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
