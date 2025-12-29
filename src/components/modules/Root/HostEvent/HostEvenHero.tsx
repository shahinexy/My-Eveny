"use client";
import MyBtn from "@/components/common/MyBtn";
import MyContainer from "@/components/common/MyContainer";
import { useTheme } from "next-themes";
import Link from "next/link";

const HomeHeroSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      className={`h-screen w-full flex flex-col justify-center items-center bg-cover bg-center ${
        resolvedTheme === "light"
          ? "bg-[url('/images/home-hero-bg.png')]"
          : "bg-[url('/images/home-hero-dark.png')]"
      }`}
    >
      <MyContainer>
        <div className="text-center">
          <h1 className="md:text-[74px] text-4xl p-0 leading-none font-bold text-white font-space-grotesk md:mb-6 mb-4">
            Discover What’s <br className="lg:inline-block hidden" /> Happening
            Tonight
          </h1>
          <p className="md:text-2xl text-lg text-white font-space-grotesk md:mb-12 mb-8">
            From Kampala to Nairobi – Find events that matter to you
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={"/"}>
              <MyBtn name="Create My Event" />
            </Link>
            <Link href={`/about`}>
              <button className={`bg-white text-black px-4 py-3 md:font-medium rounded-lg`}>
                Learn How It Works
              </button>
            </Link>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default HomeHeroSection;
