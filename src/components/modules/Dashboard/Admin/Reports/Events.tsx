import ReportCard from "./ReportCard";


interface Report {
  id: string;
  name: string;
  avatar: string;
  reportType: string;
  event: string;
  description: string;
}

const reports: Report[] = [
  {
    id: "1",
    name: "Wade Warren",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wade1",
    reportType: "Rude behavior",
    event: "National Music Fest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a",
  },
  {
    id: "2",
    name: "Wade Warren",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wade2",
    reportType: "Rude behavior",
    event: "National Music Fest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a",
  },
  {
    id: "3",
    name: "Wade Warren",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wade3",
    reportType: "Rude behavior",
    event: "National Music Fest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a",
  },
  {
    id: "4",
    name: "Wade Warren",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wade4",
    reportType: "Rude behavior",
    event: "National Music Fest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a",
  },
  {
    id: "5",
    name: "Wade Warren",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wade5",
    reportType: "Rude behavior",
    event: "National Music Fest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen ">
      <div className="mx-4 px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-black">
          Incident Reports
        </h1>

        <div className="space-y-4">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </div>
  );
}
