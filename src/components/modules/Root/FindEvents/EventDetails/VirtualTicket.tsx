import MyBtn from "@/components/common/MyBtn";
import Image from "next/image";
import Link from "next/link";

const VirtualTicket = () => {
  return (
    <div className=" w-full bg-white p-2 lg:space-y-14 space-y-8  rounded-xl overflow-hidden">
      <Image
        src={"/images/venue.jpg"}
        alt="event ticket"
        width={500}
        height={500}
        className="w-full h-60 rounded-xl"
      />

      <div className="border-t border-dashed border-black relative">
        <div className="bg-background h-12 w-12 rounded-full absolute -top-6 -left-9"></div>
        <div className="bg-background h-12 w-12 rounded-full absolute -top-6 -right-9"></div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="space-y-1 text-center text-black">
          <h2 className="lg:text-3xl text-2xl font-medium">
            From <span className="font-bold">UGX175.00</span>
          </h2>
          <p className="text-lg font-semibold">Monday, December 24, 2022</p>
          <p className="text-gray-500">18.00 - 23.00 PM (GMT +07:00)</p>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex gap-3">
              <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                Dj
              </button>
              <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                Food
              </button>
              <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                Afrobeats
              </button>
            </div>
          </div>
        </div>
        <Link href={`/check-out/1234`} className="w-full">
          <MyBtn name="Get Tickets" width="w-full" />
        </Link>
      </div>
    </div>
  );
};

export default VirtualTicket;
