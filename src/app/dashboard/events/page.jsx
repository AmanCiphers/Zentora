import Link from 'next/link'
import EventCard from '@/components/EventCard'

const events = [
  {
    id: 1,
    title: 'Tech Connect 2026',
    description: 'Annual technology conference featuring keynotes, workshops, and networking opportunities for tech professionals and enthusiasts.',
    date: 'May 20, 2026',
    location: 'Convention Center, SF',
    attendees: 342,
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Design Summit',
    description: 'A gathering of designers exploring the latest trends in UI/UX, design systems, and human-centered design practices.',
    date: 'Apr 15, 2026',
    location: 'Design Studio, NYC',
    attendees: 215,
    status: 'completed',
  },
  {
    id: 3,
    title: 'Startup Weekend',
    description: '48-hour startup building competition. Pitch ideas, form teams, and launch a minimum viable product.',
    date: 'Jun 5, 2026',
    location: 'Innovation Hub, Austin',
    attendees: 128,
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'AI Workshop Series',
    description: 'Hands-on workshops covering machine learning fundamentals, LLM integration, and AI ethics.',
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">Manage your events and schedules.</p>
        </div>
        <Link
          href="/register"
          className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
        >
          + New Event
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
