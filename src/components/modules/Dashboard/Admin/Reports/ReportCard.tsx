import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Report {
  id: string;
  name: string;
  avatar: string;
  reportType: string;
  event: string;
  description: string;
}

export default function ReportCard({ report }: { report: Report }) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-black text-black bg-card p-6 transition-shadow hover:shadow-md bg-white">
      {/* Avatar */}
      <Image
        src="/images/boy.png"
        alt={report.name}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold">{report.name}</h3>

        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
          <p>
            <span className="font-medium">Report:</span> {report.reportType}
          </p>
          <p>
            <span className="font-medium">Event:</span> {report.event}
          </p>
        </div>

        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          <span className="font-medium">Description:</span> {report.description}
        </p>
      </div>

      {/* Action Button */}
      <Link href={`/admin/reports/${report.id}`}>
        <Button
          variant="outline"
          className="flex-shrink-0 border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700 bg-transparent"
        >
          View Details
        </Button>
      </Link>
    </div>
  );
}
