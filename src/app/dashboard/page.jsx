import Link from 'next/link'

const stats = [
  { label: 'Total Events', value: '4', change: '+2 this month', href: '/dashboard/events' },
  { label: 'Registered', value: '847', change: '+12% vs last month', href: '/dashboard/events' },
  { label: 'Announcements', value: '23', change: '8 this week', href: '/dashboard/announcements' },
  { label: 'Check-ins Today', value: '156', change: '92% rate', href: '/dashboard/attendance' },
]

const recentEvents = [
  { title: 'Tech Connect 2026', date: 'May 20, 2026', attendees: 342, status: 'upcoming' },
  { title: 'Design Summit', date: 'Apr 15, 2026', attendees: 215, status: 'completed' },
  { title: 'AI Workshop Series', date: 'May 28, 2026', attendees: 89, status: 'upcoming' },
]

export default function DashboardPage() {
  return (
    <div className="px-6 py-8 sm:px-10 lg:px-20 xl:px-28">
      <div className="mb-8">
        <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Overview</span>
        <h1 className="mt-1 text-3xl font-black text-[#171717]">Dashboard</h1>
        <p className="mt-1 text-sm font-semibold text-[#55544f]">A snapshot of your events and activity.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="border border-[#d9d8d2] bg-[#fbfbfa] p-5 transition hover:border-[#171717]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">{stat.label}</p>
            <p className="mt-2 text-4xl font-black text-[#171717]">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-[#77766f]">{stat.change}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 border border-[#d9d8d2] bg-[#fbfbfa] p-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-black text-[#171717]">Recent Events</h2>
          <Link href="/dashboard/events" className="text-sm font-black text-[#62615d] hover:text-[#171717] transition-colors">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#d9d8d2]">
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Event</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Date</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Attendees</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map((event) => (
                <tr key={event.title} className="border-b border-[#d9d8d2] last:border-0">
                  <td className="py-3 pr-4 font-black text-[#171717]">{event.title}</td>
                  <td className="py-3 pr-4 font-semibold text-[#62615d]">{event.date}</td>
                  <td className="py-3 pr-4 font-semibold text-[#62615d]">{event.attendees}</td>
                  <td className="py-3">
                    <span className={`px-2.5 py-1 text-xs font-black ${
                      event.status === 'upcoming' ? 'bg-[#171717] text-white' : 'bg-[#efeee8] text-[#55544f]'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
