export default function Banner() {
  return (
    <>
      <div className="text-center mb-12">
        <p className="text-slate-600 max-w-2xl mx-auto">
          Start free, upgrade when you're ready. No hidden fees, cancel anytime.
        </p>
      </div>
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-10 text-center">
        <p className="text-teal-800 font-semibold">
          🎉 30-day free trial on all plans
        </p>
        <p className="text-slate-600 text-sm mt-1">
          You won't be charged until your trial ends.
        </p>
      </div>
    </>
  );
}
