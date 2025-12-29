import { Link2 } from "lucide-react";
import Image from "next/image";
import SalesByTicketTable from ".";
import RecentOrdersTable from "./RecentOrdersTable";

export const DashboardContent = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Event Dashboard</h1>
      <p className="text-sm text-gray-500">Sat, Sep 20, 2025, 10:00 AM</p>
    </div>

    <div className="bg-white border rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-gray-700">
        <Link2 className="w-4 h-4 text-purple-600" />
        <span>https://www.eventbrite.co.nz/e/Worker-Workshop</span>
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-50">
          Copy Link
        </button>
        <button className="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-50">
          Share Link
        </button>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white border rounded-lg p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-900 font-semibold  text-2xl">Ticket Sold</p>
            <h2 className="text-2xl mt-4 font-semibold">
              <span className="font-semibold text-[48px]">00</span> / 200
            </h2>
            <p className="text-xs text-purple-600">Open page views report</p>
          </div>
          <div>
            <Image
              src="/images/Frame (2).png"
              alt="Decorative wave accent"
              width={100}
              height={100}
              className="object-contain w-72 h-52"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-900 font-semibold text-2xl">
              Total Event View
            </p>
            <h2 className="text-[48px] font-semibold">00</h2>
            <p className="text-xs text-purple-600">Open page views report</p>
          </div>
          <div>
            <Image
              src="/images/Frame (3).png"
              alt="Decorative wave accent"
              width={100}
              height={100}
              className="object-contain w-72 h-52"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <SalesByTicketTable />
      </div>

      <div>
        <RecentOrdersTable />
      </div>
    </div>
  </div>
);
