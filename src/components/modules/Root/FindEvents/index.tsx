"use client";
import EventCard from "@/components/common/EventCard";
import Pagination from "@/components/common/Pagination";
import { TCategory } from "@/types/other.type";
import { CalendarRange, Check, Grip } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import PlaceCard from "@/components/common/PlaceCard";

const category: TCategory[] = [
  { name: "Music", icon: "/icons/Music.png" },
  { name: "Culture", icon: "/icons/Culture.png" },
  { name: "Foods", icon: "/icons/Foods.png" },
  { name: "Nightlife", icon: "/icons/Nightlife.png" },
  { name: "Hobbies", icon: "/icons/Hobbies.png" },
  { name: "Kids", icon: "/icons/Kids.png" },
  { name: "Sports", icon: "/icons/Sports.png" },
  { name: "Health & Wellness", icon: "/icons/HealthWellness.png" },
  { name: "Business", icon: "/icons/Business.png" },
  { name: "Performing & Theatre", icon: "/icons/PerformingTheatre.png" },
];

const FindEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const pathName = usePathname();
  const [selectedType, setSelectedType] = useState<"events" | "places">(
    pathName === "/discover-places" ? "places" : "events"
  );
  const [selectedPriceType, setSelectedPriceType] = useState<
    "free" | "paid" | null
  >(null);

  const [filter, setFilter] = useState<string | null>(null);

  const { resolvedTheme } = useTheme();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77];

  const filterType = [
    "Today",
    "Tomorrow",
    "Thursday",
    "Friday",
    "This weekend",
  ];

  return (
    <section className="bg-white  w-full ">
      {/* <FindEventHero /> */}
      <div
        className={`md:py-5 py-8 ${
          resolvedTheme === "light" ? "bg-white" : "bg-black"
        } `}
      >
        <div className="max-w-[1950px] mx-auto flex lg:gap-0 gap-5 ">
          {/* Sidebar */}
          <div className="lg:inline-block hidden space-y-6 xl:w-[250px] w-[230px] px-3 sticky top-5 h-full overflow-y-auto md:py-24 py-12 md:px-5">
            {/* place & events  */}
            <div className="flex flex-col gap-3 text-lg">
              <label
                className="flex gap-2 items-center cursor-pointer select-none"
                onClick={() => setSelectedType("events")}
              >
                <div
                  className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center`}
                >
                  {selectedType === "events" && <Check size={16} />}
                </div>
                <span>Events</span>
              </label>

              <label
                className="flex gap-2 items-center cursor-pointer select-none"
                onClick={() => setSelectedType("places")}
              >
                <div
                  className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center`}
                >
                  {selectedType === "places" && <Check size={16} />}
                </div>
                <span>Places</span>
              </label>
            </div>

            {/* category  */}
            <div>
              <h3 className="md:text-2xl text-xl font-semibold mb-3">
                Categories
              </h3>
              <div className="flex flex-col gap-3">
                {category.map((cat) => (
                  <label
                    key={cat.name}
                    className="flex gap-3 items-center cursor-pointer select-none"
                    onClick={() =>
                      setSelectedCategory((prev) =>
                        prev.includes(cat.name)
                          ? prev.filter((item) => item !== cat.name)
                          : [...prev, cat.name]
                      )
                    }
                  >
                    <div
                      className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center`}
                    >
                      {selectedCategory.includes(cat.name) && (
                        <Check size={16} />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={cat.icon}
                        alt={cat.name}
                        width={22}
                        height={22}
                      />
                      <span className="text-[15px]">{cat.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* type  */}
            <div className="flex flex-col gap-3">
              <h3 className="md:text-2xl text-xl font-semibold mb-1">Type</h3>

              <label
                className="flex gap-2 items-center cursor-pointer select-none"
                onClick={() =>
                  setSelectedPriceType((prev) =>
                    prev === "free" ? null : "free"
                  )
                }
              >
                <div className="w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center">
                  {selectedPriceType === "free" && <Check size={16} />}
                </div>
                <span>Free</span>
              </label>

              <label
                className="flex gap-2 items-center cursor-pointer select-none"
                onClick={() =>
                  setSelectedPriceType((prev) =>
                    prev === "paid" ? null : "paid"
                  )
                }
              >
                <div className="w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center">
                  {selectedPriceType === "paid" && <Check size={16} />}
                </div>
                <span>Paid</span>
              </label>
            </div>
          </div>

          {/* Card section  */}
          <div className="w-full px-3 flex-1">
            <div
              className={`sticky top-0 overflow-x-hidden md:pt-20 pt-12 pb-2 z-20 space-y-2 pl-1 ${
                resolvedTheme === "light" ? "bg-white" : "bg-black"
              }`}
            >
              <h3 className="text-xl font-semibold">
                Browse {selectedType === "places" ? "Places" : "Events"} in
              </h3>

              <div className="flex flex-wrap gap-4 md:font-medium items-center md:text-base text-sm">
                <div className="lg:hidden inline-block">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Grip />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        <div className="space-y-6 w-[280px]">
                          <div className="flex flex-col gap-3 text-lg">
                            <label
                              className="flex gap-2 items-center cursor-pointer select-none"
                              onClick={() => setSelectedType("events")}
                            >
                              <div
                                className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center`}
                              >
                                {selectedType === "events" && (
                                  <Check size={16} />
                                )}
                              </div>
                              <span>Events</span>
                            </label>

                            <label
                              className="flex gap-2 items-center cursor-pointer select-none"
                              onClick={() => setSelectedType("places")}
                            >
                              <div
                                className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center`}
                              >
                                {selectedType === "places" && (
                                  <Check size={16} />
                                )}
                              </div>
                              <span>Places</span>
                            </label>
                          </div>

                          <div>
                            <h3 className="md:text-2xl text-xl font-semibold mb-3">
                              Categories
                            </h3>
                            <div className="flex flex-col gap-3">
                              {category.map((cat) => (
                                <label
                                  key={cat.name}
                                  className="flex gap-3 items-center cursor-pointer select-none"
                                  onClick={() =>
                                    setSelectedCategory((prev) =>
                                      prev.includes(cat.name)
                                        ? prev.filter(
                                            (item) => item !== cat.name
                                          )
                                        : [...prev, cat.name]
                                    )
                                  }
                                >
                                  <div
                                    className={`w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center`}
                                  >
                                    {selectedCategory.includes(cat.name) && (
                                      <Check size={16} />
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Image
                                      src={cat.icon}
                                      alt={cat.name}
                                      width={22}
                                      height={22}
                                    />
                                    <span className="text-[15px]">
                                      {cat.name}
                                    </span>
                                  </div>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-3">
                            <h3 className="md:text-2xl text-xl font-semibold mb-1">
                              Type
                            </h3>

                            <label
                              className="flex gap-2 items-center cursor-pointer select-none"
                              onClick={() =>
                                setSelectedPriceType((prev) =>
                                  prev === "free" ? null : "free"
                                )
                              }
                            >
                              <div className="w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center">
                                {selectedPriceType === "free" && (
                                  <Check size={16} />
                                )}
                              </div>
                              <span>Free</span>
                            </label>

                            <label
                              className="flex gap-2 items-center cursor-pointer select-none"
                              onClick={() =>
                                setSelectedPriceType((prev) =>
                                  prev === "paid" ? null : "paid"
                                )
                              }
                            >
                              <div className="w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center">
                                {selectedPriceType === "paid" && (
                                  <Check size={16} />
                                )}
                              </div>
                              <span>Paid</span>
                            </label>
                          </div>
                        </div>
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {filterType?.map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`text-sm px-2 py-1 border rounded-full ${filter === item && "bg-gray-300/50"}`}
                  >
                    {item}
                  </button>
                ))}
                <button className="flex gap-2 items-center text-sm px-2 py-1 border rounded-full">
                  <CalendarRange size={15} /> Calender
                </button>
              </div>
            </div>
            <div className="md:space-y-12 space-y-5">
              <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 pt-3">
                {items.map((item, idx) =>
                  selectedType === "events" ? (
                    <EventCard key={idx} data={idx} type={"event"} />
                  ) : (
                    <PlaceCard key={idx} data={idx} />
                  )
                )}
              </div>

              <Pagination
                currentPage={currentPage}
                totalItem={26}
                limit={9}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindEvents;
