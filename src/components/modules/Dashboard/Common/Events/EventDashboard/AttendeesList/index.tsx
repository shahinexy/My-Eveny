import AttendeesListTable from "./AttendeesListTable";

export const AttendeesContent = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-4">
      Attendees List
    </h1>
    <p className="text-gray-500">View and manage your event attendees.</p>

    <div>
      <AttendeesListTable />
    </div>
  </div>
);
