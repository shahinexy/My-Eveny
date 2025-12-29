"use client"
import MyContainer from "@/components/common/MyContainer";
import { useTheme } from "next-themes";

const ContactHeroSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      className={`h-screen w-full flex flex-col justify-center items-center bg-cover bg-center  ${
        resolvedTheme === "light"
          ? "bg-[url('/images/home-hero-bg.png')]"
          : "bg-[url('/images/home-hero-dark.png')]"
      }`}
    >
      <MyContainer>
        <div className="text-center">
          <h1 className="md:text-[74px] text-4xl p-0 leading-none font-bold text-white font-space-grotesk md:mb-6 mb-4">
            We’d Love to Hear from You
          </h1>
          <p className="md:text-2xl text-xl text-white font-space-grotesk md:mb-12 mb-8">
            Whether you’re an event-goer, a host, or just curious – we’re here
            to help.
          </p>
        </div>
      </MyContainer>
    </section>
  );
};

export default ContactHeroSection;
