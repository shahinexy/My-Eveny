/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import MySlider from "@/components/common/MySlider";

const CategorySlider = ({
  title,
  type,
  id,
}: {
  title: string;
  type?: string;
  id: string;
}) => {
  return (
    <section className="md:space-y-5 space-y-3 px-3">
      <h3 className="md:text-3xl text-2xl font-semibold">{title}</h3>
      <div>
        <MySlider id={id} />
      </div>
    </section>
  );
};

export default CategorySlider;
