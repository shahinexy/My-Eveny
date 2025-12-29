"use client";
import MyContainer from "@/components/common/MyContainer";
import { Circle } from "lucide-react";
import { useState } from "react";
import StripeCheckout from "./Stripe/StripeCheckout";

const Payment = () => {
  const [payType, setPayType] = useState<"stripe" | "paypal">("stripe");
  return (
    <div className="md:mb-32 mb-12 md:mt-40 mt-24">
      <MyContainer>
        <div className="grid md:grid-cols-2 md:gap-20 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Billing Details</h3>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">National Music Fest</h4>

              <div className="space-y-2">
                <p>Payment Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between gap-2 text-gray-500">
                    <p>Course Price</p>
                    <p>70$</p>
                  </div>
                  <div className="flex justify-between gap-2 text-gray-500">
                    <p>Discount (promo)</p>
                    <p>5$</p>
                  </div>
                </div>
                <div className="border-t py-3">
                  <div className="flex justify-between gap-2 text-lg">
                    <p>total paytment</p>
                    <p>65$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:space-y-10 space-y-5">
            <h3 className="text-2xl font-semibold">Payment Information</h3>

            <div className="flex gap-6">
              <div
                onClick={() => setPayType("stripe")}
                className={`w-20 flex flex-col items-center justify-center gap-1 md:py-2 py-1 rounded-lg cursor-pointer ${
                  payType === "stripe"
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#635BFF"
                    d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305h.003z"
                  />
                </svg>

                <p>Stripe</p>
                <Circle size={20} />
              </div>

              <div
                onClick={() => setPayType("paypal")}
                className={`w-20 flex flex-col items-center justify-center gap-1 md:py-2 py-1 rounded-lg cursor-pointer ${
                  payType === "paypal"
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 302"
                >
                  <path
                    fill="#27346A"
                    d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477c-1.556-.824-1.556-.824 0 0c3.671-23.407-.025-39.34-12.686-53.765"
                  />
                  <path
                    fill="#27346A"
                    d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182a89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74Z"
                  />
                  <path
                    fill="#2790C3"
                    d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477Z"
                  />
                  <path
                    fill="#1F264F"
                    d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49a109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149a11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477c-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865"
                  />
                </svg>

                <p>Paypal</p>
                <Circle size={20} />
              </div>
            </div>

            <div className="">
              <StripeCheckout />
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Payment;
