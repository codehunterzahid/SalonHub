import React, { useState } from "react";
import { DollarSign, Calendar, Clock } from "lucide-react";
import { salonBookingsData } from "../../data/index";

const BookingsPage = () => {
  const [bookings, setBookings] = useState(salonBookingsData);

  const markAsCompleted = (id) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: "completed" } : booking
      )
    );
  };

  return (
    <div className="p-6 bg-gray">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">Bookings</h1>
        <p className="text-gray-500">Manage your Appoinments.</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col border border-gray-200 md:flex-row md:items-center md:justify-between gap-4 bg-white rounded-lg p-4"
          >
            <div className="space-y-2 py-2">
              <h3 className="font-bold text-black">{booking.name}</h3>
              <p className="text-md text-gray-500">{booking.service}</p>

              {/* Date */}

              <div className="text-sm flex">
                <p className="text-gray-500 flex ">
                  <Calendar size={18} />{" "}
                  <span className="pl-1">{booking.date}</span>{" "}
                </p>
                <p className="text-gray-500 pl-4 flex">
                  <Clock size={18} />
                  <span className="pl-1">{booking.time}</span>
                </p>
                <p className="text-gray-500 pl-4 flex">
                  <DollarSign size={18} />{" "}
                  <span className="pl-1">{booking.fee}</span>
                </p>
              </div>
            </div>

            {/* Status & Mark Complete */}
            <div className="flex items-center gap-3">
              <span
                className={`px-4 py-1.5 text-sm rounded-lg font-medium ${
                  booking.status === "upcoming"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {booking.status}
              </span>

              {booking.status === "upcoming" && (
                <button
                  onClick={() => markAsCompleted(booking.id)}
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
