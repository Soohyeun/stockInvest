export function Loading() {
  return (
    <div className="loading pt-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-600" />
    </div>
  );
}
