import React from "react";
import { NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-3xl bg-linear-to-r from-purple-600 to-pink-600 px-10 py-14 text-center shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Look?
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers and experience premium salon
            services today.
          </p>

          <NavLink
            to="/signup"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition"
          >
            <Sparkles className="w-5 h-5" />
            Get Started Free
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CTA;
