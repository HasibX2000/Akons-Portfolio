"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "/images/skills/html5-plain.svg" },
        { name: "CSS3", icon: "/images/skills/css3-original.svg" },
        { name: "JavaScript", icon: "/images/skills/javascript-original.svg" },
        { name: "React", icon: "/images/skills/react-original.svg" },
        { name: "Next.js", icon: "/images/skills/nextjs-original.svg" },
        { name: "jQuery", icon: "/images/skills/jquery-original.svg" },
        { name: "Redux", icon: "/images/skills/redux-original.svg" },
        { name: "Sass", icon: "/images/skills/sass-original.svg" },
      ],
    },
    {
      title: "Frameworks & Styling",
      skills: [
        { name: "Bootstrap", icon: "/images/skills/bootstrap-original.svg" },
        { name: "Tailwind CSS", icon: "/images/skills/tailwindcss-original.svg" },
        { name: "WordPress", icon: "/images/skills/wordpress.svg" },
        { name: "WooCommerce", icon: "/images/skills/woocommerce-original.svg" },
      ],
    },
    {
      title: "Email Development",
      skills: [
        { name: "MailChimp", icon: "/images/skills/mailchimp.svg" },
        { name: "Campaign Monitor", icon: "/images/skills/campaignmonitor.svg" },
        { name: "Constant Contact", icon: "/images/skills/constantcontact.svg" },
        { name: "Email on Acid", icon: "/images/skills/emailonacid.svg" },
        { name: "Litmus", icon: "/images/skills/litmus.svg" },
        { name: "Klaviyo", icon: "/images/skills/klaviyo.svg" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Firebase", icon: "/images/skills/firebase-original.svg" },
        { name: "Supabase", icon: "/images/skills/supabase-original.svg" },
        { name: "C++", icon: "/images/skills/cplusplus-original.svg" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "VS Code", icon: "/images/skills/vscode-original.svg" },
        { name: "Git", icon: "/images/skills/git-original.svg" },
        { name: "GitHub", icon: "/images/skills/github.svg" },
        { name: "NPM", icon: "/images/skills/npm-original-wordmark.svg" },
        { name: "Yarn", icon: "/images/skills/yarn-original.svg" },
        { name: "Bun", icon: "/images/skills/bun-original.svg" },
        { name: "Vite", icon: "/images/skills/vitejs-original.svg" },
        { name: "Vercel", icon: "/images/skills/vercel-dark.svg" },
        { name: "Postman", icon: "/images/skills/postman-original.svg" },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", icon: "/images/skills/figma-original.svg" },
        { name: "Adobe XD", icon: "/images/skills/xd.svg" },
        { name: "Photoshop", icon: "/images/skills/photoshop.svg" },
        { name: "Illustrator", icon: "/images/skills/illustrator.svg" },
        { name: "Canva", icon: "/images/skills/canva-original.svg" },
      ],
    },
    {
      title: "Video Editing",
      skills: [
        { name: "Filmora", icon: "/images/skills/filmora.svg" },
        { name: "Premiere Pro", icon: "/images/skills/premiere-pro.svg" },
        { name: "CapCut", icon: "/images/skills/capcut.svg" },
      ],
    },
  ];

  const invertedIcons = ["vercel-original-wordmark", "github-original", "wordpress-plain"];

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend development, email design, and creative
            software.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="relative w-20 h-20 p-4 bg-light-border/60 dark:bg-dark-paper/90 backdrop-blur-sm border border-light-border/50 dark:border-dark-border/50 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-light-border/70 dark:group-hover:bg-dark-border/80 group-hover:border-light-border/80 dark:group-hover:border-dark-border/70 group-hover:shadow-lg dark:group-hover:shadow-dark-border/20">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className={`
                          object-contain p-3
                          ${
                            invertedIcons.some((icon) => skill.icon.includes(icon))
                              ? "dark:[filter:invert(1)_brightness(2)] dark:opacity-90"
                              : ""
                          }
                        `}
                      />
                    </div>
                    <span className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary text-center transition-colors duration-75">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
