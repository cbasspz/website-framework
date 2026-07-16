"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { siteContent } from "@/lib/content";

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {testimonials.heading}
        </h2>
        <p className="mt-4 text-muted-foreground">
          {testimonials.subheading}
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between">
              <p className="text-sm text-foreground/90 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}