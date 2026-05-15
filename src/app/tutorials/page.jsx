import Link from 'next/link'

const tutorials = [
  {
    title: 'Creating Your First Event',
    desc: 'Step-by-step guide to setting up an event, adding details, and publishing it for registrations.',
    readTime: '5 min',
  },
  {
    title: 'Managing Registrations',
    desc: 'Learn how to track registrations, manage capacity, and handle waitlists.',
    readTime: '4 min',
  },
  {
    title: 'Sending Announcements',
    desc: 'Broadcast real-time updates to your attendees and keep everyone informed.',
    readTime: '3 min',
  },
  {
    title: 'Setting Up Check-ins',
    desc: 'Configure QR-based check-ins, self-service kiosks, and track attendance live.',
    readTime: '6 min',
  },
  {
    title: 'Analytics & Reports',
    desc: 'Understand attendance metrics, engagement data, and post-event reports.',
    readTime: '4 min',
  },
  {
    title: 'Team Collaboration',
    desc: 'Add team members, assign roles, and manage permissions for your events.',
    readTime: '3 min',
  },
]

export default function TutorialsPage() {
  return (
    <div className="min-h-[70vh] px-6 py-16 sm:px-10 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-5xl">
        <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Learn</span>
        <h1 className="mt-2 text-4xl font-black leading-[1.05] text-[#171717]">Tutorials</h1>
        <p className="mt-2 max-w-lg text-sm font-semibold text-[#55544f]">
          Step-by-step guides to get the most out of Zentora.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((t) => (
            <div key={t.title} className="border border-[#d9d8d2] bg-[#fbfbfa] p-5 transition hover:border-[#171717]">
              <h2 className="text-lg font-black text-[#171717]">{t.title}</h2>
              <p className="mt-2 text-sm font-semibold leading-snug text-[#55544f]">{t.desc}</p>
              <span className="mt-3 block text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">{t.readTime} read</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
