import React, { useState, useEffect } from "react";
import SalonModal from "../../components/modals/userDashboardModals/SalonModal";
import api from "../../api/axios";

const SalonsPage = () => {
  const [search, setSearch] = useState("");
  const [salons, setSalons] = useState([]);
  const [selectedSalon, setSelectedSalon] = useState(null);

  useEffect(() => {
    const fetchSalons = async () => {
      try {
        const res = await api.get("/salons");
        setSalons(res.data);
      } catch (err) {
        console.log("Error fetching salons:", err);
      }
    };
    fetchSalons();
  }, []);

const filteredSalons = salons.filter(
  (salon) =>
    salon.name &&
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
          <div key={salon._id} className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={salon.image} className="h-48 w-full object-cover" />

            <div className="p-4">
              <h2 className="font-bold text-black">{salon.salonName}</h2>
              <p className="mb-1 text-gray-700">⭐ {salon.rating || 4.6} ({salon.reviews || 123})</p>
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

      {selectedSalon && (
        <SalonModal
          salon={selectedSalon}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </>
  );
};

export default SalonsPage;
