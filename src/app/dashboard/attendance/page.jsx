'use client'

import { useState } from 'react'

const initialAttendees = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', event: 'Tech Connect 2026', checkedIn: true, time: '9:15 AM' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', event: 'Tech Connect 2026', checkedIn: true, time: '9:30 AM' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', event: 'Tech Connect 2026', checkedIn: false, time: null },
  { id: 4, name: 'David Brown', email: 'david@example.com', event: 'Design Summit', checkedIn: true, time: '10:00 AM' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', event: 'Design Summit', checkedIn: false, time: null },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com', event: 'Tech Connect 2026', checkedIn: false, time: null },
]

export default function AttendancePage() {
  const [attendees, setAttendees] = useState(initialAttendees)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const toggleCheckIn = (id) => {
    setAttendees(attendees.map((a) =>
      a.id === id
        ? { ...a, checkedIn: !a.checkedIn, time: !a.checkedIn ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null }
        : a
    ))
  }

  const filtered = attendees.filter((a) => {
    const matchesFilter = filter === 'all' || (filter === 'checked' && a.checkedIn) || (filter === 'unchecked' && !a.checkedIn)
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const checkedCount = attendees.filter((a) => a.checkedIn).length

  return (
    <div className="px-6 py-8 sm:px-10 lg:px-20 xl:px-28">
      <div className="mb-8">
        <span className="text-sm font-black uppercase tracking-[0.18em] text-[#62615d]">Check-in</span>
        <h1 className="mt-1 text-3xl font-black text-[#171717]">Attendance</h1>
        <p className="mt-1 text-sm font-semibold text-[#55544f]">Track and manage attendee check-ins.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="border border-[#d9d8d2] bg-[#fbfbfa] p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Total Registered</p>
          <p className="mt-2 text-4xl font-black text-[#171717]">{attendees.length}</p>
        </div>
        <div className="border border-[#d9d8d2] bg-[#fbfbfa] p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Checked In</p>
          <p className="mt-2 text-4xl font-black text-[#171717]">{checkedCount}</p>
        </div>
        <div className="border border-[#d9d8d2] bg-[#fbfbfa] p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Check-in Rate</p>
          <p className="mt-2 text-4xl font-black text-[#171717]">{attendees.length ? Math.round((checkedCount / attendees.length) * 100) : 0}%</p>
        </div>
      </div>

      <div className="border border-[#d9d8d2] bg-[#fbfbfa] p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full sm:max-w-xs border border-[#d9d8d2] bg-white px-3 font-semibold text-[#171717] outline-none transition placeholder:text-[#77766f] focus:border-[#171717]"
          />
          <div className="flex gap-2">
            {['all', 'checked', 'unchecked'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] transition ${
                  filter === f ? 'bg-[#171717] text-white' : 'border border-[#d9d8d2] bg-white text-[#55544f] hover:border-[#171717]'
                }`}
              >
                {f === 'all' ? 'All' : f === 'checked' ? 'Checked In' : 'Pending'}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#d9d8d2]">
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Name</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Email</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Event</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Status</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Time</th>
                <th className="pb-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[#62615d]">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={a.id} className="border-b border-[#d9d8d2] last:border-0">
                  <td className="py-3 pr-4 font-black text-[#171717]">{a.name}</td>
                  <td className="py-3 pr-4 font-semibold text-[#62615d]">{a.email}</td>
                  <td className="py-3 pr-4 font-semibold text-[#62615d]">{a.event}</td>
                  <td className="py-3 pr-4">
                    <span className={`px-2.5 py-1 text-xs font-black ${
                      a.checkedIn ? 'bg-[#171717] text-white' : 'bg-[#efeee8] text-[#55544f]'
                    }`}>
                      {a.checkedIn ? 'Checked In' : 'Pending'}
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-semibold text-[#77766f]">{a.time || '--'}</td>
                  <td className="py-3">
                    <button
                      onClick={() => toggleCheckIn(a.id)}
                      className={`px-3 py-1.5 text-xs font-black transition ${
                        a.checkedIn
                          ? 'border border-[#d9d8d2] bg-white text-[#55544f] hover:border-[#171717]'
                          : 'border border-[#171717] bg-[#171717] text-white hover:bg-transparent hover:text-[#171717]'
                      }`}
                    >
                      {a.checkedIn ? 'Undo' : 'Check In'}
                    </button>
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
