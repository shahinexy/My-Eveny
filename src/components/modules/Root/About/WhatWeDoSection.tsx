import TitleLG from "@/components/common/TitleLG";
import Image from "next/image";

const WhatWeDoSection = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-8 gap-4 items-center">
      <div className="md:space-y-7 space-y-5">
        <div className="space-y-3">
          <TitleLG title="What We Do" />
          <p className="text-gray-600">
            We help you find your crowd — or create one.
          </p>
        </div>
        <div className="text-lg md:space-y-6 space-y-4">
          <p>
            <span className="font-semibold">Discover Events:</span> Scroll,
            search, and find the best happenings near you.
          </p>
          <p>
            <span className="font-semibold">Host with Ease:</span> Create and
            manage your own events, big or small.
          </p>
          <p>
            <span className="font-semibold">Join the Community:</span> Meet
            people who share your love for music, culture, food, and fun.
          </p>
        </div>
      </div>
      <Image
        src={"/images/host-events/what-we-do.png"}
        alt="what we do"
        height={1500}
        width={1500}
      />
    </div>
  );
};

export default WhatWeDoSection;
