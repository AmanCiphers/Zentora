'use client'

export default function DashboardError({ error, reset }) {
  return (
    <div className="px-6 py-16 sm:px-10 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex size-14 items-center justify-center border border-[#d9d8d2] bg-white">
          <svg className="size-6 text-[#55544f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="mt-4 text-2xl font-black text-[#171717]">Something went wrong</h1>
        <p className="mt-2 text-sm font-semibold text-[#55544f]">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 border border-[#171717] bg-[#171717] px-5 py-2.5 text-sm font-black text-white transition hover:bg-transparent hover:text-[#171717]"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
