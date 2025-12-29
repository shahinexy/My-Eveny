"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "./EventCard";
import { useTheme } from "next-themes";

interface MySliderProps {
  id: string; // unique identifier
}

const MySlider = ({ id }: MySliderProps) => {
  const { resolvedTheme } = useTheme();
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="relative md:mb-28 mb-20">
      <button
        className={`swiper-button-prev-${id} absolute md:right-32 right-20 -bottom-20 -translate-y-1/2 z-10 border-2 border-black p-1 rounded-full shadow`}
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>
      <button
        className={`swiper-button-next-${id} absolute md:right-16 right-8 -bottom-20 -translate-y-1/2 z-10 border-2 border-black p-1 rounded-full shadow`}
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: `.swiper-button-next-${id}`,
          prevEl: `.swiper-button-prev-${id}`,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          800: { slidesPerView: 3, spaceBetween: 15 },
          980: { slidesPerView: 4, spaceBetween: 15 },
          1300: { slidesPerView: 5, spaceBetween: 15 },
          1600: { slidesPerView: 6, spaceBetween: 15 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((item, idx) => (
          <SwiperSlide
            key={item}
            className={`mb-4 rounded-t-3xl ${
              resolvedTheme === "light"
                ? "bg-white shadow-lg"
                : "bg-black shadow-primary shadow-sm"
            }`}
          >
            <EventCard data={idx} type="event" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;
