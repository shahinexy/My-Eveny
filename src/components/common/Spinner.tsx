import React from "react";
import { IoRestaurant } from "react-icons/io5";

const Spinner = () => {
  return (
    <div className="md:py-10 py-5 flex justify-center items-center">
      <div className="animate-spin">
        <IoRestaurant className="text-primary text-4xl" />
      </div>
    </div>
  );
};

export default Spinner;
