import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_PUBLIC_STRIPE_KEY"); // Stripe 공개 키

const PaymentForm = ({ amount }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const stripe = await stripePromise;

    // 서버에서 결제 세션 생성 요청
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const sessionId = await response.json();

    // Stripe Checkout으로 리디렉션
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handlePayment}>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        {loading
          ? "결제 처리 중..."
          : `투자하기 (${amount.toLocaleString()} 원)`}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default PaymentForm;
