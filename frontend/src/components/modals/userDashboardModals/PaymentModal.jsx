import React, { useState } from "react";
import { X, Wallet, CreditCard, Lock } from "lucide-react";
import api from "../../../api/axios";

const PaymentModal = ({ salon, service, onClose }) => {
  const [method, setMethod] = useState("wallet");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("10:00");
  const [loading, setLoading] = useState(false);

  if (!salon || !service) return null;

  const handlePay = async () => {
    setLoading(true);

    try {
      const bookingData = {
        serviceId: service._id,
        date,
        time,
        paymentMethod: method,
      };

      console.log("SENDING BOOKING:", bookingData);

      const res = await api.post("/bookings", bookingData);

      console.log("Booking Response:", res.data);

      alert("Booking successful");
      onClose();
    } catch (error) {
      console.error("BOOKING ERROR:", error.response?.data || error);
      alert(error.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b text-black">
          <h2 className="text-lg font-bold">Complete Payment</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-6">
          {/* Booking Summary */}
          <div className="bg-purple-50 rounded-xl p-4 text-black">
            <h3 className="font-semibold mb-3">Booking Summary</h3>
            <div className="flex justify-between text-sm mb-1">
              <span>Service</span>
              <span className="font-medium">{service.name}</span>
            </div>
            <div className="flex justify-between text-sm mb-3">
              <span>Price</span>
              <span className="font-medium">${service.price}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>${service.price}</span>
            </div>
          </div>

          <div className="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-600">
            <Lock className="text-blue-600 w-5 h-5 mt-1" />
            <p>
              <span className="font-semibold block mb-1">
                Secure Escrow Payment
              </span>
              Your payment will be held securely until service completion.
              <br />
              <span className="text-blue-600">
                90% goes to the salon, 10% platform commission.
              </span>
            </p>
          </div>

          {/* Date & Time */}
          <div className="flex text-gray-600 gap-3">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-1/2 border rounded-lg px-3 py-2"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-1/2 border rounded-lg px-3 py-2"
            />
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-3 text-black">
              Select Payment Method
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setMethod("wallet")}
                className={`border rounded-xl p-4 flex flex-col items-center gap-2
                ${
                  method === "wallet"
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200"
                }`}
              >
                <Wallet className="text-purple-600" />
                <span className="text-sm font-medium text-black">Wallet</span>
              </button>

              <button
                onClick={() => setMethod("card")}
                className={`border rounded-xl p-4 flex flex-col items-center gap-2
                ${
                  method === "card"
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200"
                }`}
              >
                <CreditCard className="text-purple-600" />
                <span className="text-sm font-medium text-black">Card</span>
              </button>
            </div>

            {method === "wallet" && (
              <div className="mt-4 text-gray-700 flex flex-row gap-3 text-sm">
                <div className="mt-2 p-3 border border-green-300 bg-green-50 text-green-700 rounded-2xl text-sm flex items-center gap-2">
                  √ Sufficient balance available. $100 will remain in your
                  wallet.
                </div>
              </div>
            )}

            {method === "card" && (
              <div className="mt-4 text-gray-700 flex flex-col gap-3 text-sm">
                {/* Card Number */}
                <div className="flex flex-col">
                  <label className="mb-1 font-medium">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="border outline-gray-400 rounded-lg p-2 text-base w-full"
                  />
                </div>

                {/* Expiry and CVV side by side */}
                <div className="flex gap-2">
                  <div className="flex-1 flex flex-col">
                    <label className="mb-1 font-medium">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border outline-gray-400 rounded-lg text-base p-2 w-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="mb-1 font-medium">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="border outline-gray-400 rounded-lg text-base p-2 w-full"
                    />
                  </div>
                </div>

                {/* Security Note */}
                <div className="flex items-center gap-1 text-gray-500 text-md">
                  <Lock size={16} />
                  Secured by Stripe - Your payment information is encrypted
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t p-5">
          <button
            onClick={onClose}
            className="w-1/2 text-red-400 border rounded-lg py-2"
          >
            Cancel
          </button>
          <button
            onClick={handlePay}
            disabled={loading}
            className="w-1/2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg py-2"
          >
            {loading ? "Processing..." : `Pay $${service.price}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
