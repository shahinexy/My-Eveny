import TitleLG from "@/components/common/TitleLG";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <div className="md:space-y-8 space-y-4 text-center">
      <div className="space-y-4 text-center">
        <TitleLG title="Our Story" />
        <p className="text-gray-600">
          It all started with one simple idea — make it easy for anyone to find
          or host an event worth talking about.
        </p>
      </div>
      <p className="text-lg">
        We were tired of missing out. The secret gigs, the pop-up food markets,
        the cultural nights that slipped through our fingers. So we built
        Choptop — a space where event lovers and creators meet, connect, and
        make memories together. From Kampala to Nairobi, Dar es Salaam to
        Kigali, we’re building the ultimate event hub for East Africa and
        beyond.
      </p>

      <Image src={"/images/host-events/our-story.png"} alt="our story" height={1500} width={1500}/>
    </div>
  );
};

export default OurStorySection;
