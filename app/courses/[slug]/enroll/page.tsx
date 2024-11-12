"use client";
import { use } from "react";
import { courses } from "../../data";
import { EnrollmentProvider } from "./context/EnrollmentContext";
import { notFound } from "next/navigation";
import CourseSummary from "./components/CourseSummary";
import EnrollmentSteps from "./components/EnrollmentSteps";
import OrderSummary from "./components/OrderSummary";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function EnrollPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <EnrollmentProvider>
      <main className="min-h-screen py-32 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <CourseSummary course={course} />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border">
                <EnrollmentSteps course={course} />
              </div>
            </div>

            <div className="md:col-span-1">
              <OrderSummary course={course} />
            </div>
          </div>
        </div>
      </main>
    </EnrollmentProvider>
  );
}
