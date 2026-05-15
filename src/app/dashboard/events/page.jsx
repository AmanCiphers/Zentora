import Link from 'next/link'
import EventCard from '@/components/EventCard'

const events = [
  {
    id: 1,
    title: 'Tech Connect 2026',
    description: 'Annual technology conference featuring keynotes, workshops, and networking for tech professionals.',
    date: 'May 20, 2026',
    location: 'Convention Center, SF',
    attendees: 342,
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Design Summit',
    description: 'A gathering of designers exploring the latest in UI/UX, design systems, and human-centered design.',
    date: 'Apr 15, 2026',
    location: 'Design Studio, NYC',
    attendees: 215,
    status: 'completed',
  },
  {
    id: 3,
    title: 'Startup Weekend',
    description: '48-hour startup building competition. Pitch ideas, form teams, and launch an MVP.',
    date: 'Jun 5, 2026',
    location: 'Innovation Hub, Austin',
    attendees: 128,
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'AI Workshop Series',
    description: 'Hands-on workshops covering ML fundamentals, LLM integration, and AI ethics.',
    date: 'May 28, 2026',
    location: 'Online (Zoom)',
    attendees: 89,
    status: 'upcoming',
  },
  {
    id: 5,
    title: 'Product Launch Meetup',
    description: 'Exclusive preview of the latest product releases with demos, Q&A, and networking.',
    date: 'Mar 10, 2026',
    location: 'Rooftop Lounge, LA',
    attendees: 73,
    status: 'completed',
  },
]

export default function EventsPage() {
  return (
    <div className="px-6 py-8 sm:px-10 lg:px-20 xl:px-28">
      <div className="flex items-start justify-between mb-8">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Events</span>
          <h1 className="mt-1 text-3xl font-black text-[#171717]">All Events</h1>
          <p className="mt-1 text-sm font-semibold text-[#55544f]">Manage your events and schedules.</p>
        </div>
        <Link
          href="/dashboard/events/create"
          className="border border-[#171717] bg-[#171717] px-5 py-2.5 text-sm font-black text-white transition hover:bg-transparent hover:text-[#171717]"
        >
          + New Event
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
