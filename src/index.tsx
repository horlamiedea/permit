import React from "react";
import { BackgroundBorderSection } from "./BackgroundBorderSection";
import { MainContentSection } from "./MainContentSection";
import { NavigationSection } from "./NavigationSection";
import overlayShadow from "./assets/overlay-shadow.svg";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1920px] items-start relative bg-white">
      <div className="absolute w-full h-full top-0 left-0 bg-white" />

      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <NavigationSection />
        <MainContentSection />
        <BackgroundBorderSection />
      </div>

      <img
        className="fixed left-[1852px] bottom-[205px] w-14 h-14"
        alt="Overlay shadow"
        src={overlayShadow}
      />
    </div>
  );
};
