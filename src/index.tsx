import React from "react";
import { ApplicantInfoSection } from "./ApplicantInfoSection";
import { RequestDetailsSection } from "./RequestDetailsSection";

export const BackgroundScreen = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-[#f3f6f8]">
      <ApplicantInfoSection />
      <main className="py-8">
        <RequestDetailsSection />
      </main>
    </div>
  );
};