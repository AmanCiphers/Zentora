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
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]')
    registrations.push({ ...form, id: Date.now(), registeredAt: new Date().toISOString() })
    localStorage.setItem('registrations', JSON.stringify(registrations))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-28">
        <div className="w-full max-w-lg text-center">
          <div className="border border-[#d9d8d2] bg-[#fbfbfa] p-6">
            <div className="mx-auto flex size-14 items-center justify-center border border-[#171717] bg-white">
              <svg className="size-6 text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mt-4 text-2xl font-black text-[#171717]">Registration Confirmed!</h1>
            <p className="mt-2 text-sm font-semibold leading-snug text-[#55544f]">
              We&apos;ve sent a confirmation to <strong className="text-[#171717]">{form.email}</strong>. You&apos;ll receive your QR check-in code shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', event: '', phone: '' }) }}
              className="mt-6 border border-[#171717] px-5 py-2.5 text-sm font-black text-[#171717] transition hover:bg-[#171717] hover:text-white"
            >
              Register Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16 sm:px-10 lg:px-20 xl:px-28">
      <div className="w-full max-w-lg">
        <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Get Started</span>
        <h1 className="mt-2 text-4xl font-black leading-[1.05] text-[#171717]">Event Registration</h1>
        <p className="mt-2 text-sm font-semibold text-[#55544f]">Sign up for an event. It only takes a minute.</p>
        <form onSubmit={handleSubmit} className="mt-8 border border-[#d9d8d2] bg-[#fbfbfa] p-6 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="event" className="block text-sm font-black uppercase tracking-[0.14em] text-[#62615d] mb-2">
              Select Event
            </label>
            <select
              id="event"
              name="event"
              required
              value={form.event}
              onChange={handleChange}
              className="h-11 w-full border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition focus:border-[#171717]"
            >
              <option value="" disabled>Choose an event...</option>
              <option value="tech-conf-2026">Tech Connect 2026</option>
              <option value="design-summit">Design Summit</option>
              <option value="startup-weekend">Startup Weekend</option>
              <option value="ai-workshop">AI Workshop Series</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full border border-[#171717] bg-[#171717] px-5 py-3 text-sm font-black text-white transition hover:bg-transparent hover:text-[#171717]"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  )
}
