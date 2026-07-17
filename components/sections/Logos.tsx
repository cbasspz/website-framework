"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export default function Logos() {
  const { logos } = siteContent;

  return (
    <section className="px-6 py-16 border-y border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">
          {logos.heading}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {logos.items.map((logo) => (
            <span
              key={logo.name}
              className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition"
            >
              {logo.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}