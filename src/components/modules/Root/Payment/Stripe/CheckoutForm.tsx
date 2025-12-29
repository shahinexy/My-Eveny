/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import {
  CardCvcElement,
  // useElements,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
// import { paymentData } from "./StripeCheckout";

// interface PaymentIntentResponse {
//   clientSecret: string;
//   paymentIntentId: string;
// }

const CheckoutForm = () => {
  const stripe = useStripe();
  // const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [payment] = useInitiatePaymentMutation();

  // const [afterPayment] = useConfirmPaymentMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    // event.preventDefault();
    // setError(null);
    // if (!stripe || !elements) {
    //   setError("Stripe has not loaded. Please try again.");
    //   return;
    // }
    // setLoading(true);
    // try {
    //   const res = await payment({
    //     courseId: paymentData.id,
    //     paymentMethod: "stripe",
    //   }).unwrap();
    //   if (!res) {
    //     throw new Error("Failed to create PaymentIntent");
    //   }
    //   const { clientSecret, paymentIntentId }: PaymentIntentResponse =
    //     await res?.data;
    //   if (!clientSecret) {
    //     throw new Error("Invalid response from server");
    //   }
    //   const result = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardNumberElement)!,
    //     },
    //   });
    //   if (result.error) {
    //     setError(result.error.message || "Payment failed");
    //   } else if (result.paymentIntent?.status === "succeeded") {
    //     await afterPayment({
    //       courseId: paymentData.id,
    //       transactionId: result.paymentIntent.id,
    //       paymentMethod: "stripe",
    //       payerId: paymentIntentId,
    //     }).unwrap();
    //     window.location.href = "/payment-success";
    //   }
    // } catch (err) {
    //   const errorMessage =
    //     typeof err === "object" &&
    //     err !== null &&
    //     "data" in err &&
    //     typeof (err as any).data?.message === "string"
    //       ? (err as any).data.message
    //       : err instanceof Error
    //       ? err.message
    //       : "An error occurred";
    //   setError(errorMessage);
    // } finally {
    //   setLoading(false);
    // }
  };

  const elementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#000000",
        iconColor: "#FFC300",
        "::placeholder": {
          color: "#888",
        },
      },
      invalid: {
        color: "#ff4d4f",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl">
      {error && (
        <div className="text-red-500 text-sm bg-white/70 px-3 rounded-lg">
          {error}
        </div>
      )}

      <label className="block mb-1">Card Number</label>
      <div className="p-3 border border-gray-700 rounded-lg bg-white text-black">
        <CardNumberElement options={elementOptions} />
      </div>

      <label className="block mb-1">Expiry Date</label>
      <div className="p-3 border border-gray-700 rounded-lg bg-white text-black">
        <CardExpiryElement options={elementOptions} />
      </div>

      <label className="block mb-1">CVC</label>
      <div className="p-3 border border-gray-700 rounded-lg bg-white text-black">
        <CardCvcElement options={elementOptions} />
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-3 px-4 rounded-xl font-medium text-white ${
          loading ? "bg-gray-500" : "bg-primary hover:bg-primary/80"
        }`}
      >
        {loading ? "Processing..." : `Pay $20`}
      </button>
    </form>
  );
};

export default CheckoutForm;
