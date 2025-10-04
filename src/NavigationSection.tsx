import React from "react";

interface NavigationLink {
  label: string;
  href: string;
}

export const NavigationSection = (): JSX.Element => {
  const navigationLinks: NavigationLink[] = [
    {
      label: "Request Service",
      href: "https://possap.gov.ng/p/select-service",
    },
    {
      label: "Virtual Verification",
      href: "https://possap.gov.ng/p/run-face-verification",
    },
    {
      label: "Validate Document",
      href: "https://possap.gov.ng/p/validate-document",
    },
    {
      label: "About",
      href: "https://possap.gov.ng/p/about",
    },
    {
      label: "Contact",
      href: "https://possap.gov.ng/p/contact",
    },
  ];

  return (
    <nav
      className="flex items-center pt-[5px] pb-px px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e3e3e3]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-[100px] py-0 relative flex-1 grow">
        <div className="inline-flex flex-col items-start pl-0 pr-4 pt-0 pb-[3px] relative flex-[0_0_auto]">
          <a
            className="inline-flex flex-col items-start px-[5px] py-0 relative flex-[0_0_auto]"
            href="https://possap.gov.ng/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="POSSAP Home"
          >
            <div
              className="relative w-[100px] h-[49.08px] bg-[url(/logo-png.png)] bg-cover bg-[50%_50%]"
              role="img"
              aria-label="POSSAP Logo"
            />
          </a>
        </div>

        <div className="flex items-center justify-end relative flex-1 grow">
          <div className="inline-flex items-start pt-[5px] pb-0 px-0 relative flex-[0_0_auto]">
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className="inline-flex flex-col min-h-[50px] items-start px-2.5 py-0 relative self-stretch flex-[0_0_auto]"
              >
                <div className="inline-flex flex-col items-start p-2 relative flex-[0_0_auto]">
                  <a
                    className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Regular',Helvetica] font-normal text-[#00000080] text-base tracking-[0] leading-6 whitespace-nowrap"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </div>
              </div>
            ))}

            <div className="inline-flex flex-col min-h-[50px] items-start px-2.5 py-0 relative self-stretch flex-[0_0_auto]">
              <div className="flex w-[157px] items-start justify-center pt-[13px] pb-4 px-[13px] relative flex-[0_0_auto] bg-[#2f4cb0] rounded">
                <a
                  className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Ubuntu-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap"
                  href="https://possap.gov.ng/p/login"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Login | Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
