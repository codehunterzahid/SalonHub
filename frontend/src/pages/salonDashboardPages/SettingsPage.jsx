import React, { useEffect, useState } from "react";
import api from "../../api/axios"; // your axios instance

const SalonSettingsPage = () => {
  const [formData, setFormData] = useState({
    salonName: "",
    fullName: "",
    email: "",
    location: "",
    bankAccount: "",
  });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true); 

  // Fetch salon settings on mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get("/salon"); 
        const data = res.data;
        setFormData({
          salonName: data.salonName || "",
          fullName: data.fullName || "",
          email: data.email || "",
          location: data.location || "",
          bankAccount: data.bankAccount || "",
        });
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || "Failed to fetch settings");
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSaved(false);
  };

  // Save updated settings
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put("/salon", formData); 
      const data = res.data;

      setFormData({
        salonName: data.salonName || "",
        fullName: data.fullName || "",
        email: data.email || "",
        location: data.location || "",
        bankAccount: data.bankAccount || "",
      });

      setSaved(true);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to save settings");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray px-22 py-2">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">Salon Settings</h1>
        <p className="text-sm text-gray-500">Manage your salon information</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm max-w-4xl p-6">
        <form onSubmit={handleSave} className="space-y-4">
          {/* Salon Name */}
          <div className="p-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salon Name
            </label>
            <input
              type="text"
              name="salonName"
              value={formData.salonName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Owner Name */}
          <div className="p-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Owner Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Email */}
          <div className="p-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-gray-100 text-black"
            />
          </div>

          {/* Location */}
          <div className="p-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Bank Account */}
          <div className="p-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Account (for withdrawals)
            </label>
            <input
              type="text"
              name="bankAccount"
              placeholder="Account Number"
              value={formData.bankAccount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Save Button */}
          <div className="p-2 flex items-center gap-4">
            <button
              type="submit"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Save Settings
            </button>

            {saved && (
              <span className="text-green-600 text-sm">
                Settings saved successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalonSettingsPage;
