"use client";
import { use } from "react";
import { courses } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, Users, Clock, BookOpen, CheckCircle2 } from "lucide-react";

type PageProps = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CoursePage({ params }: PageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const formattedPrice = `${course.price.toLocaleString()} BDT`;

  const handleEnrollClick = () => {
    // WhatsApp message template
    const message = encodeURIComponent(
      `Hi, I'm interested in enrolling in the "${course.title}" course.`
    );
    const whatsappUrl = `https://wa.me/+8801754752096?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // Modify the Price Card section
  const renderEnrollButton = () => {
    return (
      <button
        onClick={handleEnrollClick}
        className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.5997 2.39516 15.1116 3.10235 16.4525L2.00098 22L7.63246 20.9155C8.93809 21.5633 10.4244 21.9288 12.001 21.9288C17.5239 21.9288 22.001 17.4517 22.001 11.9288C22.001 6.40594 17.5239 2 12.001 2ZM8.21418 7.62803C8.39618 7.62803 8.58668 7.63153 8.76068 7.63903C8.95218 7.64403 9.16668 7.51853 9.38718 7.86903C9.61068 8.22303 9.96218 8.92853 10.0127 9.02303C10.0632 9.11753 10.0967 9.22503 10.0297 9.34553C9.96268 9.46603 9.94618 9.53853 9.85168 9.66253C9.75718 9.78653 9.65018 9.93403 9.56518 10.019C9.47068 10.114 9.37268 10.214 9.48618 10.394C9.59968 10.574 9.96218 11.172 10.4962 11.654C11.1827 12.274 11.7702 12.474 11.9502 12.569C12.1302 12.664 12.2377 12.647 12.3647 12.504C12.4917 12.361 12.8362 11.959 12.9797 11.779C13.1232 11.599 13.2667 11.632 13.4597 11.697C13.6527 11.762 14.3562 12.107 14.5657 12.202C14.7752 12.297 14.9142 12.344 14.9647 12.419C15.0152 12.494 15.0152 12.844 14.8382 13.249C14.6612 13.654 13.7557 14.034 13.3607 14.064C12.9657 14.094 12.5982 14.239 11.0077 13.679C9.11318 12.999 7.87918 11.034 7.78468 10.904C7.69018 10.774 6.91218 9.71903 6.91218 8.62903C6.91218 7.53903 7.48768 7.00253 7.70468 6.77053C7.92168 6.53853 8.17668 6.47803 8.32418 6.47803C8.47168 6.47803 8.61918 6.47803 8.74318 6.48303C8.86718 6.48803 9.02868 6.47753 9.16668 6.72403C9.31218 6.98403 9.66918 7.62803 9.71968 7.72953L8.21418 7.62803Z" />
        </svg>
        Contact on WhatsApp
      </button>
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-500/5">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-blue-500 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Course Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-3">
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

              <h1 className="text-4xl font-bold">{course.title}</h1>
              <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>{course.totalLessons} Lessons</span>
                </div>
                {course.stats.enrolled !== "N/A" && (
                  <>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>{course.stats.enrolled}+ Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{course.stats.rating} Rating</span>
                    </div>
                  </>
                )}
              </div>

              {/* Instructor Quick Info */}
              <div className="flex items-center gap-4 pt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    {course.instructor.role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Course Image and Price Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Price Card */}
              <div className="absolute -bottom-8 left-4 right-4 bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{formattedPrice}</span>
                  {renderEnrollButton()}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border"
            >
              <h2 className="text-2xl font-bold mb-6">What You will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Curriculum */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border"
            >
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div
                    key={index}
                    className="border border-light-border dark:border-dark-border rounded-lg overflow-hidden"
                  >
                    <div className="bg-light-border/20 dark:bg-dark-border/20 p-4">
                      <h3 className="font-medium">{module.title}</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span className="text-text-light-secondary dark:text-text-dark-secondary">
                              {lesson}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border"
            >
              <h2 className="text-2xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-3">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span className="text-text-light-secondary dark:text-text-dark-secondary">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="sticky top-32 space-y-8"
            >
              {/* Instructor */}
              <div className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border">
                <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={course.instructor.image}
                        alt={course.instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{course.instructor.name}</h3>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary">
                        {course.instructor.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    {course.instructor.bio}
                  </p>
                  <div className="pt-4 border-t border-light-border dark:border-dark-border">
                    <p className="font-medium">Experience</p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                      {course.instructor.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Student Feedback if available */}
              {course.feedback && (
                <div className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border">
                  <h2 className="text-2xl font-bold mb-6">Student Feedback</h2>
                  <div className="space-y-4">
                    {course.feedback.map((feedback) => (
                      <div
                        key={feedback.id}
                        className="pb-4 border-b border-light-border dark:border-dark-border last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium">{feedback.name}</p>
                            <div className="flex items-center gap-1">
                              {[...Array(feedback.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            {feedback.date}
                          </span>
                        </div>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary">
                          {feedback.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
