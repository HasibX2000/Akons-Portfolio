"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BDPaymentPage() {
  const isFree = true;

  const features = {
    free: [
      "Support for major Bangladesh payment methods",
      "Automatic charge calculation",
      "Transaction ID verification",
      "Custom payment instructions",
      "Mobile-responsive payment forms",
      "Support for WooCommerce HPOS",
      "Multi-currency support",
      "Detailed payment information display",
      "Admin payment verification interface",
      "Order status management",
    ],
    pro: [
      "Automatic payment verification",
      "SMS notifications",
      "Payment analytics",
      "Bulk payment processing",
      "Advanced reporting",
      "Priority support",
    ],
  };

  const requirements = [
    "WordPress 5.0 or higher",
    "WooCommerce 4.0 or higher",
    "PHP 7.2 or higher",
  ];

  const paymentMethods = [
    {
      name: "bKash",
      icon: "/images/bdpayment/Bkash_Logo.png",
    },
    {
      name: "Rocket",
      icon: "/images/bdpayment/Rocket_Logo.png",
    },
    {
      name: "Nagad",
      icon: "/images/bdpayment/Nagad_Logo.png",
    },
    {
      name: "Upay",
      icon: "/images/bdpayment/Upay_Logo.png",
    },
    {
      name: "Bank Transfer",
      icon: "/images/bdpayment/Bank_Logo.png",
    },
  ];

  return (
    <main className="min-h-screen pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-4"
          >
            Version 1.0.0
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-6"
          >
            BDPayment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-light-secondary/70 dark:text-text-dark-secondary/70 max-w-2xl mx-auto"
          >
            A comprehensive payment gateway solution for Bangladesh, supporting multiple payment
            methods in WooCommerce.
          </motion.p>
        </div>

        {/* Description Box - Full Width within Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full bg-light-paper dark:bg-dark-paper rounded-xl border border-light-border dark:border-dark-border mb-16"
        >
          <div className="p-8 md:p-12">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-6">About BDPayment</h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-light-border/20 dark:bg-dark-border/20 rounded-xl">
                  <div className="text-3xl font-bold text-blue-500 mb-2">5+</div>
                  <div className="text-sm text-text-light-secondary/70 dark:text-text-dark-secondary/70">
                    Payment Methods
                  </div>
                </div>
                <div className="text-center p-6 bg-light-border/20 dark:bg-dark-border/20 rounded-xl">
                  <div className="text-3xl font-bold text-blue-500 mb-2">WP 5.0+</div>
                  <div className="text-sm text-text-light-secondary/70 dark:text-text-dark-secondary/70">
                    Compatible
                  </div>
                </div>
                <div className="text-center p-6 bg-light-border/20 dark:bg-dark-border/20 rounded-xl">
                  <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
                  <div className="text-sm text-text-light-secondary/70 dark:text-text-dark-secondary/70">
                    Support
                  </div>
                </div>
              </div>
              <p className="text-text-light-secondary/70 dark:text-text-dark-secondary/70 leading-relaxed">
                BDPayment adds popular Bangladesh payment methods to your WooCommerce store. This
                plugin simplifies the payment process by integrating major local payment gateways,
                making it easier for your customers to pay using their preferred method. With
                features like automatic charge calculation and transaction verification, you can
                manage payments efficiently while providing a seamless checkout experience.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Preview Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-light-border dark:border-dark-border shadow-lg">
              <Image
                src="/images/bdpayment/BDPayment.png"
                alt="BD Payment Gateway Preview"
                fill
                className="object-cover"
              />
            </div>

            {/* Payment Methods */}
            <div className="bg-light-paper dark:bg-dark-paper p-8 rounded-xl border border-light-border dark:border-dark-border">
              <h2 className="text-2xl font-semibold mb-6">Supported Payment Methods</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 bg-light-border/20 dark:bg-dark-border/20 rounded-xl hover:bg-light-border/30 dark:hover:bg-dark-border/30 transition-colors"
                  >
                    <div className="w-12 h-12 relative">
                      <Image src={method.icon} alt={method.name} fill className="object-contain" />
                    </div>
                    <span className="text-sm font-medium">{method.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Price Card */}
            <div className="bg-light-paper dark:bg-dark-paper p-8 rounded-xl border border-light-border dark:border-dark-border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-4xl font-bold text-blue-500">
                    {isFree ? "Free" : "$49"}
                  </span>
                  <p className="text-text-light-secondary/70 dark:text-text-dark-secondary/70 mt-2">
                    {isFree
                      ? "Basic version with essential features"
                      : "One-time payment, lifetime updates"}
                  </p>
                </div>
                <a
                  href="#"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                >
                  {isFree ? "Download Now" : "Purchase Now"}
                </a>
              </div>

              {/* Requirements */}
              <div className="border-t border-light-border/30 dark:border-dark-border/30 pt-6">
                <h3 className="font-medium mb-4">System Requirements</h3>
                <ul className="grid grid-cols-2 gap-3 text-sm text-text-light-secondary/70 dark:text-text-dark-secondary/70">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-light-paper dark:bg-dark-paper p-8 rounded-xl border border-light-border dark:border-dark-border">
              <h2 className="text-2xl font-semibold mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Free Features */}
                <div>
                  <h3 className="font-medium mb-4 text-blue-500">Standard Features</h3>
                  <ul className="space-y-3">
                    {features.free.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-start gap-2 text-sm text-text-light-secondary/70 dark:text-text-dark-secondary/70"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Pro Features */}
                <div>
                  <h3 className="font-medium mb-4 text-emerald-500">Pro Features</h3>
                  <ul className="space-y-3">
                    {features.pro.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-start gap-2 text-sm text-text-light-secondary/70 dark:text-text-dark-secondary/70"
                      >
                        <svg
                          className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
