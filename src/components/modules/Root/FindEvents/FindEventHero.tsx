"use client"
import MyContainer from "@/components/common/MyContainer";
import { useTheme } from "next-themes";

const FindEventHero = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      className={`h-[50vh] w-full flex flex-col justify-center items-center bg-cover bg-bottom ${
        resolvedTheme === "light"
          ? "bg-[url('/images/home-hero-bg.png')]"
          : "bg-[url('/images/home-hero-dark.png')]"
      }`}
    >
      <MyContainer>
        <div className="text-center">
          <h1 className="md:text-5xl text-3xl p-0 leading-none font-bold text-white font-space-grotesk md:mb-6 mb-4">
            Discover What’s <br /> Happening Tonight
          </h1>
        </div>
      </MyContainer>
    </section>
  );
};

export default FindEventHero;
