"use client";
import MyContainer from "@/components/common/MyContainer";
import ContactHeroSection from "./ContactHeroSection";
import TitleLG from "@/components/common/TitleLG";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { FieldValues } from "react-hook-form";
import MyFormInput from "@/components/form/MyFormInput";
import MyBtn from "@/components/common/MyBtn";
import { useTheme } from "next-themes";

const Contact = () => {
  const { resolvedTheme } = useTheme();
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <section>
      <ContactHeroSection />
      <div
        className={`${
          resolvedTheme === "light"
            ? "bg-gradient-to-b from-[#fdd394] to-transparent"
            : "bg-gradient-to-b from-[#0b0721] to-transparent"
        }  md:py-20 py-14`}
      >
        <MyContainer>
          <div className="text-center md:mb-12 mb-8">
            <TitleLG title="Contact Us" />
          </div>

          <div className="flex md:flex-row flex-col md:gap-12 gap-6">
            <div
              className={`${
                resolvedTheme === "light" ? "bg-white" : "bg-black"
              } border rounded-xl md:p-8 p-3 space-y-5 flex-1`}
            >
              <p className="flex gap-2 items-center border-b border-gray-600 pb-4">
                <Mail className="text-primary" size={18} />{" "}
                example@teamwebflow.com
              </p>
              <p className="flex gap-2 items-center border-b border-gray-600 pb-4">
                <MapPin className="text-primary" size={18} /> 4074 Ebert Summit
                Suite 375
              </p>
              <p className="flex gap-2 items-center">
                <PhoneCall className="text-primary" size={18} /> +44 123 654
                7890
              </p>
            </div>

            {/* Center divider */}
            <div className="hidden md:flex items-stretch">
              <div
                className={`w-[1px] ${
                  resolvedTheme === "light" ? "bg-black" : "bg-white"
                }`}
              ></div>
            </div>

            <div className="space-y-5 flex-1 ">
              <MyFormWrapper onSubmit={handleSubmit}>
                <MyFormInput
                  name="name"
                  label="Your Name"
                  inputClassName={`border-b border-r border-t-0 border-l-0  rounded-none  focus:ring-0 ${
                    resolvedTheme === "light"
                      ? "!border-black"
                      : "!border-white"
                  }`}
                />
                <MyFormInput
                  name="email"
                  type="email"
                  label="Your Email"
                  inputClassName={`border-b border-r border-t-0 border-l-0 !border-black rounded-none  focus:ring-0 ${
                    resolvedTheme === "light"
                      ? "!border-black"
                      : "!border-white"
                  }`}
                />
                <MyFormInput
                  name="description"
                  type="textarea"
                  rows={3}
                  label="Description"
                  inputClassName={`border-b border-r-0 border-t-0 border-l-0 rounded-none  focus:ring-0 ${
                    resolvedTheme === "light"
                      ? "!border-black"
                      : "!border-white"
                  }`}
                />
                <MyBtn name="Send a Message" width="w-full" />
              </MyFormWrapper>
            </div>
          </div>
        </MyContainer>
      </div>
    </section>
  );
};

export default Contact;
