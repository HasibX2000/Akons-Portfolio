"use client";
import { useEnrollment } from "../context/EnrollmentContext";
import Image from "next/image";
import { paymentMethods } from "../data/paymentMethods";

interface PaymentStepProps {
  course: {
    title: string;
    price: number;
  };
}

export default function PaymentStep({ course }: PaymentStepProps) {
  const { enrollmentData, updateEnrollmentData, setCurrentStep } = useEnrollment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const selectedPayment = paymentMethods[enrollmentData.paymentMethod];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Method Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Select Payment Method</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="relative flex items-center justify-center p-4 border border-light-border dark:border-dark-border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="bkash"
              checked={enrollmentData.paymentMethod === "bkash"}
              onChange={(e) =>
                updateEnrollmentData({ paymentMethod: e.target.value as "bkash" | "nagad" })
              }
              className="sr-only"
            />
            <div className="text-center">
              <Image
                src="/images/payment/bkash.png"
                alt="bKash"
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <span className="text-sm font-medium">bKash</span>
            </div>
            <div
              className={`absolute inset-0 border-2 rounded-lg transition-colors ${
                enrollmentData.paymentMethod === "bkash" ? "border-blue-500" : "border-transparent"
              }`}
            />
          </label>

          <label className="relative flex items-center justify-center p-4 border border-light-border dark:border-dark-border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="nagad"
              checked={enrollmentData.paymentMethod === "nagad"}
              onChange={(e) =>
                updateEnrollmentData({ paymentMethod: e.target.value as "bkash" | "nagad" })
              }
              className="sr-only"
            />
            <div className="text-center">
              <Image
                src="/images/payment/nagad.png"
                alt="Nagad"
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <span className="text-sm font-medium">Nagad</span>
            </div>
            <div
              className={`absolute inset-0 border-2 rounded-lg transition-colors ${
                enrollmentData.paymentMethod === "nagad" ? "border-blue-500" : "border-transparent"
              }`}
            />
          </label>
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Payment Instructions</h3>
        <div className="bg-light-border/20 dark:bg-dark-border/20 rounded-lg p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium text-lg">Send money to:</p>
                <p className="text-2xl font-bold">{selectedPayment.number}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  Account Type
                </p>
                <p className="font-medium">{selectedPayment.type}</p>
              </div>
            </div>
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-700 dark:text-yellow-500">
                <span className="font-medium">Important:</span> Please make sure to include your
                name in the reference field when making the payment.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-medium">Follow these steps:</p>
            <ol className="space-y-3">
              {selectedPayment.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-text-light-secondary dark:text-text-dark-secondary">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="w-full py-3 border border-light-border dark:border-dark-border text-text-light-secondary dark:text-text-dark-secondary rounded-lg hover:bg-light-border/10 dark:hover:bg-dark-border/10 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Continue to Confirmation
        </button>
      </div>

      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary text-center">
        Need help? Contact our support team for assistance.
      </p>
    </form>
  );
}
