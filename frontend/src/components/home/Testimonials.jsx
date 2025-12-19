import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    text: "SalonHub has completely changed how I book my beauty appointments. The platform is so easy to use and I love the secure payment system!",
  },
  {
    id: 2,
    name: "Mike Davis",
    role: "Salon Owner",
    text: "As a salon owner, this platform has helped me reach more customers and manage bookings efficiently. The 10% commission is totally worth it!",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Happy Customer",
    text: "I was skeptical at first, but the escrow payment system gave me peace of mind. Got exactly what I wanted and the service was amazing!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-3">
            Real experiences from real people
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-4" />

              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6 leading-relaxed">
                “{item.text}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
