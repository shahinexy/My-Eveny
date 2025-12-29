import React from "react";

const MyBtn = ({
  name,
  width = "w-auto",
}: {
  name: string;
  width?: string;
}) => {
  return (
    <button
      className={`md:px-6 px-4 py-3  bg-primary hover:bg-primary/90  duration-300 text-white md:font-medium rounded-lg ${width}`}
    >
      {name}
    </button>
  );
};

export default MyBtn;
