import EmailToAttendeesTable from "./EmailToAttendees";

export const EmailsContent = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-4">
      Emails to Attendees
    </h1>
    <p className="text-gray-500">
      Send announcements or reminders to your attendees.
    </p>

    <EmailToAttendeesTable />
  </div>
);
