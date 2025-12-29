import MyContainer from "@/components/common/MyContainer";
import TitleMD from "@/components/common/TitleMD";
import { CalendarDays, Clock4, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Place = () => {
  return (
    <section>
      <Image
        src={"/images/venue.jpg"}
        alt="venue details"
        height={2000}
        width={2000}
        className="w-full md:h-full h-56"
      />

      <MyContainer>
        <div className="md:my-20 my-10 md:space-y-10 space-y-5">
          <TitleMD title="National Music Fest" />

          <div className="flex gap-3 items-center">
            <div className="bg-white p-3 rounded-full text-black">
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

          <div className="bg-white rounded-xl p-5 text-black">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum{" "}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 space-y-2 text-black">
            <h4 className="text-lg font-semibold pb-3">Availabilty</h4>
            <div className="flex gap-6 flex-wrap">
              <p className="flex gap-2 items-center">
                <CalendarDays size={16} /> Thursday - Friday
              </p>
              <p>|</p>
              <p className="flex gap-2 items-center">
                <Clock4 size={16} /> 10am - 5 pm
              </p>
            </div>
            <div className="flex gap-6 flex-wrap">
              <p className="flex gap-2 items-center">
                <CalendarDays size={16} /> Sunday- Thursday
              </p>
              <p>|</p>
              <p className="flex gap-2 items-center">
                <Clock4 size={16} /> 10am - 12 am
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 text-black">
            <h4 className="text-lg font-semibold border-b pb-3 border-black">
              Highlights
            </h4>
            <p>In person event</p>
            <p>10 Hours Duration</p>
            <p>Age Limit- 18+</p>
          </div>

          <div className="space-y-3 text-black">
            <h4 className="text-lg font-semibold">Tags</h4>
            <div className="flex gap-4 flex-wrap text-xs">
              <p className="bg-white p-2 rounded-full">#afrobets</p>
              <p className="bg-white p-2 rounded-full">#afrobets</p>
              <p className="bg-white p-2 rounded-full">#afrobets</p>
              <p className="bg-white p-2 rounded-full">#afrobets</p>
            </div>
          </div>

          <div className="w-full flex justify-center gap-6">
            <Link
              href={"/"}
              className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </Link>
            <Link
              href={"/"}
              className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                />
              </svg>
            </Link>
            <Link
              href={"/"}
              className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#000000"
                  d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z"
                />
              </svg>
            </Link>
          </div>

          <div className="space-y-6 text-center">
            <TitleMD title="View Place on Map" />
            <p>
              Want to explore by location? Switch to map view and find events
              right where you are.
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

            <div className="flex flex-wrap md:gap-6 gap-4">
              <button className="flex-1 py-3 border rounded-full text-lg font-medium">
                Add a review
              </button>
              <button className="flex-1 py-3 border rounded-full text-lg font-medium">
                Report Venue
              </button>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Place;
