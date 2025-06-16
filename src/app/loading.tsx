export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center text-gray-600">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm animate-pulse">Loading dashboard data...</p>
    </div>
  );
}