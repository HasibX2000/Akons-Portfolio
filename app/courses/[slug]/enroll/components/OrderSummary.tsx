"use client";

interface Course {
  title: string;
  price: number;
}

interface OrderSummaryProps {
  course: Course;
}

export default function OrderSummary({ course }: OrderSummaryProps) {
  const formattedPrice = `${course.price.toLocaleString()} BDT`;

  return (
    <div className="bg-light-paper dark:bg-dark-paper rounded-xl p-6 border border-light-border dark:border-dark-border sticky top-32">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-text-light-secondary dark:text-text-dark-secondary">
            Course Fee
          </span>
          <span>{formattedPrice}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-light-border dark:border-dark-border">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>{formattedPrice}</span>
        </div>
      </div>

      <div className="mt-6 text-sm text-text-light-secondary dark:text-text-dark-secondary">
        <p className="mb-2">
          <span className="font-medium text-text-light dark:text-text-dark">Secure Payment:</span>{" "}
          Your payment information is processed securely.
        </p>
        <p>
          <span className="font-medium text-text-light dark:text-text-dark">Need Help?</span>{" "}
          Contact our support team for assistance.
        </p>
      </div>
    </div>
  );
}
