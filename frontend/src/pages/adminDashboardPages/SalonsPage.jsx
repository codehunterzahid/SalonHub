import React, { useState, useEffect } from "react";
import SalonDetailsModal from "../../components/modals/adminDashboardModals/SalonsDetailsModal";
import api from "../../api/axios";

const SalonsPage = () => {
  const [salons, setSalons] = useState([]);
  const [selectedSalon, setSelectedSalon] = useState(null);

  const fetchSalons = async () => {
    try {
      const res = await api.get("/admin/salons");
      setSalons(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSalons();
  }, []);

  const removeSalon = async (id) => {
    try {
      await api.delete(`/admin/salons/${id}`);
      setSalons((prev) => prev.filter((s) => s._id !== id));
      setSelectedSalon(null);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleStatus = async (id) => {
    try {
      const res = await api.patch(`/admin/salons/${id}/status`);
      setSalons((prev) =>
        prev.map((s) => (s._id === id ? { ...s, status: res.data.status } : s)),
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-black">Manage Salons</h1>
      <p className="text-gray-500 mb-6">View and manage registered salons</p>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-purple-50 text-left">
            <tr className="text-sm text-black">
              <th className="p-4">Salon Name</th>
              <th className="p-4">Owner</th>
              <th className="p-4">Status</th>
              <th className="p-4">Earnings</th>
              <th className="p-4">Bookings</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salons.map((salon) => (
              <tr key={salon._id} className="border-t">
                <td className="p-4 font-medium text-black">
                  {salon.salonName}
                </td>
                <td className="p-4 text-gray-600">{salon.fullName}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      salon.status === "active"
                        ? "bg-green-100 text-green-700"
                        : salon.status === "freeze"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {salon.status || "pending"}
                  </span>
                </td>
                <td className="p-4 text-black font-semibold">
                  ${salon.earnings?.toLocaleString() || 0}
                </td>
                <td className="p-4 text-black">{salon.bookings || 0}</td>
                <td className="p-4">
                  <button
                    onClick={() => setSelectedSalon(salon)}
                    className="text-purple-600 font-medium hover:underline"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedSalon && (
        <SalonDetailsModal
          salon={selectedSalon}
          onClose={() => setSelectedSalon(null)}
          onRemove={removeSalon}
          onToggleStatus={toggleStatus}
        />
      )}
    </div>
  );
};

export default SalonsPage;
