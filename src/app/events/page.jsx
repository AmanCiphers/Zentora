import Link from 'next/link'

const publicEvents = [
  {
    id: 1,
    title: 'Tech Connect 2026',
    description: 'Annual technology conference featuring keynotes, workshops, and networking for tech professionals.',
    date: 'May 20, 2026',
    location: 'Convention Center, SF',
    capacity: 500,
    registered: 342,
  },
  {
    id: 2,
    title: 'Design Summit',
    description: 'A gathering of designers exploring the latest in UI/UX, design systems, and human-centered design.',
    date: 'Apr 15, 2026',
    location: 'Design Studio, NYC',
    capacity: 300,
    registered: 215,
  },
  {
    id: 3,
    title: 'Startup Weekend',
    description: '48-hour startup building competition. Pitch ideas, form teams, and launch an MVP.',
    date: 'Jun 5, 2026',
    location: 'Innovation Hub, Austin',
    capacity: 200,
    registered: 128,
  },
  {
    id: 4,
    title: 'AI Workshop Series',
    description: 'Hands-on workshops covering ML fundamentals, LLM integration, and AI ethics.',
    date: 'May 28, 2026',
    location: 'Online (Zoom)',
    capacity: 150,
    registered: 89,
  },
]

export default function PublicEventsPage() {
  return (
    <div className="min-h-[70vh] px-6 py-16 sm:px-10 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-5xl">
        <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Discover</span>
        <h1 className="mt-2 text-4xl font-black leading-[1.05] text-[#171717]">Open Events</h1>
        <p className="mt-2 max-w-lg text-sm font-semibold text-[#55544f]">
          Public events organized through Zentora. Register and attend.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {publicEvents.map((event) => (
            <div key={event.id} className="border border-[#d9d8d2] bg-[#fbfbfa] p-5 transition hover:border-[#171717]">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-black text-[#171717]">{event.title}</h2>
                <span className="shrink-0 rounded-full bg-[#171717] px-2.5 py-0.5 text-xs font-black text-white">
                  {event.date}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold leading-snug text-[#55544f]">{event.description}</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#62615d]">
                <span>{event.location}</span>
                <span>{event.registered}/{event.capacity} registered</span>
              </div>
              <Link
                href="/register"
                className="mt-4 inline-block border border-[#171717] px-4 py-2 text-xs font-black text-[#171717] transition hover:bg-[#171717] hover:text-white"
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
