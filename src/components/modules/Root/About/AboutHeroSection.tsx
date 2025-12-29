"use client";
import MyContainer from "@/components/common/MyContainer";
import { useTheme } from "next-themes";

const AboutHeroSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      className={`h-screen w-full flex flex-col justify-center items-center bg-cover bg-bottom ${
        resolvedTheme === "light"
          ? "bg-[url('/images/home-hero-bg.png')]"
          : "bg-[url('/images/home-hero-dark.png')]"
      }`}
    >
      <MyContainer>
        <div className="text-center">
          <h1 className="md:text-[74px] text-4xl p-0 leading-none font-bold text-white font-space-grotesk md:mb-6 mb-4">
            We’re Here for the Nights <br className="lg:inline-block hidden" />{" "}
            You’ll Never Forget
          </h1>
          <p className="md:text-2xl text-xl text-white font-space-grotesk md:mb-12 mb-8">
            Choptop is your gateway to the events, places, and people that make
            East Africa’s <br /> nights unforgettable.
          </p>
        </div>
      </MyContainer>
    </section>
  );
};

export default AboutHeroSection;
