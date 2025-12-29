import PendingEventsTable from "./PendingEventsTable";

const PendingEvents = () => {
  return (
    <div className="px-6">
      <div className="mb-10">
        <h1 className="text-[36px] font-semibold">Pending Events</h1>
        <p>Here is your analytics</p>
      </div>

      <PendingEventsTable />
    </div>
  );
};

export default PendingEvents;
