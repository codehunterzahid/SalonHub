import React, { useState } from "react";
import { X } from "lucide-react";
import PaymentModal from "./PaymentModal";

const SalonModal = ({ salon, onClose }) => {
  const [selectedService, setSelectedService] = useState(null);

  if (!salon) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b text-black">
            <h2 className="text-xl font-bold">{salon.name}</h2>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <img src={salon.image} className="w-full h-64 object-cover" />

          <div className="p-5">
            <h3 className="font-bold mb-4 text-black">Available Services</h3>

            <div className="space-y-4">
              {salon.services.map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-center bg-purple-50 p-4 rounded-xl"
                >
                  <div>
                    <h4 className="font-semibold text-black">{service.name}</h4>
                    <p className="text-sm text-gray-600">{service.duration}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-bold text-black">${service.price}</span>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="px-4 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedService && (
        <PaymentModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onPay={(method) => {
            console.log("Pay via:", method, selectedService);
            setSelectedService(null);
            onClose();
          }}
        />
      )}
    </>
  );
};

export default SalonModal;
