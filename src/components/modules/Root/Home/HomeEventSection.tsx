/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import EventCard from "@/components/common/EventCard";
import MyContainer from "@/components/common/MyContainer";
import Pagination from "@/components/common/Pagination";
import TitleMD from "@/components/common/TitleMD";
import { TCategory } from "@/types/other.type";
import { CalendarRange } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const category: TCategory[] = [
  {
    name: "Music",
    icon: "/icons/Music.png",
    path: "music",
  },
  {
    name: "Culture",
    icon: "/icons/Culture.png",
    path: "culture",
  },
  {
    name: "Foods",
    icon: "/icons/Foods.png",
    path: "foods",
  },
  {
    name: "Nightlife",
    icon: "/icons/Nightlife.png",
    path: "nightlife",
  },
  {
    name: "Hobbies",
    icon: "/icons/Hobbies.png",
    path: "hobbies",
  },
  {
    name: "Kids",
    icon: "/icons/Kids.png",
    path: "kids",
  },
  {
    name: "Sports",
    icon: "/icons/Sports.png",
    path: "sports",
  },
  {
    name: "Health & Wellness",
    icon: "/icons/HealthWellness.png",
    path: "health-wellness",
  },
  {
    name: "Business",
    icon: "/icons/Business.png",
    path: "business",
  },
  {
    name: "Performing & Theatre",
    icon: "/icons/PerformingTheatre.png",
    path: "performing-theatre",
  },
];

const HomeEventSection = () => {
  const { resolvedTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string | null>(null);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const filterType = [
    "Today",
    "Tomorrow",
    "Thursday",
    "Friday",
    "This weekend",
  ];
  return (
    <section
      className={`md:pb-16 pb-10 ${
        resolvedTheme === "light"
          ? "bg-[linear-gradient(to_bottom,#fdd394_0px,#fdd394_10px,white_200px,white_100%)]"
          : "bg-[linear-gradient(to_bottom,#09061b_0px,#09061b_10px,black_200px,black_100%)]"
      }`}
    >
      <div className="flex overflow-x-auto justify-evenly w-full gap-5 px-3 pb-3 md:mb-20 mb-12">
        {category?.map((item: TCategory) => (
          <Link href={`/category/${item.path}`} key={item.path} className="">
            <div className="space-y-2 flex flex-col items-center md:w-28 w-20">
              <div
                className={`hover:shadow-xl shadow-black ${
                  resolvedTheme === "light" ? "bg-white" : "bg-white/10"
                } w-14 h-14 rounded-full cursor-pointer`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-14 h-14 p-2 "
                />
              </div>
              <p className="md:text-xl md:font-semibold font-medium text-center">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <MyContainer>
        <div className="space-y-8">
          <div className="flex gap-6 items-center">
            <TitleMD title="Browse Events in" />
            <span className="flex-1 h-[1px] bg-black" />
          </div>

          <div className="flex flex-wrap md:gap-4 gap-2 font-medium">
            {filterType?.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`text-sm px-2 py-1 border rounded-full ${
                  filter === item && "bg-gray-300/50"
                }`}
              >
                {item}
              </button>
            ))}
            <button className="flex gap-2 items-center text-sm px-2 py-1 border rounded-full">
              <CalendarRange size={15} /> Calender
            </button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-5">
            {items?.map((item, idx) => (
              <EventCard key={idx} data={idx} type="event" />
            ))}
          </div>
          <Pagination
            currentPage={1}
            totalItem={26}
            limit={9}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </MyContainer>
    </section>
  );
};

export default HomeEventSection;
