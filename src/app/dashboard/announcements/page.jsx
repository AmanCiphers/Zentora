'use client'

import { useState } from 'react'

const initialAnnouncements = [
  { id: 1, title: 'Schedule Change', message: 'The keynote has been moved to 10:00 AM in Hall A.', date: '2 hours ago', sent: true },
  { id: 2, title: 'Wi-Fi Info', message: 'Network: Eventify_Guest | Password: welcome2026', date: 'Yesterday', sent: true },
  { id: 3, title: 'Survey Reminder', message: 'Please fill out the post-event survey — we value your feedback!', date: '3 days ago', sent: true },
]

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements)
  const [form, setForm] = useState({ title: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.message) return
    setAnnouncements([
      { id: Date.now(), ...form, date: 'Just now', sent: true },
      ...announcements,
    ])
    setForm({ title: '', message: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
        <p className="text-gray-600 mt-1">Broadcast messages to your attendees in real time.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <h2 className="font-semibold text-gray-900">New Announcement</h2>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                id="title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                placeholder="e.g. Schedule Update"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none"
                placeholder="Type your announcement..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
            >
              Send to All Attendees
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-4">Sent Announcements</h2>
          <div className="space-y-3">
            {announcements.map((a) => (
              <div key={a.id} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{a.title}</h3>
                  <span className="text-xs text-gray-400">{a.date}</span>
                </div>
                <p className="text-sm text-gray-600">{a.message}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-gray-400">Delivered</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
