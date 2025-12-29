/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft } from "lucide-react";

import React, { useState } from "react";
import EventForm1 from "./EventForm1";
import EventForm2 from "./EventForm2";

const steps = [
  {
    key: "create",
    label: "Build event page",
    description:
      "Add all of your event details and let attendees know what to expect",
  },
  {
    key: "tickets",
    label: "Add Ticket",
    description: "Set up ticket types and pricing",
  },
];

const CreateEvent = ({ onBack }: any) => {
  const [firstForm, setFirstForm] = useState(null);
  const [secondForm, setSecondForm] = useState(null);
  const [step, setStep] = useState("create");

  console.log(firstForm);
  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-6">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          onClick={onBack}
        >
          <ChevronLeft className="w-5 h-5" />
          Back to events
        </button>

        <div className="grid grid-cols-4 gap-6">
          {/* side bar  */}
          <div className="col-span-1 bg-white rounded-lg shadow-sm ">
            <div className="mb-6 p-6">
              <h2 className="text-xl font-semibold mb-2">{"Event Title"}</h2>
              <p className="text-sm text-gray-500">
                {"Sat, Sep 20, 2025, 10:00 AM"}
              </p>
              <div className="flex gap-5 mt-3">
                <button className="px-4 py-1.5 border-2 border-purple-600 text-purple-600 rounded-full text-sm font-medium">
                  Draft
                </button>
                {/* {step === "tickets" && (
                  <Link
                    href={"/find-events/123456789"}
                    className="px-4 py-1.5 border-2 border-purple-600  text-purple-700 rounded-full text-sm font-medium"
                  >
                    Preview
                  </Link>
                )} */}
              </div>
            </div>

            <div className="font-medium text-gray-700 px-6 mb-2">Steps</div>
            {steps.map((item) => (
              <div
                key={item.key}
                className={`flex gap-2 border-b border-gray-200 py-3 px-6   ${
                  item.key === step && "bg-gray-100"
                }`}
              >
                <div className="inline-block mt-1">
                  <div
                    className={`border-2 border-gray-300 w-5 h-5 rounded-full flex items-center justify-center ${
                      firstForm && item.key === "create"
                        ? "bg-gradient-to-l to-[#2C096D] from-[#C12274]"
                        : secondForm && item.key === "tickets"
                        ? "bg-gradient-to-l to-[#2C096D] from-[#C12274]"
                        : ""
                    }`}
                  ></div>
                </div>
                <div className="space-y-1">
                  <p className={` text-gray-900 font-medium`}>{item.label}</p>
                  <p
                    className={`text-sm ${
                      item.key === step ? "inline-block" : "hidden"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-3">
            <div className="max-w-3xl mx-auto">
              {step === "create" && (
                <EventForm1 formData={setFirstForm} setStep={setStep} />
              )}
              {step === "tickets" && (
                <EventForm2 formData={setFirstForm} onBack={onBack} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
