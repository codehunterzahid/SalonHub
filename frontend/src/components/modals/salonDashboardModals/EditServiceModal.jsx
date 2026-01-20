import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const EditServiceModal = ({ service, onClose, onSave }) => {
  const [updatedService, setUpdatedService] = useState(service);

  useEffect(() => {
    setUpdatedService(service); // update if prop changes
  }, [service]);

  const handleSubmit = () => {
    if (
      !updatedService.name ||
      !updatedService.duration ||
      !updatedService.price
    )
      return alert("All fields are required");
    onSave(updatedService);
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold text-black mb-4">Edit Service</h2>

      <label className="text-gray-700 font-semibold text-sm">
        Service Name
      </label>
      <input
        className="w-full outline outline-gray-400 text-black rounded-lg px-4 py-2 mb-3 mt-2"
        value={updatedService.name}
        onChange={(e) =>
          setUpdatedService({ ...updatedService, name: e.target.value })
        }
      />

      <label className="text-gray-700 font-semibold text-sm">Duration</label>
      <input
        className="w-full outline outline-gray-400 text-black rounded-lg px-4 py-2 mb-3 mt-2"
        value={updatedService.duration}
        onChange={(e) =>
          setUpdatedService({ ...updatedService, duration: e.target.value })
        }
      />

      <label className="text-gray-700 font-semibold text-sm">Price ($)</label>
      <input
        type="number"
        className="w-full outline outline-gray-400 text-black rounded-lg px-4 py-2 mb-4 mt-2"
        value={updatedService.price}
        onChange={(e) =>
          setUpdatedService({ ...updatedService, price: e.target.value })
        }
      />

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="outline outline-gray-400 text-black px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500"
      >
        <X size={20} />
      </button>
      {children}
    </div>
  </div>
);

export default EditServiceModal;
