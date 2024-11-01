"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { smoothScroll } from "../utils/smoothScroll";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      setIsDarkMode(prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-4 top-5"
    >
      <nav className="max-w-6xl mx-auto rounded-2xl bg-light/50 dark:bg-dark/50 backdrop-blur-md border border-light-border dark:border-dark-border">
        <div className="h-14 px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Akon M Hasib
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href.replace("/#", ""))}
                className="text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary transition-colors duration-75"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-text-dark-primary" />
              ) : (
                <Sun className="w-4 h-4 text-text-light-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-text-dark-primary" />
              ) : (
                <Sun className="w-4 h-4 text-text-light-primary" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-text-light-primary dark:text-text-dark-primary" />
              ) : (
                <Menu className="w-4 h-4 text-text-light-primary dark:text-text-dark-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-6 py-4 space-y-4 border-t border-light-border dark:border-dark-border">
                {navLinks.map((link) => (
                  <motion.div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
