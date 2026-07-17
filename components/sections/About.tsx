"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {about.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">{about.subheading}</p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {about.body}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-6"
        >
          {about.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}