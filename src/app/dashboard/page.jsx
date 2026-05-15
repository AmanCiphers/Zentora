import Link from 'next/link'

const stats = [
  { label: 'Total Events', value: '4', change: '+2 this month', href: '/dashboard/events', color: 'bg-purple-500' },
  { label: 'Registered Attendees', value: '847', change: '+12% vs last month', href: '/dashboard/events', color: 'bg-cyan-500' },
  { label: 'Announcements Sent', value: '23', change: '8 this week', href: '/dashboard/announcements', color: 'bg-amber-500' },
  { label: 'Check-ins Today', value: '156', change: '92% rate', href: '/dashboard/attendance', color: 'bg-green-500' },
]

const recentEvents = [
  { title: 'Tech Connect 2026', date: 'May 20, 2026', attendees: 342, status: 'upcoming' },
  { title: 'Design Summit', date: 'Apr 15, 2026', attendees: 215, status: 'completed' },
  { title: 'AI Workshop Series', date: 'May 28, 2026', attendees: 89, status: 'upcoming' },
]

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your events and activity.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full ${stat.color}`} />
              <span className="text-sm font-medium text-gray-500">{stat.label}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.change}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
          <Link href="/dashboard/events" className="text-sm font-medium text-purple-600 hover:text-purple-700">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left pb-3 font-medium text-gray-500">Event</th>
                <th className="text-left pb-3 font-medium text-gray-500">Date</th>
                <th className="text-left pb-3 font-medium text-gray-500">Attendees</th>
                <th className="text-left pb-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map((event) => (
                <tr key={event.title} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 font-medium text-gray-900">{event.title}</td>
                  <td className="py-3 text-gray-600">{event.date}</td>
                  <td className="py-3 text-gray-600">{event.attendees}</td>
                  <td className="py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
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
