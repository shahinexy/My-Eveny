"use client";
import { useForm } from "react-hook-form";
import TitleLG from "./TitleLG";

type FormData = {
  search: string;
};

const SubscribeSection = () => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Search data:", data);
  };

  return (
    <section className="flex flex-col items-center justify-center md:gap-7 gap-6">
      <div className="space-y-2 text-center">
        <p>Subscribe our Newsletter</p>
        <TitleLG title="Stay in the know" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex sm:flex-row flex-col items-center sm:gap-2 gap-5 bg-white rounded-lg p-2 border border-primary"
      >
        <div className="flex items-center gap-2 pl-4">
          <input
            {...register("search")}
            type="email"
            placeholder="Enter Your Email"
            className="outline-none text-black bg-white sm:text-start text-center"
          />
        </div>

        <button
          type="submit"
          className="w-full text-center bg-primary hover:bg-primary/80 duration-300 text-white px-6 sm:py-4 py-2 rounded-lg"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscribeSection;
