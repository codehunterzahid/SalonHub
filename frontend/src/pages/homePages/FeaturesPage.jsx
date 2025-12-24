import React from "react";
import { features } from "../../data/index";

const FeaturesPage = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-8xl mx-auto px-12">
        <h2 className="text-4xl text-black text-center font-bold mb-4">
          Why Choose SalonHub?
        </h2>

        <p className="text-gray-600 mb-12 text-center">
          Everything you need for seamless salon bookings
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col flex-1 max-w-175"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 ${feature.bg}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl text-black font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
