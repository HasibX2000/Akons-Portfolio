"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SwiftMart - Multivendor Ecommerce",
    description:
      "A comprehensive multivendor ecommerce platform with role-based access control. Features admin, seller, and buyer dashboards with complete management systems for products, orders, and analytics.",
    technologies: ["React", "Tailwind CSS", "Supabase", "Redux Toolkit", "Role Management"],
    imageUrl: "/images/projects/swift_mart.webp",
    demoUrl: "https://swiftmart-akon.vercel.app/",
    githubUrl: "https://github.com/HasibX2000/SwiftMart",
  },
  {
    id: 2,
    title: "Email Design Course Platform",
    description:
      "A modern course selling platform focused on email design education. Features a clean interface, responsive design, and comprehensive learning modules for mastering email design.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    imageUrl: "/images/projects/html_email_course.webp",
    demoUrl: "https://emaildesigncourse.vercel.app/",
    githubUrl: "https://github.com/HasibX2000/next-emailcourse",
  },
  {
    id: 3,
    title: "Job Image Cropper",
    description:
      "A specialized tool for Bangladeshi job applicants to crop their photos to standard job application specifications. Simple and efficient user interface.",
    technologies: ["React", "Image Processing", "Responsive Design"],
    imageUrl: "/images/projects/job_image.webp",
    demoUrl: "https://job-image.site/",
    githubUrl: "https://github.com/HasibX2000/Job-Image",
  },
  {
    id: 4,
    title: "Tela Health Pro Landing Page",
    description:
      "A professional landing page for a HIPAA-compliant telemedicine platform. Features responsive design, smooth animations, and comprehensive service information with pricing plans.",
    technologies: ["HTML", "CSS", "jQuery", "Bootstrap", "Responsive Design"],
    imageUrl: "/images/projects/tell_home.webp",
    demoUrl: "https://hasibx2000.github.io/Tela-Health-Pro-Landing-Page/",
    githubUrl: "https://github.com/HasibX2000/Tela-Health-Pro-Landing-Page",
  },
  {
    id: 5,
    title: "Tela Health Pro Dashboard",
    description:
      "A comprehensive healthcare management dashboard featuring user statistics, revenue tracking, and patient-doctor management. Includes features like earnings overview, membership management, payment tracking, and user activity monitoring.",
    technologies: ["HTML", "CSS", "jQuery", "Bootstrap", "Dashboard UI"],
    imageUrl: "/images/projects/tela_dashboard.webp",
    demoUrl: "https://hasibx2000.github.io/Tela-Health-Pro-Dashboard/",
    githubUrl: "https://github.com/HasibX2000/Tela-Health-Pro-Dashboard",
  },
  {
    id: 6,
    title: "Weekly Summary Email Template",
    description:
      "A responsive HTML email template for Natalia Zaugg featuring a modern layout, data visualization, and performance metrics. Designed for cross-client compatibility with a focus on business analytics reporting.",
    technologies: ["Email Design", "HTML", "CSS", "Responsive Design", "Cross-platform"],
    imageUrl: "/images/projects/natalia_email.webp",
    demoUrl: "https://hasibx2000.github.io/Natalia-Zaugg-Weekly-Summary-Responsive-Email-Template/",
    githubUrl:
      "https://github.com/HasibX2000/Natalia-Zaugg-Weekly-Summary-Responsive-Email-Template",
  },
  {
    id: 7,
    title: "Personal Book Store",
    description:
      "A book store management application with features for tracking inventory, sales, and customer information. Includes a JSON server backend.",
    technologies: ["React", "Redux", "RTK Query", "Tailwind CSS"],
    imageUrl: "/images/projects/bookstore.webp",
    demoUrl: "https://akonsbookstore.vercel.app/",
    githubUrl: "https://github.com/HasibX2000/BookStore-With-RTK-Query",
  },
  {
    id: 8,
    title: "Expense Tracker",
    description:
      "A comprehensive expense tracking application with features for managing income, expenses, and generating reports.",
    technologies: ["React", "Redux", "Tailwind CSS", "JSON Server"],
    imageUrl: "/images/projects/expense_tracker.webp",
    demoUrl: "https://redux-expense.vercel.app/",
    githubUrl: "https://github.com/HasibX2000/Expense-Tracker-With-Redux",
  },
  {
    id: 9,
    title: "Todo Application",
    description:
      "A streamlined todo application utilizing React's useReducer for state management. Features a clean interface and efficient task organization.",
    technologies: ["React", "useReducer", "Tailwind CSS"],
    imageUrl: "/images/projects/todo_app.webp",
    demoUrl: "https://todoapp-hasibx2000.vercel.app/",
    githubUrl: "https://github.com/HasibX2000/Todo-App-With-useReducer",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
          A showcase of my projects, ranging from email templates to full-stack applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-light-paper dark:bg-dark-paper rounded-xl overflow-hidden group flex flex-col border border-light-border dark:border-dark-border"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 h-14 line-clamp-2">{project.title}</h3>

              <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4 h-24 line-clamp-4">
                {project.description}
              </p>

              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-light-border/60 dark:bg-dark-border/60 text-text-light-secondary dark:text-text-dark-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-auto pt-4 border-t border-light-border dark:border-dark-border">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/HasibX2000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <Github size={20} />
          <span>View More Projects</span>
        </a>
      </motion.div>
    </motion.section>
  );
}
