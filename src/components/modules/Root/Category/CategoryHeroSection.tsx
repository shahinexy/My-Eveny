import MyContainer from "@/components/common/MyContainer";
import { useTheme } from "next-themes";

const CategoryHeroSection = () => {
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
        <div className="relative text-center z-10">
          <h1 className="md:text-[74px] text-[44px] p-0 leading-none font-bold text-white font-space-grotesk md:mb-6 mb-4">
            Kids Events & Places
          </h1>
          <p className="md:text-2xl text-xl text-white font-space-grotesk md:mb-12 mb-8">
            Discover the best kids events and places in your area
          </p>
        </div>
      </MyContainer>
    </section>
  );
};

export default CategoryHeroSection;
