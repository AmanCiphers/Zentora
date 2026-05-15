const statusStyles = {
  upcoming: 'bg-[#171717] text-white',
  ongoing: 'bg-[#171717] text-white',
  completed: 'bg-[#efeee8] text-[#55544f]',
}

export default function EventCard({ event }) {
  return (
    <div className="group border border-[#d9d8d2] bg-[#fbfbfa] p-5 transition hover:border-[#171717]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-black text-[#171717] truncate">{event.title}</h3>
          <p className="mt-1.5 text-sm font-semibold leading-snug text-[#55544f] line-clamp-2">{event.description}</p>
        </div>
        <span className={`shrink-0 px-2.5 py-1 text-xs font-black ${statusStyles[event.status] || statusStyles.upcoming}`}>
          {event.status}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#62615d]">
        <span className="flex items-center gap-1.5">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          {event.date}
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {event.location}
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {event.attendees} attendees
        </span>
      </div>
    </div>
  )
}
