import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DollarSign, Calendar, Clock } from "lucide-react";
import {
  fetchSalonBookings,
  completeBooking,
} from "../../features/bookings/bookingThunks";

const BookingsPage = () => {
  const dispatch = useDispatch();
  const { bookings = [], loading, error } = useSelector(
    (state) => state.bookings
  );

  useEffect(() => {
    dispatch(fetchSalonBookings());
  }, [dispatch]);

  const markAsCompleted = (id) => {
    dispatch(completeBooking(id));
  };

  if (loading) return <p className="p-6">Loading bookings...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  
  return (
    <div className="p-6 bg-gray">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">Bookings</h1>
        <p className="text-gray-500">Manage your Appoinments.</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col border border-gray-200 md:flex-row md:items-center md:justify-between gap-4 bg-white rounded-lg p-4"
          >
            <div className="space-y-2 py-2">
              <h3 className="font-bold text-xl text-black">
                {booking.userId?.fullName}
              </h3>
              <p className="text-md text-gray-500">{booking.serviceName}</p>

              <div className="text-sm flex">
                <p className="text-gray-500 flex">
                  <Calendar size={18} />
                  <span className="pl-1">
                    {new Date(booking.date).toLocaleDateString()}
                  </span>
                </p>

                <p className="text-gray-500 pl-4 flex">
                  <Clock size={18} />
                  <span className="pl-1">{booking.time}</span>
                </p>

                <p className="text-gray-500 pl-4 flex">
                  <DollarSign size={18} />
                  <span className="pl-1">${booking.servicePrice}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  booking.status === "Upcoming"
                    ? "bg-blue-100 text-blue-700"
                    : booking.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-red-700"
                }`}
              >
                {booking.status}
              </span>

              {booking.status === "Upcoming" && (
                <button
                  onClick={() => markAsCompleted(booking._id)}
                  className="px-4 py-2 text-md rounded-lg text-white bg-linear-to-r from-purple-500 to-pink-500 cursor-pointer"
                >
                  Mark Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsPage;
