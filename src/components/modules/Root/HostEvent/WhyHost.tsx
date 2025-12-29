"use client"
import MyContainer from "@/components/common/MyContainer";
import TitleLG from "@/components/common/TitleLG";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const WhyHost = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      className={`md:py-24 py-10 w-full bg-cover ${
        resolvedTheme === "light"
          ? "bg-[url('/images/host-events/choptop-bg.jpg')]"
          : "bg-[url('/images/testimonial-dark.png')]"
      } bg-top`}
    >
      <MyContainer>
        <div className="text-center clear-start md:space-y-6 space-y-4">
          <TitleLG title="Why Host on Choptop?" />
          <p>
            We’re more than just a ticketing tool — we’re your <br /> partner in
            event success.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-7 grid-cols-1 gap-6">
            <div
              className={`md:row-span-2 md:col-span-3 p-5 ${
                resolvedTheme === "light" ? "bg-[#FFE3BC]" : "bg-black"
              } rounded-lg border-primary border space-y-4 flex flex-col items-center gap-3`}
            >
              <h3 className="md:text-3xl text-2xl font-semibold text-center">
                A Crowd That Cares
              </h3>
              <Image
                src={"/images/host-events/crowd.png"}
                alt="image"
                width={500}
                height={500}
                className="md:w-1/2 md:h-80"
              />
              <p className="text-xl font-medium">
                Thousands of event-seekers ready to click “Attend.”
              </p>
            </div>
            <div
              className={`md:col-span-4 px-5 md:pt-0 pt-5 ${
                resolvedTheme === "light" ? "bg-[#FFE3BC]" : "bg-black"
              } rounded-lg border-primary border space-y-4 flex md:flex-row flex-col items-center gap-3`}
            >
              <div className="space-y-4">
                <h3 className="md:text-3xl text-2xl font-semibold">
                  Money in Your Pocket
                </h3>
                <p className="text-xl font-medium">
                  Fast, secure payouts with no hidden drama.
                </p>
              </div>

              <Image
                src={"/images/host-events/money.png"}
                alt="image"
                width={500}
                height={500}
                className="w-40 h-60"
              />
            </div>
            <div
              className={`md:col-span-2 p-5 ${
                resolvedTheme === "light" ? "bg-[#FFE3BC]" : "bg-black"
              } rounded-lg border-primary border flex flex-col md:items-center gap-3`}
            >
              <div className="space-y-4">
                <h3 className="md:text-2xl text-xl font-semibold">
                  Tools That Work Hard
                </h3>
                <p className="text-lg font-medium">
                  From guest lists to entry scanning — all in one dashboard.
                </p>
              </div>
              <div className="flex justify-end w-full">
                <Image
                  src={"/images/host-events/tools.png"}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-44"
                />
              </div>
            </div>

            <div
              className={`md:col-span-2 p-5 ${
                resolvedTheme === "light" ? "bg-[#FFE3BC]" : "bg-black"
              } rounded-lg border-primary border flex flex-col md:items-center gap-3`}
            >
              <div className="space-y-4">
                <h3 className="md:text-2xl text-xl font-semibold">
                  Your Rules
                </h3>
                <p className="text-lg font-medium">
                  Public party or private soirée — you’re in control.
                </p>
              </div>
              <div className="flex justify-end w-full">
                <Image
                  src={"/images/host-events/rules.png"}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-40 h-28"
                />
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default WhyHost;
