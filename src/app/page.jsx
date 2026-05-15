import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="min-h-[100svh] grid grid-cols-1 lg:grid-cols-[1fr_480px]">
        <div className="relative flex flex-col justify-center overflow-hidden bg-[#2f2f2d] px-6 sm:px-10 lg:px-0 xl:px-0 py-16 sm:py-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
          <div className="relative lg:ml-30 w-full max-w-xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-white/40">
              All-in-One Event Platform
            </span>
            <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-6xl sm:leading-none">
              Plan events<br />without the chaos
            </h1>
            <p className="mt-5 max-w-md text-lg font-semibold leading-snug text-white/70">
              Zentora brings registration, scheduling, announcements, and
              check-ins into one platform. Less friction, fewer dropped balls.
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
        <div className="flex flex-col justify-center bg-[#fbfbfa] px-6 sm:px-10 lg:px-12 xl:px-16 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-sm">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">
              One Platform
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#171717]">
              Everything in one place
            </h2>
            <p className="mt-3 text-sm font-semibold leading-snug text-[#55544f]">
              No more juggling separate tools. Zentora handles the full event
              lifecycle — from first registration to final check-in.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                { stat: '1', label: 'Platform' },
                { stat: '0', label: 'Headaches' },
                { stat: '100%', label: 'Focus on attendees' },
              ].map((item) => (
                <div key={item.label} className="border border-[#d9d8d2] bg-white px-5 py-4">
                  <p className="text-3xl font-black text-[#171717]">{item.stat}</p>
                  <p className="mt-0.5 text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">
            Features
          </span>
          <h2 className="mt-2 text-4xl font-black leading-tight text-[#171717]">
            Everything you need
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Smart Registration",
                desc: "Custom portals with real-time capacity tracking, waitlists, and automated confirmations.",
              },
              {
                title: "Visual Scheduling",
                desc: "Drag-and-drop builder with conflict detection, speaker management, and live updates.",
              },
              {
                title: "Real-time Comms",
                desc: "Broadcast announcements, send reminders, and keep everyone in the loop instantly.",
              },
              {
                title: "Seamless Check-ins",
                desc: "QR scanning, self-check-in kiosks, and real-time attendance tracking with reports.",
              },
              {
                title: "Attendance Analytics",
                desc: "Track engagement metrics, generate insights, and measure event success.",
              },
              {
                title: "Team Collaboration",
                desc: "Assign roles, manage permissions, and collaborate with your team in real time.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border border-[#d9d8d2] bg-[#fbfbfa] p-5 transition hover:border-[#171717]"
              >
                <h3 className="text-lg font-black text-[#171717]">{feature.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#55544f]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d8d2] bg-[#2f2f2d] px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black leading-tight text-white">
            Ready to simplify your events?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-semibold leading-snug text-white/65">
            Join organizers who&apos;ve replaced chaos with clarity. Start planning in
            minutes.
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
