import React, { useState } from "react";
import pricingData from "../Pricing.json";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section id="pricing" className="bg-[#f5f7fb] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            No hidden fees. Choose a plan that fits your business size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-white p-8 border transition duration-300 shadow-sm ${
                  isSelected
                    ? "border-blue-600 shadow-lg scale-[1.03]"
                    : plan.popular
                    ? "border-blue-400 shadow-md"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-slate-900">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="text-sm text-gray-500 mb-1">
                      {plan.suffix}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
                    isSelected
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-300 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {isSelected ? "Selected" : plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
};

export default Pricing;