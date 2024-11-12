"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  paymentMethod: "bkash" | "nagad";
  transactionId: string;
}

interface EnrollmentContextType {
  currentStep: number;
  enrollmentData: EnrollmentData;
  setCurrentStep: (step: number) => void;
  updateEnrollmentData: (data: Partial<EnrollmentData>) => void;
  resetEnrollment: () => void;
}

const initialEnrollmentData: EnrollmentData = {
  name: "",
  email: "",
  phone: "",
  paymentMethod: "bkash",
  transactionId: "",
};

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData>(initialEnrollmentData);

  const updateEnrollmentData = (data: Partial<EnrollmentData>) => {
    setEnrollmentData((prev) => ({ ...prev, ...data }));
  };

  const resetEnrollment = () => {
    setCurrentStep(1);
    setEnrollmentData(initialEnrollmentData);
  };

  return (
    <EnrollmentContext.Provider
      value={{
        currentStep,
        enrollmentData,
        setCurrentStep,
        updateEnrollmentData,
        resetEnrollment,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export const useEnrollment = () => {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within an EnrollmentProvider");
  }
  return context;
};
