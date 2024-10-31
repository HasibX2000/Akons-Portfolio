"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      label: "Email Projects",
      value: "500+",
      description: "Completed Projects",
    },
    {
      label: "Experience",
      value: "5+",
      description: "Years in Email Design",
    },
    {
      label: "Expertise",
      value: "100%",
      description: "Client Satisfaction",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl">
            <Image
              src="/images/akon.jpg"
              alt="Akon M Hasib"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-text-light-secondary dark:text-text-dark-secondary transition-colors duration-75">
              Hi! I&apos;m Akon M Hasib, a seasoned Email Designer with over 5 years of expertise in
              crafting pixel-perfect email templates. My journey in digital design has led me to
              master various email platforms including Mailchimp and Constant Contact.
            </p>
            <p className="text-text-light-secondary dark:text-text-dark-secondary transition-colors duration-75">
              Currently expanding into Frontend Development, I bring my keen eye for design and
              problem-solving skills to create engaging web experiences. My background in email
              design provides a unique perspective on responsive design and cross-platform
              compatibility.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-light-paper dark:bg-dark-paper border border-light-border dark:border-dark-border"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-text-light-muted dark:text-text-dark-muted mt-1">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
