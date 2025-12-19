import React from "react";
import { steps } from "../../data/Data";
const Working = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-600 mt-3">
            Simple steps to your perfect salon experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white text-2xl font-bold shadow-lg">
                {step.id}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;
