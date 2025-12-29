"use client";
import MyContainer from "@/components/common/MyContainer";
import HomeHeroSection from "./HostEvenHero";
import HostWorkSection from "./HostWorkSection";
import WhyHost from "./WhyHost";
import ActionSection from "./ActionSection";
import { useTheme } from "next-themes";

const HostEvent = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <HomeHeroSection />
      <div
        className={`md:space-y-36 space-y-8 ${
          resolvedTheme === "light"
            ? "bg-gradient-to-b from-[#fdd394] to-transparent"
            : "bg-gradient-to-b from-[#0b0721] to-transparent"
        } md:py-20 py-10`}
      >
        <MyContainer>
          <HostWorkSection />
        </MyContainer>
        <WhyHost />
        <ActionSection />
      </div>
    </div>
  );
};

export default HostEvent;
