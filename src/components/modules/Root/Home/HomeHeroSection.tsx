"use client";
import MyContainer from "@/components/common/MyContainer";
import { useTheme } from "next-themes";

const HomeHeroSection = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section
      className={`h-[70vh] w-full flex flex-col justify-center items-center bg-cover bg-bottom ${
        resolvedTheme === "light"
          ? "bg-[url('/images/home-hero-bg.png')]"
          : "bg-[url('/images/home-hero-dark.png')]"
      }`}
    >
      <MyContainer>
        <div className="text-center">
          <h1 className="md:text-[74px] text-[44px] p-0 leading-none font-bold text-white font-space-grotesk md:mb-6 mb-4">
            Discover What’s <br /> Happening Tonight
          </h1>
          <p className="md:text-2xl text-lg text-white font-space-grotesk md:mb-12 mb-8">
            From Kampala to Nairobi – Find events that matter to you
          </p>
        </div>
      </MyContainer>
    </section>
  );
};

export default HomeHeroSection;
