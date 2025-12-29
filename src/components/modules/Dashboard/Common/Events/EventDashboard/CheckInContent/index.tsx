import CheckInContentTable from "./CheckInContent";

export const CheckInContent = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-4">Check-in</h1>
    <p className="text-gray-500">
      Manage ticket scanning and on-site attendee check-ins.
    </p>

    <div>
      <CheckInContentTable />
    </div>
  </div>
);
