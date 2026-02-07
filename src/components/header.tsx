import { Check, Plane } from "lucide-react";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div className="relative flex items-center justify-between max-w-4xl mx-auto mb-12">
        <div className="flex flex-col items-center flex-1">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mb-2">
            <Check className="w-6 h-6 text-white" />
          </div>
          <span className="text-sm text-slate-700 font-medium">
            Choose your Plan
          </span>
        </div>

        <div className="flex-1 h-0.5 bg-teal-500 -mx-2 -mt-7.5"></div>

        <div className="flex flex-col items-center flex-1">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center mb-2">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
          <span className="text-sm text-slate-700 font-medium">
            Order Summary
          </span>
        </div>

        <div className="flex-1 h-0.5 bg-gray-300 -mx-2 -mt-7.5"></div>

        <div className="flex flex-col items-center flex-1">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mb-2"></div>
          <span className="text-sm text-slate-500">Save Card Details</span>
        </div>

        <div className="flex-1 h-0.5 bg-gray-300 -mx-2 -mt-7.5"></div>

        <div className="flex flex-col items-center flex-1">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mb-2"></div>
          <span className="text-sm text-slate-500">Ready to Onboard!</span>
        </div>
      </div>
    </div>
  );
}
