import { Check } from "lucide-react";
import Banner from "./Banner";
import { plans } from "@/data/plans";

export default function Main() {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner />
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl border shadow-sm p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
              plan.isPopular
                ? "border-teal-400 ring-2 ring-teal-100"
                : "border-gray-200"
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-3 right-6 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              {plan.name}
            </h3>

            <p className="text-slate-600 text-sm mb-5">{plan.description}</p>

            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-slate-900">
                {plan.price}
              </span>
              <span className="text-slate-500 text-sm">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <Check className="h-4 w-4 text-teal-500 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-medium transition-colors cursor-pointer`}
            >
              Start Free Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
