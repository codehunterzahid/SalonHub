import { Calendar, Clock } from "lucide-react";

const MyBookings = () => {
  return (
    <div className="flex-1 bg-gray p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Bookings</h1>
        <p className="text-gray-500 mt-1">Manage your appointments</p>
      </div>

      <div className="space-y-6 max-w-4xl">
      
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Glamour Salon & Spa
              </h3>
              <p className="text-gray-500 mt-1">Haircut & Styling</p>

              <div className="flex items-center gap-6 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  2024-12-20
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  2:00 PM
                </span>
                <span className="font-medium text-gray-700">$50</span>
              </div>
            </div>

            <span className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-100 text-blue-600">
              Upcoming
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
              Cancel
            </button>

            <button
              className="px-6 py-2 rounded-lg text-white font-medium
              bg-linear-to-r from-purple-500 to-pink-500
              hover:from-purple-600 hover:to-pink-600 transition"
            >
              Reschedule
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Elite Beauty Studio
            </h3>
            <p className="text-gray-500 mt-1">Facial Treatment</p>

            <div className="flex items-center gap-6 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                2024-12-10
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                11:00 AM
              </span>
              <span className="font-medium text-gray-700">$80</span>
            </div>
          </div>

          <span className="px-4 py-2 rounded-lg text-sm font-medium bg-green-100 text-green-600">
            Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
