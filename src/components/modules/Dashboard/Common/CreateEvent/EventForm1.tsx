/* eslint-disable @typescript-eslint/no-explicit-any */
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import RichTextEditor from "../Events/EventDashboard/EmailToAttendees/RichTextEditor";

const categoryOptions = [
  {
    label: "Workshop",
    value: "workshop",
    keyOption: "Workshop",
  },
  {
    label: "Conference",
    value: "conference",
    keyOption: "Conference",
  },
  {
    label: "Seminar",
    value: "seminar",
    keyOption: "Seminar",
  },
  {
    label: "Meetup",
    value: "meetup",
    keyOption: "Meetup",
  },
];

const defaultValue: any = {
  image: undefined,
  title: "",
  category: "",
  summary: "",
  date: "",
  startTime: "",
  endTime: "",
  location: "",
  highlights: ["highlight"],
  tags: ["tag"],
};

const EventForm1 = ({ formData, setStep }: { formData: any; setStep: any }) => {
  const [description, setDescription] = useState("");
  const methods = useForm({ defaultValues: defaultValue });
  const { control } = methods;

  const { append: appendHighlight, fields: highlightFields } = useFieldArray({
    control,
    name: "highlights",
  });

  const { append: appendTag, fields: tagFields } = useFieldArray({
    control,
    name: "tags",
  });

  const handleSubmit = (data: FieldValues) => {
    formData(data);
    setStep("tickets");
  };
  return (
    <div>
      <MyFormWrapper onSubmit={handleSubmit} className="space-y-6">
        <MyFormInput name="image" type="file" acceptType="image/*" />
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Event Overview</h3>

          <div className="space-y-4">
            <MyFormInput
              name="title"
              label="Event Title *"
              placeholder="Enter event title"
            />

            <MyFormSelect
              name="category"
              label="Event Category *"
              options={categoryOptions}
            />

            {/* <MyFormInput
              type="textarea"
              name="summary"
              label="Event Summary *"
              placeholder="Enter a short summary"
              rows={4}
            /> */}
            <p>Event Description</p>
            <RichTextEditor value={description} onChange={setDescription} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Date & Location</h3>

          <div className="space-y-4">
            <MyFormInput type="date" name="date" label="Date *" />

            <div className="grid grid-cols-2 gap-4">
              <MyFormInput type="time" name="startTime" label="Start Time *" />

              <MyFormInput type="time" name="endTime" label="End Time *" />
            </div>

            <MyFormInput
              name="location"
              label="Location"
              placeholder="Enter location"
            />

            <div className="flex justify-between gap-2 items-center">
              <p>Highlights</p>
              <button
                onClick={() => appendHighlight("highlight")}
                type="button"
                className="border border-primary rounded-full px-3 py-1 text-xs"
              >
                Add More
              </button>
            </div>

            {highlightFields.map((field, idx) => (
              <div key={field.id}>
                <MyFormInput
                  name={`highlights[${idx}]`}
                  placeholder={`Highlight ${idx + 1}`}
                />
              </div>
            ))}

            <div className="flex justify-between gap-2 items-center">
              <p>Tags</p>
              <button
                onClick={() => appendTag("tag")}
                type="button"
                className="border border-primary rounded-full px-3 py-1 text-xs"
              >
                Add More
              </button>
            </div>

            {tagFields.map((field, idx) => (
              <div key={field.id}>
                <MyFormInput
                  name={`tags[${idx}]`}
                  placeholder={`Tag ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-[#C12274] to-[#2C096D] text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default EventForm1;
