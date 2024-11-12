"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  type: "Live" | "Recorded";
  slug: string;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const formattedPrice = `${course.price.toLocaleString()} BDT`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-light-paper dark:bg-dark-paper rounded-xl overflow-hidden border border-light-border dark:border-dark-border group hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Course Image with Level & Type Badge */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
            {course.level}
          </span>
          <span
            className={`px-3 py-1 text-white text-sm rounded-full ${
              course.type === "Live" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {course.type}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{course.title}</h3>

        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Price and View Details */}
        <div className="flex items-center justify-between pt-4 border-t border-light-border/30 dark:border-dark-border/30">
          <span className="text-2xl font-bold">{formattedPrice}</span>
          <Link
            href={`/courses/${course.slug}`}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
