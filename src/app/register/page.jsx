'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    event: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Registration Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            We&apos;ve sent a confirmation to <strong>{form.email}</strong>. You&apos;ll receive event updates and your QR check-in code shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', event: '', phone: '' }) }}
            className="text-purple-600 font-medium hover:text-purple-700"
          >
            Register another attendee
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Registration</h1>
          <p className="text-gray-600">
            Sign up for an event. It only takes a minute.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">
              Select Event
            </label>
            <select
              id="event"
              name="event"
              required
              value={form.event}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
            >
              <option value="">Choose an event...</option>
              <option value="tech-conf-2026">Tech Connect 2026</option>
              <option value="design-summit">Design Summit</option>
              <option value="startup-weekend">Startup Weekend</option>
              <option value="ai-workshop">AI Workshop Series</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  )
}
