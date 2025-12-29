import MyBtn from "@/components/common/MyBtn";

const ActionSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6">
      <h2 className="md:text-4xl text-2xl font-extrabold text-primary">
        The City is Waiting. Are You Ready?
      </h2>
      <p className="text-lg font-medium">
        Press publish and watch your event come to life.
      </p>

      <MyBtn name="Launch Event" />
    </section>
  );
};

export default ActionSection;
