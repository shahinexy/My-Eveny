import TitleLG from "@/components/common/TitleLG";
import Image from "next/image";

const WorkSection = () => {
  return (
    <section className="md:space-y-8 space-y-6">
      <div className="text-center clear-start md:space-y-6 space-y-4">
        <TitleLG title="How it Works" />
        <p>
          Whether you’re looking for the perfect night out or hosting your own
          event, <br /> Choptop makes it effortless.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="border rounded-xl md:p-4 p-3 space-y-6">
          <Image
            src={"/images/event.png"}
            alt="event"
            width={300}
            height={300}
            className="md:w-80 w-64 md:h-80 h-64 rounded-xl mx-auto"
          />

          <div className="space-y-3">
            <p className="text-sm text-primary">Step 1</p>
            <h4 className="md:text-2xl text-xl font-medium">Discover Events</h4>
            <p className="text-sm text-gray-500">
              From live music and rooftop parties to food festivals and cultural
              shows — explore events happening near you and beyond.
            </p>
          </div>
        </div>
        <div className="border rounded-xl md:p-4 p-3 space-y-6">
          <Image
            src={"/images/friend.png"}
            alt="event"
            width={300}
            height={300}
            className="md:w-80 w-64 md:h-80 h-64 rounded-xl mx-auto"
          />

          <div className="space-y-3">
            <p className="text-sm text-primary">Step 2</p>
            <h4 className="md:text-2xl text-xl font-medium">
              Join with Friends
            </h4>
            <p className="text-sm text-gray-500">
              Invite your friends, book your spots, and make memories that last.
              Choptop keeps everyone on the same page.
            </p>
          </div>
        </div>
        <div className="border rounded-xl md:p-4 p-3 space-y-6">
          <Image
            src={"/images/host.png"}
            alt="event"
            width={300}
            height={300}
            className="md:w-80 w-64 md:h-80 h-64 rounded-xl mx-auto"
          />

          <div className="space-y-3">
            <p className="text-sm text-primary">Step 3</p>
            <h4 className="md:text-2xl text-xl font-medium">Host Yours</h4>
            <p className="text-sm text-gray-500">
              Create and promote your own event in minutes. Sell tickets, share
              invites, and watch your guest list grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
