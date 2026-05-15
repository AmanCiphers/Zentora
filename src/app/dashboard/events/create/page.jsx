'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateEventPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const events = JSON.parse(localStorage.getItem('events') || '[]')
    events.push({
      id: Date.now(),
      ...form,
      attendees: 0,
      status: 'upcoming',
      capacity: Number(form.capacity) || 0,
    })
    localStorage.setItem('events', JSON.stringify(events))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="px-6 py-8 sm:px-10 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-lg text-center">
          <div className="border border-[#d9d8d2] bg-[#fbfbfa] p-6">
            <div className="mx-auto flex size-14 items-center justify-center border border-[#171717] bg-white">
              <svg className="size-6 text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mt-4 text-2xl font-black text-[#171717]">Event Created!</h1>
            <p className="mt-2 text-sm font-semibold leading-snug text-[#55544f]">
              {form.title} has been created and is ready for registrations.
            </p>
            <button
              onClick={() => router.push('/dashboard/events')}
              className="mt-6 border border-[#171717] bg-[#171717] px-5 py-2.5 text-sm font-black text-white transition hover:bg-transparent hover:text-[#171717]"
            >
              Back to Events
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 py-8 sm:px-10 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-2xl">
        <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Events</span>
        <h1 className="mt-1 text-3xl font-black text-[#171717]">Create Event</h1>
        <p className="mt-1 text-sm font-semibold text-[#55544f]">Set up a new event for attendees to discover and register.</p>

        <form onSubmit={handleSubmit} className="mt-8 border border-[#d9d8d2] bg-[#fbfbfa] p-6 space-y-5">
          <div>
            <label htmlFor="title" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
              placeholder="e.g. Tech Connect 2026"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              className="min-h-28 w-full border border-[#d9d8d2] bg-white p-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717] resize-none"
              placeholder="Describe your event..."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition focus:border-[#171717]"
              />
            </div>
            <div>
              <label htmlFor="capacity" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
                Capacity
              </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                min="1"
                value={form.capacity}
                onChange={handleChange}
                className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
                placeholder="e.g. 500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
              placeholder="e.g. Convention Center, SF"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-[#171717] bg-[#171717] px-5 py-3 text-sm font-black text-white transition hover:bg-transparent hover:text-[#171717]"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  )
}
