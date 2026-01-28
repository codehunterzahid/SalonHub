import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stats } from "../../data";
import { fetchSalonBookings } from "../../features/bookings/bookingThunks";

const OverviewPage = () => {
  const dispatch = useDispatch();
  const { bookings = [], loading, error } = useSelector(
    (state) => state.bookings
  );

  useEffect(() => {
    dispatch(fetchSalonBookings());
  }, [dispatch]);

  return (
    <div className="py-2 px-6 bg-gray">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, Demo Salon Owner</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.iconBg}`}
            >
              <item.icon size={22} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-xl font-bold text-black">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-black">
          Recent Bookings
        </h2>

        <div className="space-y-4">
          {bookings.slice(0,3).map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#faf7fc] rounded-lg p-4"
            >
              <div>
                <h3 className="font-semibold text-black">
                  {booking.userId?.fullName}
                </h3>
                <p className="text-sm text-gray-500">{booking.serviceName}</p>
              </div>

              <div className="text-sm">
                <p className="font-medium text-black">
                  {new Date(booking.date).toLocaleDateString()}
                </p>
                <p className="text-gray-500">{booking.time}</p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    booking.status === "Upcoming"
                      ? "bg-blue-100 text-blue-700"
                      : booking.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-red-700"
                  }`}
                >
                  {booking.status || "Upcoming"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
