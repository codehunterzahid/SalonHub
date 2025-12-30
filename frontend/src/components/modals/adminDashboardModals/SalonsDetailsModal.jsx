import React from "react";
import { X } from "lucide-react";

const SalonDetailsModal = ({
  salon,
  onClose,
  onRemove,
  onToggleStatus,
}) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold text-black mb-4">
          Salon Details
        </h2>

        <div className="space-y-2 text-sm p-2 text-black">
          <p><span className="font-medium text-black">Name:</span> {salon.name}</p>
          <p><span className="font-medium text-black">Owner:</span> {salon.owner}</p>
          <p><span className="font-medium text-black">Email:</span> {salon.email}</p>
          <p><span className="font-medium text-black">Phone:</span> {salon.phone}</p>
          <p><span className="font-medium text-black">Address:</span> {salon.address}</p>
          <p><span className="font-medium text-black">Status:</span> {salon.status}</p>
          <p><span className="font-medium text-black">Earnings:</span> ${salon.earnings}</p>
          <p><span className="font-medium text-black">Bookings:</span> {salon.bookings}</p>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => onRemove(salon.id)}
            className="px-4 py-2 rounded-lg bg-red-100 text-red-600 font-medium hover:bg-red-200"
          >
            Remove Salon
          </button>

          <button
            onClick={() => onToggleStatus(salon.id)}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700"
          >
            {salon.status === "active" ? "Freeze Salon" : "Activate Salon"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalonDetailsModal;
