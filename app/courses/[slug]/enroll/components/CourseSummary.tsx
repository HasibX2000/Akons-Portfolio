"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Course {
  title: string;
  description: string;
  image: string;
  level: string;
  type: "Live" | "Recorded";
  slug: string;
}

interface CourseSummaryProps {
  course: Course;
}

export default function CourseSummary({ course }: CourseSummaryProps) {
  return (
    <>
      <Link
        href={`/courses/${course.slug}`}
        className="inline-flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Course
      </Link>

      <div className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border mb-8">
        <div className="flex items-start gap-6">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image src={course.image} alt={course.title} fill className="object-cover rounded-lg" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
            <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
              {course.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                {course.level}
              </span>
              <span
                className={`px-3 py-1 text-white text-sm rounded-full ${
                  course.type === "Live" ? "bg-green-500" : "bg-purple-500"
                }`}
              >
                {course.type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
