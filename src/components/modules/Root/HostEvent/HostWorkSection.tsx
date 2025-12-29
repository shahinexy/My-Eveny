"use client";
import TitleLG from "@/components/common/TitleLG";
import { useTheme } from "next-themes";
import Image from "next/image";

const HostWorkSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="md:space-y-8 space-y-6">
      <div className="text-center clear-start md:space-y-6 space-y-4">
        <TitleLG title="How Hosting Works" />
        <p>Turn your idea into a sold-out event in just three easy steps.</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        <div
          className={`border rounded-xl md:p-4 p-3 space-y-6 ${
            resolvedTheme === "light" &&
            "bg-gradient-to-b from-[#FFE3BC] to-transparent"
          }`}
        >
          <Image
            src={"/images/host-events/create-your-event.png"}
            alt="event"
            width={300}
            height={300}
            className="md:w-80 w-64 md:h-80 h-64 rounded-xl mx-auto"
          />

          <div className="space-y-3">
            <p className="text-sm text-primary">Step 1</p>
            <h4 className="md:text-2xl text-xl font-medium">
              Create Your Event
            </h4>
            <p className="text-sm text-gray-500">
              Fill in the details — date, location, vibe — and make it uniquely
              yours.
            </p>
          </div>
        </div>
        <div
          className={`border rounded-xl md:p-4 p-3 space-y-6 ${
            resolvedTheme === "light" &&
            "bg-gradient-to-b from-[#FFE3BC] to-transparent"
          }`}
        >
          <Image
            src={"/images/host-events/spread-the-world.png"}
            alt="event"
            width={300}
            height={300}
            className="md:w-80 w-64 md:h-80 h-64 rounded-xl mx-auto"
          />

          <div className="space-y-3">
            <p className="text-sm text-primary">Step 2</p>
            <h4 className="md:text-2xl text-xl font-medium">Spread the Word</h4>
            <p className="text-sm text-gray-500">
              Share with your network and let Choptop’s audience discover it..
            </p>
          </div>
        </div>
        <div
          className={`border rounded-xl md:p-4 p-3 space-y-6 ${
            resolvedTheme === "light" &&
            "bg-gradient-to-b from-[#FFE3BC] to-transparent"
          }`}
        >
          <Image
            src={"/images/host-events/sell-or-manage.png"}
            alt="event"
            width={300}
            height={300}
            className="md:w-80 w-64 md:h-80 h-64 rounded-xl mx-auto"
          />

          <div className="space-y-3">
            <p className="text-sm text-primary">Step 3</p>
            <h4 className="md:text-2xl text-xl font-medium">
              Sell or Manage Tickets
            </h4>
            <p className="text-sm text-gray-500">
              Use our tools to track RSVPs, handle payments, and scan tickets at
              the door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostWorkSection;
