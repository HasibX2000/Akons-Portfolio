"use client";
import { useEnrollment } from "../context/EnrollmentContext";

export default function PersonalDetailsStep() {
  const { enrollmentData, updateEnrollmentData, setCurrentStep } = useEnrollment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Personal Information</h3>

        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            required
            value={enrollmentData.name}
            onChange={(e) => updateEnrollmentData({ name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            required
            value={enrollmentData.email}
            onChange={(e) => updateEnrollmentData({ email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            required
            value={enrollmentData.phone}
            onChange={(e) => updateEnrollmentData({ phone: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );
}
