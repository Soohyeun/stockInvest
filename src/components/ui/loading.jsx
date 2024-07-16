export function Loading() {
  return (
    <div>
      <div className="loading pt-3 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-2xl font-bold text-center pb-10 text-slate-500">
          Our predictive model is currently undergoing training. Please hold on.
        </h3>
        <div className="flex items-center justify-center">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-600" />
        </div>
      </div>
    </div>
  );
}
