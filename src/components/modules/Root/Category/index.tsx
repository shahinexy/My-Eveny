"use client";
import { CalendarRange } from "lucide-react";
import CategoryHeroSection from "./CategoryHeroSection";
import CategorySlider from "./CategorySlider";
import { useState } from "react";
import { useTheme } from "next-themes";

const Category = () => {
  const { resolvedTheme } = useTheme();
  const [currentTab, setCurrentTab] = useState<"Events" | "Place">("Events");
  return (
    <section className={` ${resolvedTheme === "light" && "bg-white"}`}>
      <CategoryHeroSection />
      <div
        className={` md:space-y-12 space-y-6 md:pb-16 pb-10 ${
          resolvedTheme === "light"
            ? "bg-[linear-gradient(to_bottom,#fdd394_0px,#fdd394_10px,white_200px,white_100%)]"
            : "bg-[linear-gradient(to_bottom,#09061b_0px,#09061b_10px,black_200px,black_100%)]"
        }`}
      >
        <div className={` flex gap-4 flex-wrap px-3 `}>
          <div className="bg-gray-300 md:p-3 p-2 rounded-full flex gap-3 text-black">
            <button
              onClick={() => setCurrentTab("Events")}
              className={`px-3 py-1 rounded-full ${
                currentTab === "Events" && "bg-white"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setCurrentTab("Place")}
              className={`px-3 py-1 rounded-full ${
                currentTab === "Place" && "bg-white"
              }`}
            >
              Place
            </button>
          </div>
          <button className="flex gap-2 items-center px-5 py-2 border rounded-full">
            <CalendarRange size={20} /> Calender
          </button>
        </div>

        <CategorySlider title="Most Popular" id="11" />
        <CategorySlider title="This Week" id="22" />
        <CategorySlider title="This Weekend" id="33" />
      </div>
    </section>
  );
};

export default Category;
