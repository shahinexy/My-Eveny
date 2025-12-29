/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TitleMD from "@/components/common/TitleMD";
import AddTicketModal from "./AddTicketModal";
import { ChevronRight } from "lucide-react";

const EventForm2 = ({ formData, onBack }: { formData: any; onBack: any }) => {
  const connections = [1, 2, 3, 4];
  console.log(formData);
  return (
    <section>
      <div className="flex justify-between gap-2 items-center my-7">
        <TitleMD title="Tickets" />
        <AddTicketModal />
      </div>

      <div className="bg-white p-3 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 ">
              <TableHead className="text-base text-black font-medium py-4">
                Ticket Name
              </TableHead>
              <TableHead className="text-base text-black font-medium">
                Sold Ticket
              </TableHead>
              <TableHead className="text-base text-black font-medium">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {connections?.map((item: any) => (
              <TableRow key={item.id} className="border-gray-200 text-base">
                <TableCell className="py-6">
                  <p>
                    <p className="text-xl font-medium">
                      {item?.title || "General Admission"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Ends Sep 19, 2025 at 10:00 Am
                    </p>
                  </p>
                </TableCell>
                <TableCell>{item?.title || "Sold : 00/200"}</TableCell>
                <TableCell>{item?.region || "Free"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          onClick={onBack}
          className=" flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#C12274] to-[#2C096D] text-white"
        >
          Publish
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default EventForm2;
