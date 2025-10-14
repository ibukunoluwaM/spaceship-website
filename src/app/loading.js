export default function RootLoading() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0b0d17] text-white">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-white mr-3"></div>
      <p className="text-lg">Preparing your journey...</p>
    </div>
  );
}