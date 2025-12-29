import MyBtn from "@/components/common/MyBtn";

const AboutActionSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6">
      <h2 className="md:text-4xl text-2xl font-extrabold text-primary">
        Join the Choptop Movement
      </h2>
      <p className="text-lg font-medium">
        Whether you’re here to find events or host them, you’re in the right
        place.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        <MyBtn name="Launch Event" />
        <button className="md:px-6 px-4 py-3  bg-white text-black md:font-medium rounded-lg">
          Host an event
        </button>
      </div>
    </section>
  );
};

export default AboutActionSection;
