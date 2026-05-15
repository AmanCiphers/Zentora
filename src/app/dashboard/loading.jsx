export default function DashboardLoading() {
  return (
    <div className="px-6 py-8 sm:px-10 lg:px-20 xl:px-28">
      <div className="mb-8">
        <div className="h-4 w-24 bg-[#d9d8d2] animate-pulse" />
        <div className="mt-2 h-8 w-48 bg-[#d9d8d2] animate-pulse" />
        <div className="mt-2 h-4 w-64 bg-[#d9d8d2] animate-pulse" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border border-[#d9d8d2] bg-[#fbfbfa] p-5">
            <div className="h-3 w-20 bg-[#d9d8d2] animate-pulse" />
            <div className="mt-3 h-9 w-16 bg-[#d9d8d2] animate-pulse" />
            <div className="mt-2 h-4 w-32 bg-[#d9d8d2] animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}
