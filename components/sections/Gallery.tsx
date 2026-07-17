"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/lib/content";

export default function Gallery() {
  const { gallery } = siteContent;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? gallery.items
      : gallery.items.filter((item) => item.category === activeCategory);

  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {gallery.heading}
        </h2>
        <p className="mt-4 text-muted-foreground">{gallery.subheading}</p>
      </div>

      <div className="mt-10 flex justify-center gap-3 flex-wrap">
        {gallery.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "bg-accent text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}