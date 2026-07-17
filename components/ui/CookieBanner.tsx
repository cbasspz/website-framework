"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-50 rounded-2xl border border-border bg-muted p-5 shadow-lg"
        >
          <p className="text-sm text-foreground">
            We use cookies to improve your experience. By continuing, you
            agree to our use of cookies.
          </p>
          <div className="mt-4 flex gap-3">
            <Button variant="primary" onClick={accept}>
              Accept
            </Button>
            <Button variant="outline" onClick={decline}>
              Decline
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}