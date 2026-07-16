"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, Repeat, LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";
import { siteContent } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Sparkles,
  Repeat,
};

export default function Features() {
  const { features } = siteContent;

  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {features.heading}
        </h2>
        <p className="mt-4 text-muted-foreground">{features.subheading}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}