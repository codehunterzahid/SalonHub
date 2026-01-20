import { useState, useEffect } from "react";
import api from "../../api/axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState({ fullName: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile");
        setProfile(res.data);
      } catch (err) {
        console.log("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  // Save profile changes
  const handleSave = async () => {
    try {
      const res = await api.put("/profile", profile);
      setProfile(res.data);
      setIsEditing(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.log("Error updating profile:", err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="flex-1 bg-gray px-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
        <p className="text-gray-500 mt-1">Manage your account</p>
      </div>

      <div className="max-w-4xl bg-white rounded-2xl shadow-sm border p-8">
        {/* Avatar */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-semibold">
            {profile.fullName.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {profile.fullName}
            </h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={profile.fullName}
              disabled={!isEditing}
              onChange={(e) =>
                setProfile({ ...profile, fullName: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-xl border border-gray-400 text-black ${
                isEditing ? "bg-white" : "bg-gray-100"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              disabled={!isEditing}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-xl border border-gray-400 text-black ${
                isEditing ? "bg-white" : "bg-gray-100"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            {!isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-3 rounded-xl text-white font-medium bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition"
                >
                  Edit Profile
                </button>
                {saved && (
                  <span className="text-green-600 text-sm">
                    Profile updated successfully
                  </span>
                )}
              </>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Update Profile
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
