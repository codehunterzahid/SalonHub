import React, { useState } from "react";

const AdminSettingsPage = () => {
  const [formData, setFormData] = useState({
    PlatformCommission: "10",
    EscrowRelease: "24",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
    setSaved(true);
  };

  return (
    <div className="bg-gray px-22 py-2">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black mb-3">Settings</h1>
        <p className="text-md text-gray-500">Configure platform settings</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm max-w-4xl p-6">
        <form onSubmit={handleSave} className="space-y-4">
          <div className="p-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Platform Commission (%)
            </label>
            <input
              type="number"
              name="PlatformCommission"
              value={formData.PlatformCommission}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <div className="p-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Escrow Release Time (Hours)
            </label>
            <input
              type="number"
              name="EscrowRelease"
              value={formData.EscrowRelease}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

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

export default AdminSettingsPage;
