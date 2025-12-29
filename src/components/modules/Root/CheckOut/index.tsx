import MyBtn from "@/components/common/MyBtn";
import MyContainer from "@/components/common/MyContainer";
import TitleMD from "@/components/common/TitleMD";
import { CalendarDays, MapPin, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CheckOut = () => {
  const items = [1, 2, 3];
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
        <div className="md:my-20 my-10">
          <div className="md:space-y-10 space-y-5">
            <TitleMD title="National Music Fest" />
            <div className="space-y-6 ">
              <div className="flex gap-3 items-center">
                <div className="bg-white p-3 rounded-full text-black">
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
            </div>

            <div className="grid md:grid-cols-2 md:gap-8 gap-6">
              <div className="space-y-4">
                {items?.map((item) => (
                  <div
                    key={item}
                    className="bg-white text-black p-4 flex justify-between flex-wrap items-center rounded-xl md:gap-2 gap-5"
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Free Admission</h3>
                      <div>
                        <p className="text-gray-600">From UGX175.26</p>
                        <p className="text-gray-600">
                          Sales Ends : Monday, December 24, 2022
                        </p>
                      </div>
                    </div>

                    <div className="inline-block">
                      <div className="bg-gray-200 flex gap-3 items-center p-2 rounded-full">
                        <button className="bg-primary rounded-full p-2 text-white">
                          <Minus size={25} />
                        </button>
                        <p className="text-xl font-semibold">3</p>
                        <button className="bg-primary rounded-full p-2 text-white">
                          <Plus size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <div className="md:w-4/5 w-full bg-white text-black md:p-6 p-3 md:space-y-6 space-y-4 rounded-xl">
                  <h3 className="text-center text-xl font-semibold">
                    Order Summary
                  </h3>
                  <h2 className="md:text-3xl text-2xl">1x Tier 2 Ticket</h2>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2 text-gray-600">
                      <p>Sub total:</p>
                      <p>UGX 40</p>
                    </div>
                    <div className="flex justify-between items-center gap-2 text-gray-600">
                      <p>Fees:</p>
                      <p>UGX 40</p>
                    </div>
                    <div className="flex justify-between items-center gap-2 text-gray-600">
                      <p>Sales Tax:</p>
                      <p>UGX 40</p>
                    </div>

                    <div className="border-t text-end">
                      <p>Total: UGX140.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link href={`/payment`}>
                <MyBtn name={`Checkout - UGX 140.00`} width="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default CheckOut;
