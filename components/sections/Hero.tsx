"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-full border border-border bg-muted px-4 py-1 text-sm text-muted-foreground"
      >
        For Growing Businesses
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl"
      >
        We build websites that feel premium.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg text-muted-foreground"
      >
        This is our reusable framework — the foundation every client site
        will be built from.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex items-center gap-4"
      >
        <Button variant="primary">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </motion.div>
    </section>
  );
}