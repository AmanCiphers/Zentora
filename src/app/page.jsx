import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="min-h-[100svh] grid grid-cols-1 lg:grid-cols-[1fr_29vw]">
        <div className="relative flex flex-col justify-center bg-[#2f2f2d] px-6 py-20 sm:px-10 lg:px-20 xl:px-28">
          <div className="max-w-xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-white/40">Event Platform</span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] text-white sm:text-6xl">
              Plan events<br />without<br />the chaos
            </h1>
            <p className="mt-6 text-lg font-semibold leading-snug text-white/70 max-w-md">
              Eventify consolidates registration, scheduling, announcements, and check-ins into one platform. Less friction, fewer dropped balls.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="border border-white px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#2f2f2d]"
              >
                Get Started
              </Link>
              <Link
                href="/dashboard"
                className="bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[#fbfbfa] px-6 py-20 sm:px-10 lg:px-20 xl:px-28">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">All-in-One</span>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] text-[#171717]">
            Registration, scheduling &amp; comms
          </h2>
          <p className="mt-4 text-sm font-semibold leading-snug text-[#55544f]">
            Organizing events typically requires juggling multiple tools — leading to manual errors, poor attendee experience, and organizer burnout.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {[
              { stat: '1', label: 'Platform' },
              { stat: '0', label: 'Headaches' },
              { stat: '100%', label: 'Focus' },
            ].map((item) => (
              <div key={item.label} className="border border-[#d9d8d2] bg-white p-5">
                <p className="text-3xl font-black text-[#171717]">{item.stat}</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Features</span>
          <h2 className="mt-2 text-4xl font-black leading-[1.05] text-[#171717]">
            Everything you need
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Smart Registration',
                desc: 'Custom portals with real-time capacity tracking, waitlists, and automated confirmations.',
              },
              {
                title: 'Visual Scheduling',
                desc: 'Drag-and-drop builder with conflict detection, speaker management, and live updates.',
              },
              {
                title: 'Real-time Comms',
                desc: 'Broadcast announcements, send personalized reminders, and keep everyone in the loop.',
              },
              {
                title: 'Seamless Check-ins',
                desc: 'QR scanning, self-check-in kiosks, and real-time attendance tracking.',
              },
              {
                title: 'Attendance Analytics',
                desc: 'Track engagement metrics, generate insights, and measure your event success.',
              },
              {
                title: 'Team Collaboration',
                desc: 'Assign roles, manage permissions, and collaborate with your team in real time.',
              },
            ].map((feature) => (
              <div key={feature.title} className="border border-[#d9d8d2] bg-[#fbfbfa] p-5 transition hover:border-[#171717]">
                <h3 className="text-lg font-black text-[#171717]">{feature.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#55544f]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d8d2] bg-[#2f2f2d] px-6 py-20 sm:px-10 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black leading-[1.05] text-white">
            Ready to simplify your events?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-semibold leading-snug text-white/65">
            Join organizers who&apos;ve replaced chaos with clarity. Start planning in minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="border border-white px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#2f2f2d]"
            >
              Get Started Free
            </Link>
            <Link
              href="/dashboard"
              className="bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
