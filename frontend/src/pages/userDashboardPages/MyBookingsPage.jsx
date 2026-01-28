import { useState, useEffect } from "react";
import api from "../../api/axios";
import { Calendar, Clock, DollarSign } from "lucide-react";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await api.get("/bookings/my");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const cancelBooking = async (id) => {
    await api.put(`/bookings/${id}/cancel`);
    fetchBookings();
  };

  const rescheduleBooking = async (id) => {
    const newDate = prompt("Enter new date (YYYY-MM-DD)");
    const newTime = prompt("Enter new time (HH:MM)");

    if (!newDate || !newTime) return;

    await api.put(`/bookings/${id}/reschedule`, {
      date: newDate,
      time: newTime,
    });

    fetchBookings();
  };

  return (
    <div className="px-18 py-10 max-w-5xl">
      <h1 className="text-3xl text-black font-bold mb-2">My Bookings</h1>
      <p className="text-gray-500">Manage Your appointments</p>

      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="bg-white p-6 rounded-xl border mb-4 max-w-full"
        >
          <h3 className="text-lg text-black font-bold">
            {booking.salonId?.salonName}
          </h3>

          <p className="text-gray-600 pt-2 pb-2 ">{booking.serviceName}</p>

          <div className="flex text-gray-600 gap-4 text-sm mt-2">
            <span className="flex">
              <Calendar className="mr-2" size={18} />{" "}
              {new Date(booking.date).toLocaleDateString()}
            </span>
            <span className="flex">
              <Clock className="mr-2" size={18} /> {booking.time}
            </span>
            <span className="flex font-semibold">
              <DollarSign className="mr-1" size={18} /> ${booking.servicePrice}
            </span>
          </div>

          <div className="flex justify-between gap-3 mt-4">
            <div>
              {booking.status === "Upcoming" && (
                <>
                  <button
                    onClick={() => cancelBooking(booking._id)}
                    className="px-4 mr-3 py-2 bg-red-100 text-red-600 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => rescheduleBooking(booking._id)}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded"
                  >
                    Reschedule
                  </button>
                </>
              )}
            </div>

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
              {booking.status || "Upcoming"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingsPage;
