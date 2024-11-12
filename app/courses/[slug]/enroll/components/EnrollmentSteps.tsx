"use client";
import { useEnrollment } from "../context/EnrollmentContext";
import PersonalDetailsStep from "./PersonalDetailsStep";
import PaymentStep from "./PaymentStep";
import StepsIndicator from "./StepsIndicator";
import ConfirmationStep from "./ConfirmationStep";

interface Course {
  title: string;
  price: number;
  slug: string;
}

interface EnrollmentStepsProps {
  course: Course;
}

export default function EnrollmentSteps({ course }: EnrollmentStepsProps) {
  const { currentStep } = useEnrollment();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsStep />;
      case 2:
        return <PaymentStep course={course} />;
      case 3:
        return <ConfirmationStep course={course} />;
      default:
        return <PersonalDetailsStep />;
    }
  };

  return (
    <div>
      <StepsIndicator />
      <div className="mt-8">{renderStep()}</div>
    </div>
  );
}
