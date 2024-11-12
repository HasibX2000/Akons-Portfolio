"use client";
import { useEnrollment } from "../context/EnrollmentContext";
import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ConfirmationStepProps {
  course: {
    title: string;
    price: number;
  };
}

export default function ConfirmationStep({ course }: ConfirmationStepProps) {
  const { enrollmentData, updateEnrollmentData, setCurrentStep } = useEnrollment();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the enrollment data to your backend
    console.log("Final submission:", enrollmentData);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        {/* Success Message */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h3 className="text-lg font-medium text-green-700 dark:text-green-500">
              Enrollment Request Submitted!
            </h3>
          </div>
          <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
            Thank you for enrolling in our course. We&apos;ve received your enrollment request and
            payment information.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-light-border/20 dark:bg-dark-border/20 rounded-lg p-6">
          <h4 className="font-medium mb-4">What happens next?</h4>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                1
              </span>
              <div>
                <p className="font-medium">Payment Verification</p>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  We&apos;ll verify your payment within 24 hours
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                2
              </span>
              <div>
                <p className="font-medium">Access Credentials</p>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  You&apos;ll receive an email with your course access details
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                3
              </span>
              <div>
                <p className="font-medium">Start Learning</p>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  Begin your learning journey as soon as you receive access
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Important Information */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium mb-2">Important Information</h4>
              <ul className="text-sm text-text-light-secondary dark:text-text-dark-secondary space-y-2">
                <li>• Save your Transaction ID: {enrollmentData.transactionId}</li>
                <li>• Check your email (including spam folder) for updates</li>
                <li>• Contact support if you don&apos;t hear from us within 24 hours</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-2">
          <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
            Need help? Contact our support team
          </p>
          <p className="font-medium">support@yourwebsite.com</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Payment Confirmation</h3>

        <div>
          <label className="block text-sm font-medium mb-2">
            Transaction ID
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            required
            value={enrollmentData.transactionId}
            onChange={(e) => updateEnrollmentData({ transactionId: e.target.value })}
            placeholder="Enter your payment transaction ID"
            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-transparent"
          />
          <p className="mt-2 text-sm text-text-light-secondary dark:text-text-dark-secondary">
            Please enter the transaction ID from your payment confirmation SMS
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="w-full py-3 border border-light-border dark:border-dark-border text-text-light-secondary dark:text-text-dark-secondary rounded-lg hover:bg-light-border/10 dark:hover:bg-dark-border/10 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Enrollment
        </button>
      </div>

      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary text-center">
        By submitting, you confirm that you&apos;ve completed the payment
      </p>
    </form>
  );
}
