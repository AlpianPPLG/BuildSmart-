import React, { useState } from "react";

interface PricingOption {
  title: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
  popular?: boolean;
}

const pricingOptions: PricingOption[] = [
  {
    title: "Basic",
    priceMonthly: "$19/month",
    priceYearly: "$199/year",
    features: [
      "1 User",
      "Basic Support",
      "Access to all features",
      "Email Notifications",
    ],
  },
  {
    title: "Pro",
    priceMonthly: "$49/month",
    priceYearly: "$499/year",
    features: [
      "5 Users",
      "Priority Support",
      "Access to all features",
      "Email Notifications",
      "Analytics Dashboard",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    priceMonthly: "$99/month",
    priceYearly: "$999/year",
    features: [
      "Unlimited Users",
      "Dedicated Support",
      "Access to all features",
      "Email Notifications",
      "Custom Integrations",
    ],
  },
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a plan that suits your needs.
          </p>
          <div className="mt-4">
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                !isYearly
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                isYearly
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
                option.popular ? "scale-105 border-2 border-indigo-600" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {option.title}
              </h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">
                {isYearly ? option.priceYearly : option.priceMonthly}
              </p>
              <ul className="mb-6">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
