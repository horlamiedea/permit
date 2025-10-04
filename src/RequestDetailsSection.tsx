import React from "react";
// Import the passport photo from the assets folder
import passportPhoto from "./assets/passport.jpg";

// Define the type for a detail field
interface DetailField {
  label: string;
  value: string;
}

export const RequestDetailsSection = (): JSX.Element => {
  // Combine all details into a single array for easier mapping
  const allDetails: DetailField[] = [
    { label: "Applicant Name", value: "JULIET OMODAMWEN OSUJI" },
    { label: "Service Name", value: "Tint Permit Virtual Verification" },
    { label: "Vehicle Make", value: "Toyota" },
    { label: "Vehicle Model", value: "Camry" },
    { label: "VIN", value: "4T1BK3EK0AU110454" },
    { label: "Plate Number", value: "SMK244JV" },
    { label: "Vehicle Color", value: "Black" },
    { label: "Year of Manufacture", value: "2010" },
    { label: "Reason for Inquiry", value: "Others" },
    { label: "Category of Tint", value: "Category 1" },
    { label: "Approval Number", value: "PSS08160000733879" },
    { label: "Approval Date", value: "16/08/2025" },
    { label: "Expiry Date", value: "16/08/2026" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-[#212529] mb-6">
        APPLICANT REQUEST INFORMATION
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Passport Photo Section */}
        <div className="md:col-span-1">
          <figure>
            <img
              src={passportPhoto}
              alt="Passport photo of applicant"
              className="w-32 h-36 object-cover rounded-md"
            />
            <figcaption className="text-center text-xs font-bold text-[#212529] mt-2">
              PASSPORT PHOTO
            </figcaption>
          </figure>
        </div>

        {/* Details Grid Section */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
          {allDetails.map((field) => (
            <div key={field.label}>
              <label className="text-sm font-medium text-gray-500 block">
                {field.label}
              </label>
              <p className="text-base font-bold text-[#212529]">{field.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Details of Certificate Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <label className="text-sm font-medium text-gray-500 block">
          Details of Certificate
        </label>
        <p className="text-base text-[#212529] mt-2 max-w-4xl">
          The Deputy Inspector-General of police, Department of Operations, has
          approved the use of tinted glass on the vehicle with the following
          details in accordance with Section 66(2) of the National Road Traffic
          Regulations (1997) and Section 1(1) of the Motor Vehicle (Prohibition
          of Tinted Glass) Act, Laws of the Federation of Nigeria
        </p>
      </div>
    </section>
  );
};