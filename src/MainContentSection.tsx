import React from "react";
import checkedgreenSvg from "./assets/checkedgreen-svg.svg";
import item from "./assets/item.svg";

interface InfoField {
  label: string;
  value: string;
}

export const MainContentSection = (): JSX.Element => {
  const infoFields: InfoField[][] = [
    [
      { label: "Applicant Name", value: "JULIET OMODAMWEN OSUJI" },
      { label: "Service Name", value: "Tint Permit Virtual Verification" },
      { label: "Vehicle Make", value: "Toyota" },
      { label: "Vehicle Model", value: "Camry" },
    ],
    [
      { label: "VIN", value: "4T1BK3EK0AU110454" },
      { label: "Plate Number", value: "SMK244JV" },
      { label: "Vehicle Color", value: "Black" },
      { label: "Year of Manufacture", value: "2010" },
    ],
    [
      { label: "Reason for Inquiry", value: "Others" },
      { label: "Category of Tint", value: "Category 1" },
      { label: "Approval Number", value: "PSS08160000733879" },
      { label: "Approval Date", value: "16/08/2025" },
    ],
    [{ label: "Expiry Date", value: "16/08/2026" }],
  ];

  return (
    <div className="flex flex-col min-h-[1200px] items-center gap-[50px] pt-0 pb-[481px] px-0 relative self-stretch w-full flex-[0_0_auto] bg-[#f3f6f8]">
      <nav
        className="flex flex-col items-start px-[15px] py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#fcfdfd]"
        aria-label="Progress steps"
      >
        <ol className="flex flex-wrap items-start justify-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
          <li className="w-[176.38px] relative self-stretch">
            <img
              className="absolute top-3 left-0 w-3.5 h-3.5"
              alt="Completed"
              src={checkedgreenSvg}
            />

            <div className="inline-flex flex-col items-start px-4 py-2 absolute top-0 left-[5px]">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Regular',Helvetica] font-normal text-[#212529] text-base tracking-[0] leading-6 whitespace-nowrap">
                Validate Document
              </span>
            </div>
          </li>

          <li>
            <img
              className="flex-[0_0_auto] relative self-stretch"
              alt="Step separator"
              src={item}
            />
          </li>

          <li
            className="inline-flex items-center flex-[0_0_auto] relative self-stretch"
            aria-current="step"
          >
            <div className="relative w-2.5 h-2.5 bg-[#2f4cb0] rounded-[5px] border border-solid" />

            <div className="inline-flex flex-col items-start px-4 py-2 relative flex-[0_0_auto] ml-[-5px]">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Regular',Helvetica] font-normal text-[#2f4cb0] text-base tracking-[0] leading-6 whitespace-nowrap">
                Document Info
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <main className="flex flex-col w-[1780px] items-start pt-[30px] pb-[50px] px-[25px] relative flex-[0_0_auto] bg-white rounded-[5px] overflow-hidden shadow-[0px_0px_2px_2px_#ededed80]">
        <section className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Ubuntu-Medium',Helvetica] font-medium text-[#212529] text-xl tracking-[0] leading-6">
              APPLICANT REQUEST INFORMATION
            </h1>
          </header>

          <div className="flex flex-col w-[1745px] items-start relative flex-[0_0_auto] ml-[-15.00px]">
            <div className="flex flex-wrap w-[1760px] min-h-[151px] items-start gap-[0px_0px] relative flex-[0_0_auto] mr-[-15.00px]">
              <figure className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                <div
                  className="relative w-[110px] h-[120px] bg-[url(/image.png)] bg-cover bg-[50%_50%]"
                  role="img"
                  aria-label="Passport photo of applicant"
                />

                <figcaption className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Bold',Helvetica] font-bold text-[#212529] text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                    PASSPORT PHOTO
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="relative w-[1760px] h-[278px] mr-[-15.00px]">
              {infoFields.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((field, fieldIndex) => (
                    <div
                      key={`${rowIndex}-${fieldIndex}`}
                      className="flex flex-col max-w-[440px] w-[calc(100%_-_1320px)] min-h-px h-[calc(100%_-_208px)] items-start pt-[3px] pb-5 px-[15px] absolute"
                      style={{
                        top: `${rowIndex * 69}px`,
                        left: `${fieldIndex * 440}px`,
                      }}
                    >
                      <label className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Medium',Helvetica] font-medium text-[#a5a5a5] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                        {field.label}
                      </label>

                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-0.50px]">
                        <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Ubuntu-Bold',Helvetica] font-bold text-[#212529] text-[17px] tracking-[0] leading-[25.5px]">
                          {field.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-wrap w-[1760px] items-start justify-center gap-[0px_0px] pl-0 pr-[440px] py-0 relative flex-[0_0_auto] mr-[-15.00px]">
              <div className="flex flex-col max-w-[1320px] min-h-px items-start pt-[3px] pb-4 px-[15px] relative flex-1 grow self-stretch">
                <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Medium',Helvetica] font-medium text-[#a5a5a5] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                  Details of Certificate
                </h2>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Medium',Helvetica] font-medium text-[#212529] text-base tracking-[0] leading-6 whitespace-nowrap">
                    The Deputy Inspector-General of police, Department of
                    Operations, has approved the use of tinted glass on the
                    vehicle with the following details in accordance with
                    Section
                  </p>

                  <p className="relative flex items-center justify-center w-fit [font-family:'Ubuntu-Medium',Helvetica] font-medium text-[#212529] text-base tracking-[0] leading-6 whitespace-nowrap">
                    66(2) of the National Road Traffic Regulations (1997) and
                    Section 1(1) of the Motor Vehicle (Prohibition of Tinted
                    Glass) Act, Laws of the Federation of Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
