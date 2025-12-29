/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import EventCard from "@/components/common/EventCard";
import MyContainer from "@/components/common/MyContainer";
import Pagination from "@/components/common/Pagination";
import { CalendarRange } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Search = () => {
  const { resolvedTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 34, 65, 567, 78, 32, 3, 23, 45, 32,
    23,
  ];
  return (
    <section
      className={`max-w-[1950px] mx-auto px-4 ${
        resolvedTheme === "light" ? "bg-white" : "bg-black"
      } md:py-28 py-14`}
    >
      <div className="space-y-8">
        <div className="flex flex-wrap gap-4 font-medium">
          <button className="px-5 py-2 border rounded-full">All</button>
          <button className="px-5 py-2 border rounded-full">Today</button>
          <button className="px-5 py-2 border rounded-full">This Week</button>
          <button className="flex gap-2 items-center px-5 py-2 border rounded-full">
            <CalendarRange size={20} /> Calender
          </button>
        </div>

        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
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
    </section>
  );
};

export default Search;
