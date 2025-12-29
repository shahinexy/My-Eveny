"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Testimonial() {
  const { resolvedTheme } = useTheme();

  // 6 dummy testimonials – replace with real data later
  const testimonials = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    quote:
      "Choptop made finding live music so easy! I discovered a rooftop jazz night in Nairobi that I never would’ve known about.",
    name: "Amanda R",
    role: "Office Manager",
    company: "Blackrock Corp.",
  }));

  return (
    <section
      className={`
        min-h-screen flex flex-col justify-center items-center
        px-4 py-12 sm:px-6 md:px-8 lg:px-12
        bg-cover bg-center
        ${
          resolvedTheme === "light"
            ? "bg-[url('/images/testimonial-bg.png')]"
            : "bg-[url('/images/testimonial-dark.png')]"
        }
      `}
    >
      <div className="w-full max-w-5xl mx-auto text-center space-y-3 mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Testimonials
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto">
          Real stories from the people who make every night unforgettable.
        </p>
      </div>

      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto overflow-hidden md:px-20 px-10">
        <Swiper
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          className="h-full"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 30 },
            1024: { slidesPerView: 1, spaceBetween: 40 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className={`
                  ${resolvedTheme === "light" ? "bg-[#FFE3BC]" : "bg-black"}
                  rounded-2xl border border-primary
                  p-4 sm:p-5 md:p-6 lg:p-8
                  flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8
                  shadow-lg
                `}
              >
                {/* IMAGE */}
                <div className="relative w-full md:w-48 lg:w-64 h-48 sm:h-56 md:h-72 lg:h-96 flex-shrink-0">
                  <Image
                    src="/images/testimonial.png"
                    alt="testimonial"
                    fill
                    className="rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col justify-between flex-1 space-y-3 md:space-y-4">
                  <Image
                    src="/icons/quote.png"
                    alt="quote"
                    width={64}
                    height={64}
                    className="w-10 sm:w-12 md:w-14 lg:w-16"
                  />

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-snug font-medium">
                    {t.quote}
                  </p>

                  <div className="space-y-0.5">
                    <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                      {t.name}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/70">
                      {t.role}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/70">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
