"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const AddTicketModal = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: FieldValues) => {
    console.log("Ticket Created:", data);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-gradient-to-l to-[#2C096D] from-[#C12274] text-white rounded-full px-6 py-2">
          + Add Ticket
        </DialogTrigger>

        <DialogContent className="bg-white text-black max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">Add Ticket</DialogTitle>
            <DialogDescription>
              <MyFormWrapper
                onSubmit={handleSubmit}
                className="space-y-2 pt-4 text-black"
              >
                <MyFormInput
                  name="ticketName"
                  label="Ticket Name*"
                  placeholder="Enter ticket name"
                />

                <MyFormInput
                  name="quantity"
                  label="Quantity*"
                  type="number"
                  placeholder="Enter ticket quantity"
                />

                <MyFormInput
                  name="price"
                  label="Price*"
                  type="number"
                  placeholder="Enter ticket price"
                />

                <div className="grid grid-cols-2 gap-4">
                  <MyFormInput
                    name="salesStartDate"
                    type="date"
                    label="Sales Start Date*"
                  />
                  <MyFormInput
                    name="salesStartTime"
                    type="time"
                    label="Sales Start Time*"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <MyFormInput
                    name="salesEndDate"
                    type="date"
                    label="Sales End Date*"
                  />
                  <MyFormInput
                    name="salesEndTime"
                    type="time"
                    label="Sales End Time*"
                  />
                </div>

                <div className="flex justify-between pt-4 gap-5">
                  <button
                    type="button"
                    className="flex-1 py-3 rounded-full border border-gray-400 text-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#C12274] to-[#2C096D] text-white"
                  >
                    Save
                  </button>
                </div>
              </MyFormWrapper>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTicketModal;
