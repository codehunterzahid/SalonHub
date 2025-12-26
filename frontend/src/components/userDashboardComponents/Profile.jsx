import { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Zahid Khan",
    email: "customer",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load saved profile
  useEffect(() => {
    const savedProfile = localStorage.getItem("salonhub-profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Save profile
  const handleSave = () => {
    localStorage.setItem("salonhub-profile", JSON.stringify(profile));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex-1 bg-gray  px-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
        <p className="text-gray-500 mt-1">Manage your account</p>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl bg-white rounded-2xl shadow-sm border p-8">
        {/* Avatar */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-semibold">
            {profile.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {profile.name}
            </h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              disabled={!isEditing}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border border-gray-400 text-black
                ${isEditing ? "bg-white" : "bg-gray-100"} 
                focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          {/* Email */}
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
              className={`w-full px-4 py-3 rounded-xl border border-gray-400 outline-none text-black
                ${isEditing ? "bg-white" : "bg-gray-100"} 
                focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 rounded-xl text-white font-medium
                  bg-linear-to-r from-purple-500 to-pink-500
                  hover:from-purple-600 hover:to-pink-600 transition"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 rounded-xl text-white font-medium
                    bg-linear-to-r from-purple-500 to-pink-500
                    hover:from-purple-600 hover:to-pink-600 transition"
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

export default Profile;
