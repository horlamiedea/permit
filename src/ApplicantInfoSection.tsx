import React from "react";

// An inline SVG component for the checkmark icon
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-600 mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export const ApplicantInfoSection = (): JSX.Element => {
  const steps = [
    { label: "Validate Document", isCompleted: true, isActive: false },
    { label: "Document Info", isCompleted: false, isActive: true },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav
        className="flex w-full max-w-7xl mx-auto px-6 py-3"
        aria-label="Progress steps"
      >
        <ol className="flex items-center space-x-2 text-sm">
          {steps.map((step, index) => (
            <li key={step.label} className="flex items-center">
              {step.isCompleted ? (
                <CheckIcon />
              ) : (
                <div
                  className={`w-2.5 h-2.5 rounded-full mr-2 ${
                    step.isActive ? "bg-[#2f4cb0]" : "bg-gray-400"
                  }`}
                  aria-hidden="true"
                />
              )}
              <span
                className={`font-medium ${
                  step.isActive ? "text-[#2f4cb0]" : "text-[#212529]"
                }`}
              >
                {step.label}
              </span>

              {/* Add separator if it's not the last item */}
              {index < steps.length - 1 && (
                <span className="mx-3 text-gray-400">&gt;</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};