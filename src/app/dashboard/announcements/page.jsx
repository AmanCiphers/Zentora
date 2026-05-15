'use client'

import { useState } from 'react'

const initialAnnouncements = [
  { id: 1, title: 'Schedule Change', message: 'The keynote has been moved to 10:00 AM in Hall A.', date: '2 hours ago' },
  { id: 2, title: 'Wi-Fi Info', message: 'Network: Zentora_Guest. Check your email for the access password.', date: 'Yesterday' },
  { id: 3, title: 'Survey Reminder', message: 'Please fill out the post-event survey — we value your feedback!', date: '3 days ago' },
]

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements)
  const [form, setForm] = useState({ title: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.message) return
    setAnnouncements([
      { id: Date.now(), ...form, date: 'Just now' },
      ...announcements,
    ])
    setForm({ title: '', message: '' })
  }

  return (
    <div className="px-6 py-8 sm:px-10 lg:px-20 xl:px-28">
      <div className="mb-8">
        <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Communication</span>
        <h1 className="mt-1 text-3xl font-black text-[#171717]">Announcements</h1>
        <p className="mt-1 text-sm font-semibold text-[#55544f]">Broadcast messages to your attendees in real time.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="border border-[#d9d8d2] bg-[#fbfbfa] p-5 space-y-4">
            <h2 className="text-lg font-black text-[#171717]">New Announcement</h2>
            <div>
              <label htmlFor="title" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">Title</label>
              <input
                type="text"
                id="title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
                placeholder="e.g. Schedule Update"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-28 w-full border border-[#d9d8d2] bg-white p-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717] resize-none"
                placeholder="Type your announcement..."
              />
            </div>
            <button
              type="submit"
              className="w-full border border-[#171717] bg-[#171717] px-5 py-2.5 text-sm font-black text-white transition hover:bg-transparent hover:text-[#171717]"
            >
              Send to All Attendees
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-lg font-black text-[#171717] mb-4">Sent Announcements</h2>
          <div className="flex flex-col gap-3">
            {announcements.map((a) => (
              <div key={a.id} className="border border-[#d9d8d2] bg-[#fbfbfa] p-5 transition hover:border-[#171717]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-black text-[#171717]">{a.title}</h3>
                  <span className="shrink-0 text-xs font-semibold text-[#77766f]">{a.date}</span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-[#55544f]">{a.message}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-[#171717]" />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#62615d]">Delivered</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
