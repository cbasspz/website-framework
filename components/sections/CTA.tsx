"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export default function CTA() {
  const { cta } = siteContent;

  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto rounded-3xl bg-accent px-8 py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          {cta.heading}
        </h2>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          {cta.subheading}
        </p>
        <div className="mt-8 flex justify-center">
          <button className="rounded-full bg-white text-accent px-6 py-3 font-medium hover:opacity-90 transition">
            {cta.buttonText}
          </button>
        </div>
      </motion.div>
    </section>
  );
}