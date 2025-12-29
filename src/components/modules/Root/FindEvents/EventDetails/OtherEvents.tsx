import EventCard from "@/components/common/EventCard";
import TitleMD from "@/components/common/TitleMD";

const OtherEvents = () => {
  const items = [1, 2, 3];
  return (
    <div className="md:space-y-16 space-y-10">
      <div className="space-y-6">
        <TitleMD title="Other events by world of music" />
        <div className="grid xl:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-3">
          {items?.map((item) => (
            <EventCard key={item} data={item} type="event"/>
          ))}
        </div>
        <p className="text-end">See All</p>
      </div>

      <div className="space-y-6">
        <TitleMD title="events by other organisers " />
        <div className="grid xl:grid-cols-3 md:grid-cols-2  grid-cols-1  gap-3">
          {items?.map((item) => (
            <EventCard key={item} data={item} type="place"/>
          ))}
        </div>
        <p className="text-end">See All</p>
      </div>
    </div>
  );
};

export default OtherEvents;
