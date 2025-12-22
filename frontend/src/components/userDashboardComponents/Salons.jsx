import React, { useState } from "react";
import Salon1 from "../../assets/images/salon-1.jpg";
import Salon2 from "../../assets/images/salon-2.jpg";
import Salon3 from "../../assets/images/salon-3.jpg";

const salonsData = [
  {
    id: 1,
    name: "Glamour Salon & Spa",
    rating: 4.8,
    reviews: 234,
    location: "Downtown, New York",
    image: Salon1,
  },
  {
    id: 2,
    name: "Elite Beauty Studio",
    rating: 4.9,
    reviews: 189,
    location: "Midtown, New York",
    image: Salon2,
  },
  {
    id: 3,
    name: "Luxury Spa & Wellness",
    rating: 4.7,
    reviews: 156,
    location: "Upper East Side, New York",
    image: Salon3,
  },
];

const Salons = () => {
  const [search, setSearch] = useState("");

  const filteredSalons = salonsData.filter((salon) =>
    salon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1 text-black">Browse Salons</h1>
      <p className="text-gray-500 mb-6">Find the perfect salon for your needs</p>

      <input
        type="text"
        placeholder="Search salons, services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 rounded-lg border text-gray-900 pl-10 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredSalons.map((salon) => (
          <div key={salon.id} className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src={salon.image}
              alt={salon.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold mb-1 text-black">{salon.name}</h2>
              <p className="text-black mb-1">⭐ {salon.rating} <span className="text-gray-500">({salon.reviews} reviews)</span></p>
              <p className="text-gray-500 mb-4">{salon.location}</p>
              <button className="w-full py-2 cursor-pointer bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                View Services
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salons;
