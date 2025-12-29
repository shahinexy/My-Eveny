"use client";
import MyContainer from "@/components/common/MyContainer";
import AboutHeroSection from "./AboutHeroSection";
import OurStorySection from "./OurStorySection";
import WhatWeDoSection from "./WhatWeDoSection";
import AboutActionSection from "./AboutActionSection";
import { useTheme } from "next-themes";

const About = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <AboutHeroSection />
      <div
        className={`md:space-y-36 space-y-8 ${
          resolvedTheme === "light"
            ? "bg-gradient-to-b from-[#fdd394] to-transparent"
            : "bg-gradient-to-b from-[#0b0721] to-transparent"
        } md:py-20 py-10`}
      >
        <MyContainer>
          <div className="md:space-y-36 space-y-8 ">
            <OurStorySection />
            <WhatWeDoSection />
            <AboutActionSection />
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default About;
