import React from "react";
import { X, CreditCard } from "lucide-react";

const quickAmounts = [25, 50, 100, 200];

const AddFundsModal = ({ isOpen, onClose, amount, setAmount, onAddFunds }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-black">Add Funds to Wallet</h2>

        <label className="text-sm text-gray-500 mb-1 block">
          Amount ($)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-4 text-black outline outline-gray-500
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <p className="text-sm text-gray-500 mb-2">Quick select:</p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {quickAmounts.map((val) => (
            <button
              key={val}
              onClick={() => setAmount(val)}
              className="py-2 rounded-lg bg-purple-50 text-purple-600 font-medium hover:bg-purple-100"
            >
              ${val}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200
        text-blue-600 rounded-xl px-4 py-3 mb-6 text-sm">
          <CreditCard size={16} />
          Payment will be processed securely via Stripe
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={() => onAddFunds(Number(amount))}
            disabled={!amount}
            className="flex-1 py-3 rounded-xl text-white
            bg-linear-to-r from-purple-600 to-pink-500 hover:opacity-90"
          >
            Add ${amount || 0}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFundsModal;
