"use client";
import { courses } from "./data";
import CourseCard from "../../components/CourseCard";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <main className="min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Explore our comprehensive collection of courses designed to help you master email design
            and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
