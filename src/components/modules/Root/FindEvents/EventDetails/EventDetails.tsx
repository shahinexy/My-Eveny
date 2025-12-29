import MyContainer from "@/components/common/MyContainer";
import Image from "next/image";
import Details from "./Details";
import VirtualTicket from "./VirtualTicket";
import { FaRegHeart } from "react-icons/fa";

const EventDetails = () => {
  return (
    <div>
      <Image
        src={"/images/venue.jpg"}
        alt="venue details"
        height={2000}
        width={2000}
        className="w-full md:h-full h-56"
      />
      <MyContainer>
        <div className="w-full flex md:flex-row flex-col-reverse gap-6 md:my-12 my-8">
          <div className="md:w-3/4">
            <Details />
          </div>
          <div className="md:w-1/4 rounded-xl md:sticky top-8 self-start">
            <div className="flex justify-end mb-4">
              {" "}
              <FaRegHeart className="text-2xl text-primary cursor-pointer" />
            </div>
            <VirtualTicket />
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default EventDetails;
