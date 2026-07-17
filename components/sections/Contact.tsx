"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { siteContent } from "@/lib/content";

export default function Contact() {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {contact.heading}
        </h2>
        <p className="mt-4 text-muted-foreground">{contact.subheading}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          <Card className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-sm">{contact.email}</span>
          </Card>
          <Card className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-accent" />
            <span className="text-sm">{contact.phone}</span>
          </Card>
          <Card className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm">{contact.address}</span>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3"
        >
          <Card>
            {submitted ? (
              <p className="text-center py-8 text-muted-foreground">
                Thanks — we&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent transition"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent transition"
                />
                <textarea
                  placeholder="Tell us about your project"
                  required
                  rows={4}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent transition resize-none"
                />
                <Button variant="primary">Send Message</Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}