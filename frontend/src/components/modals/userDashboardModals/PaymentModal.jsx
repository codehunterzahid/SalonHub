import React, { useState } from "react";
import { X, Wallet, CreditCard, Lock } from "lucide-react";

const PaymentModal = ({ service, onClose, onPay }) => {
  const [method, setMethod] = useState("wallet");

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">

        
        <div className="flex justify-between  bg-white items-center p-5 border-b border-gray-200 text-black">
        
          <h2 className="text-lg font-bold">Complete Payment</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-5 space-y-6">

          <div className="bg-purple-50 rounded-xl p-4 text-black">
            <h3 className="font-semibold mb-3">Booking Summary</h3>

            <div className="flex justify-between text-sm mb-1">
              <span>Service</span>
              <span className="font-medium">{service.name}</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Service Price</span>
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
              <span className="font-semibold block mb-1">Secure Escrow Payment</span>
              Your payment will be held securely until service completion.
              <br />
              <span className="text-blue-600">
                90% goes to the salon, 10% platform commission.
              </span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-black">Select Payment Method</h3>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setMethod("wallet")}
                className={`border rounded-xl p-4 flex flex-col items-center gap-2
                ${method === "wallet"
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200"}`}
              >
                <Wallet className="text-purple-600" />
                <span className="text-sm font-medium text-black">Wallet</span>
              </button>

              <button
                onClick={() => setMethod("card")}
                className={`border rounded-xl p-4 flex flex-col items-center gap-2
                ${method === "card"
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200"}`}
              >
                <CreditCard className="text-purple-600" />
                <span className="text-sm font-medium text-black">Card</span>
              </button>
            </div>

            {method === "card" && (
              <div className="mt-4 text-sm text-gray-500">
                Stripe Card Element will be here
              </div>
            )}
          </div>
        </div>

        <div
         className="flex gap-3 border p-5 border-t border-gray-300  text-black">
          <button
            onClick={onClose}
            className="w-1/2 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={() => onPay(method)}
            className="w-1/2 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg"
          >
            Pay ${service.price}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;
