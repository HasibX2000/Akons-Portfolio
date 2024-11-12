"use client";
import { useEnrollment } from "../context/EnrollmentContext";

const steps = [
  { id: 1, name: "Details" },
  { id: 2, name: "Payment" },
  { id: 3, name: "Confirmation" },
];

export default function StepsIndicator() {
  const { currentStep } = useEnrollment();

  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`flex items-center ${
              step.id === currentStep
                ? "text-blue-500"
                : step.id < currentStep
                ? "text-green-500"
                : "text-text-light-secondary dark:text-text-dark-secondary"
            }`}
          >
            <span
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold ${
                step.id === currentStep
                  ? "border-blue-500"
                  : step.id < currentStep
                  ? "border-green-500"
                  : "border-current"
              }`}
            >
              {step.id < currentStep ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                step.id
              )}
            </span>
            <span className="ml-2">{step.name}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-1 mx-4 ${
                step.id < currentStep ? "bg-green-500" : "bg-light-border dark:bg-dark-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
