import React from "react";
import { X } from "lucide-react";

const SalonDetailsModal = ({ salon, onClose, onRemove, onToggleStatus }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative transform transition-all scale-95 animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Salon Details
        </h2>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Details Section */}
        <div className="space-y-3 text-gray-700 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Name:</span>
            <span>{salon.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Owner:</span>
            <span>{salon.owner}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{salon.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Phone:</span>
            <span>{salon.phone}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Address:</span>
            <span>{salon.address}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Status:</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                salon.status === "active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {salon.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Earnings:</span>
            <span className="font-semibold text-gray-900">${salon.earnings}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Bookings:</span>
            <span>{salon.bookings}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => onRemove(salon.id)}
            className="px-5 py-2 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-200 transition-all shadow-sm hover:shadow-md"
          >
            Remove
          </button>

          <button
            onClick={() => onToggleStatus(salon.id)}
            className={`px-5 py-2 rounded-xl font-medium text-white transition-all shadow-sm hover:shadow-md ${
              salon.status === "active"
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {salon.status === "active" ? "Freeze" : "Activate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalonDetailsModal;
