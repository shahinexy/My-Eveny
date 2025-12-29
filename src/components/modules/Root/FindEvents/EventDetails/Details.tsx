import TitleMD from "@/components/common/TitleMD";
import { CalendarDays, MapPin, UserPlus } from "lucide-react";
import Image from "next/image";
import OtherEvents from "./OtherEvents";

const Details = () => {
  return (
    <div className="md:space-y-10 space-y-6">
      <div className="space-y-4">
        <p className="text-lg font-medium">Monday, December 24, 2022</p>
        <TitleMD title="National Music Fest" />
        <div className="flex gap-5 items-center">
          <p className="text-xl font-semibold">By World of Music</p>
          <button
            className="md:px-6 px-4 py-2  bg-primary hover:bg-primary/80 duration-300 text-white 
         rounded-lg flex items-center gap-2"
          >
            <UserPlus size={20} /> Follow
          </button>
        </div>
      </div>

      {/* event details  */}
      <div className="md:space-y-6 space-y-4">
        <div className="bg-white text-black rounded-xl p-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum{" "}
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <div className="bg-white text-black p-3 rounded-full">
              <CalendarDays />
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Monday, December 24, 2022
              </h4>
              <p className="text-gray-500">18.00 - 23.00 PM (GMT +07:00)</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-white text-black p-3 rounded-full">
              <MapPin />
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Grand Park, New York City, US
              </h4>
              <p className="text-gray-500">
                Grand City St. 100, New York, United States.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl p-5">
          <h4 className="text-lg font-semibold border-b pb-3 border-black">
            Highlights
          </h4>
          <p>In person event</p>
          <p>10 Hours Duration</p>
          <p>Age Limit- 18+</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Tags</h4>
          <div className="flex gap-4 flex-wrap w-2/3 text-black text-sm">
            <p className="bg-white p-2 rounded-full">#afrobets</p>
            <p className="bg-white p-2 rounded-full">#afrobets</p>
            <p className="bg-white p-2 rounded-full">#afrobets</p>
            <p className="bg-white p-2 rounded-full">#afrobets</p>
          </div>
        </div>
      </div>

      {/* event place  */}
      <div className="space-y-6">
        <TitleMD title="View venue on Map" />
        <p>
          Want to explore by location? Switch to map view and find events right
          where you are.
        </p>
        <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902321211168!2d90.39945287441703!3d23.750885979469514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b8a2e7a1ef%3A0xa53a4b9d5a94c56!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1698154512345!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* organizer details  */}
      <div className="space-y-6">
        <div className="text-center">
          <TitleMD title="Organizer Details" />
        </div>
        <div className="space-y-5">
          <div className="bg-white p-5 rounded-xl flex flex-wrap justify-between gap-5 items-center">
            <div className="flex gap-5 items-center">
              <Image
                src={"/placeholders/image_placeholder.png"}
                alt="image"
                width={200}
                height={200}
                className="w-24 h-24 rounded-full"
              />

              <div className="space-y-2 text-black">
                <h4 className="text-lg font-semibold">World of Music</h4>
                <div className="flex flex-wrap md:gap-5 gap-3">
                  <div className="space-y-3">
                    <p className="text-gray-500">Followers</p>
                    <p className="font-medium">24k</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-500">Followers</p>
                    <p className="font-medium">24k</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-500">Events</p>
                    <p className="font-medium">281</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="md:px-6 px-4 py-2  bg-primary hover:bg-primary/80  duration-300 text-white 
         rounded-lg flex items-center gap-2"
            >
              <UserPlus size={20} /> Follow
            </button>
          </div>
        </div>
      </div>

      {/* other events  */}
      <OtherEvents />
    </div>
  );
};

export default Details;
