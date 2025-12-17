import { Calendar, Shield, Star } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      id: 1,
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Instant Booking",
      description:
        "Book appointments 24/7 with real-time availability. No waiting, no phone calls.",
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 2,
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Secure Payments",
      description:
        "Escrow payment system ensures your money is safe until service completion.",
      bg: "bg-gradient-to-r from-blue-400 to-purple-500",
    },
    {
      id: 3,
      icon: <Star className="h-6 w-6 text-white" />,
      title: "Top-Rated Salons",
      description:
        "Access verified salons with real customer reviews and ratings.",
      bg: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
  ];

  return (
    <section className="py-28 bg-purple-50">
      <div className="max-w-8xl mx-auto  px-12">
        <h2 className="text-4xl text-black text-center font-bold mb-4">
          Why Choose SalonHub?
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          Everything you need for seamless salon bookings
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col flex-1 max-w-175"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 ${feature.bg}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl float-left text-black font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
