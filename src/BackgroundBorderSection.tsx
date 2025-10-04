import React from "react";
import container from "./assets/container.svg";
import facebookOutlineSvg from "./assets/facebook-outline-svg.svg";
import instagramOutlineSvg from "./assets/instagram-outline-svg.svg";
import twitterOutlineSvg from "./assets/twitter-outline-svg.svg";

export const BackgroundBorderSection = (): JSX.Element => {
  const navigationLinks = [
    { text: "About", href: "https://possap.gov.ng/p/about" },
    { text: "Contact", href: "https://possap.gov.ng/p/contact" },
    { text: "Privacy Policy", href: "https://possap.gov.ng/p/privacy-policy" },
    { text: "Terms Of Use", href: "https://possap.gov.ng/p/terms-of-use" },
  ];

  const socialLinks = [
    {
      icon: instagramOutlineSvg,
      alt: "Instagram outline",
      href: "https://www.instagram.com/possap_ngg",
      label: "Instagram",
    },
    {
      icon: facebookOutlineSvg,
      alt: "Facebook outline svg",
      href: "https://www.facebook.com/profile.php",
      label: "Facebook",
    },
    {
      icon: twitterOutlineSvg,
      alt: "Twitter outline svg",
      href: "https://twitter.com/possap_ngg",
      label: "Twitter",
    },
  ];

  return (
    <footer className="flex flex-col items-start pl-[121px] pr-[101px] py-[11px] relative self-stretch w-full flex-[0_0_auto] bg-[#08102d] border border-solid">
      <div className="flex flex-wrap items-start justify-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative max-w-[141.5px] w-[141.48px] min-h-px self-stretch">
          <img
            className="relative w-full h-full object-cover"
            alt="POSSAP Logo"
            src={container}
          />
        </div>

        <div className="flex flex-col max-w-[566px] w-[565.98px] min-h-px items-start pt-[30px] pb-2.5 px-[30px] relative self-stretch">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Ubuntu-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
              A secure way to request and pay for your Police Specialized
              Services online.
            </p>
          </div>
        </div>

        <nav
          className="flex flex-col max-w-[707.5px] w-[707.5px] min-h-px items-start pt-[30px] pb-2.5 px-[30px] relative self-stretch"
          aria-label="Footer navigation"
        >
          <div className="flex flex-wrap items-start justify-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className={`flex flex-col ${index < 2 ? "max-w-[107.92px] w-[107.91px]" : "max-w-[215.83px] w-[215.83px]"} min-h-px items-start relative self-stretch`}
              >
                <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                  <a
                    className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Ubuntu-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[21px] hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#08102d]"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </nav>

        <div className="flex flex-col max-w-[283px] w-[283px] min-h-px items-start pt-[30px] pb-2.5 px-[30px] relative self-stretch">
          <div className="flex flex-wrap items-start justify-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[74.33px] min-h-px items-start pt-[3px] pb-[0.16px] px-0 relative flex-1 grow self-stretch"
              >
                <a
                  className="inline-flex items-start pt-[0.84px] pb-0 px-0 relative flex-[0_0_auto] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#08102d]"
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                >
                  <img
                    className="relative flex-[0_0_auto]"
                    alt={social.alt}
                    src={social.icon}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
