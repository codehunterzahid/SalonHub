import React, { useState } from "react";
import SalonModal from "./SalonModal";
import { salonsData } from "../../data/data";

const Salons = () => {
  const [search, setSearch] = useState("");
  const [selectedSalon, setSelectedSalon] = useState(null);

  const filteredSalons = salonsData.filter((salon) =>
    salon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-1 text-black">Browse Salons</h1>
      <p className="text-gray-500 mb-6">Find the perfect salon for your needs</p>

      <input
        type="text"
        placeholder="Search salons, services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 text-gray-500 rounded-lg border pl-10 border-gray-200 focus:ring-2 focus:ring-purple-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredSalons.map((salon) => (
          <div key={salon.id} className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={salon.image} className="h-48 w-full object-cover" />

            <div className="p-4">
              <h2 className="font-bold text-black">{salon.name}</h2>
              <p className="mb-1 text-black">⭐ {salon.rating} ({salon.reviews})</p>
              <p className="text-gray-500 mb-4">{salon.location}</p>

              <button
                onClick={() => setSelectedSalon(salon)}
                className="w-full py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg"
              >
                View Services
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSalon && (
        <SalonModal
          salon={selectedSalon}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </>
  );
};

export default Salons;
