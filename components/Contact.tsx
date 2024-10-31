"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  MessageSquare,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    const form = e.target as HTMLFormElement;
    const now = new Date();
    const templateParams = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      year: now.getFullYear(),
    };

    try {
      await emailjs.send(
        "service_ngma04k",
        "template_83vxngu",
        templateParams,
        "djcAvyf11MkQ4Z2Lq"
      );

      // Clear the form
      form.reset();

      // Show success message
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);
    } catch (_err) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      name: "Email",
      value: "akonmhasib@gmail.com",
      url: "mailto:akonmhasib@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "Phone",
      value: "+880 1754752096",
      url: "tel:+8801754752096",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      name: "Skype",
      value: "akonmhasib",
      url: "skype:akonmhasib?chat",
      icon: <MessageSquare className="w-5 h-5" />,
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://web.facebook.com/AkonsZone",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/HasibX2000/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hasibx2000/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/HasibX2000",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/hasibx2000",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@AkonMHasib_Official",
      icon: <Youtube className="w-5 h-5" />,
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-text-light-secondary dark:text-text-dark-secondary">
              I&apos;m currently available for freelance work and full-time positions.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((contact) => (
              <a
                key={contact.name}
                href={contact.url}
                className="flex items-center gap-3 text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {contact.icon}
                <span>{contact.value}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-medium mb-3">Find me on</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-light-paper dark:bg-dark-paper border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-light-paper dark:bg-dark-paper border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-light-paper dark:bg-dark-paper border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <AnimatePresence mode="wait">
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                    : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  {status.type === "success" ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  {status.message}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              inline-flex items-center gap-2 px-6 py-3 
              bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
              transition-colors relative overflow-hidden
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </motion.div>
              ) : (
                <motion.div
                  key="send"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
