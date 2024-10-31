"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-8 px-4 md:px-8 border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-sm text-text-light-secondary dark:text-text-dark-secondary">
          <p>© {new Date().getFullYear()} Akon M Hasib. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ in Bangladesh</p>
        </div>
      </div>
    </motion.footer>
  );
}
