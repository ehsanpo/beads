import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../components/CheckoutForm";
import { OrderDetails } from "../types/order";
import { BraceletBead } from "../types/bead";
import { PriceCalculator } from "../components/PriceCalculator";
import { BraceletPreview } from "../components/BraceletPreview";
import { beads } from "../data/beads";

const stripePromise = loadStripe("your_publishable_key"); // Replace with your Stripe publishable key

export function CheckoutPage() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (orderDetails: OrderDetails) => {
    setIsProcessing(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");

      // Here you would typically make an API call to your backend to create a payment intent
      // For demo purposes, we'll just simulate the redirect
      console.log("Processing order:", { orderDetails, beads });

      // Simulate payment processing
      setTimeout(() => {
        navigate("/success");
      }, 2000);
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <CheckoutForm onSubmit={handleSubmit} />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <BraceletPreview beads={beads} onRemoveBead={() => {}} />
              <div className="mt-6">
                <PriceCalculator beads={beads} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
