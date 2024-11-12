"use client";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { smoothScroll } from "../utils/smoothScroll";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Add this interface at the top of the file
interface NavLink {
  href?: string;
  label: string;
  children?: {
    href: string;
    label: string;
  }[];
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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

  const navLinks: NavLink[] = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    {
      label: "Products",
      children: [
        { href: "/themes", label: "WordPress Themes" },
        { href: "/plugins", label: "WordPress Plugins" },
        { href: "/saas", label: "SaaS Products" },
      ],
    },
    { href: "/courses", label: "Courses" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-5 px-4 xl:px-0">
      <nav className="max-w-6xl mx-auto bg-light/50 dark:bg-dark/50 border border-light-border dark:border-dark-border rounded-xl backdrop-blur-md">
        <div className="h-14 px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Akon M Hasib
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="flex items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isProductsOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{
                            duration: 0.2,
                            ease: "easeOut",
                          }}
                          className="absolute left-0 top-[calc(100%+0.5rem)] w-48 py-2 bg-light dark:bg-dark border border-light-border dark:border-dark-border rounded-lg shadow-lg"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href || "#"}
                  onClick={(e) => {
                    if (link.href?.startsWith("/#")) {
                      e.preventDefault();
                      smoothScroll(e, link.href.replace("/#", ""));
                    }
                  }}
                  className="text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className="p-2" aria-label="Toggle dark mode">
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-text-dark-primary" />
              ) : (
                <Sun className="w-4 h-4 text-text-light-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2" aria-label="Toggle dark mode">
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-text-dark-primary" />
              ) : (
                <Sun className="w-4 h-4 text-text-light-primary" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-light-border dark:border-dark-border md:hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-6 py-4 space-y-4"
              >
                {navLinks.map((link) => {
                  if ("children" in link && link.children) {
                    return (
                      <div key={link.label} className="space-y-2">
                        <div className="font-medium text-text-light-secondary dark:text-text-dark-secondary">
                          {link.label}
                        </div>
                        <div className="pl-4 space-y-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href || "#"}
                      onClick={(e) => {
                        if (link.href?.startsWith("/#")) {
                          e.preventDefault();
                          smoothScroll(e, link.href.replace("/#", ""));
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
