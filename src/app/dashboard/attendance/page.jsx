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
      a.id === id ? { ...a, checkedIn: !a.checkedIn, time: !a.checkedIn ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null } : a
    ))
  }

  const filtered = attendees.filter((a) => {
    const matchesFilter = filter === 'all' || (filter === 'checked' && a.checkedIn) || (filter === 'unchecked' && !a.checkedIn)
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const checkedCount = attendees.filter((a) => a.checkedIn).length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Attendance / Check-in</h1>
        <p className="text-gray-600 mt-1">Track and manage attendee check-ins.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500 mb-1">Total Registered</p>
          <p className="text-2xl font-bold text-gray-900">{attendees.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500 mb-1">Checked In</p>
          <p className="text-2xl font-bold text-green-600">{checkedCount}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500 mb-1">Check-in Rate</p>
          <p className="text-2xl font-bold text-purple-600">{attendees.length ? Math.round((checkedCount / attendees.length) * 100) : 0}%</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
          />
          <div className="flex gap-2">
            {['all', 'checked', 'unchecked'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
              <tr className="border-b border-gray-100">
                <th className="text-left pb-3 font-medium text-gray-500">Name</th>
                <th className="text-left pb-3 font-medium text-gray-500">Email</th>
                <th className="text-left pb-3 font-medium text-gray-500">Event</th>
                <th className="text-left pb-3 font-medium text-gray-500">Status</th>
                <th className="text-left pb-3 font-medium text-gray-500">Time</th>
                <th className="text-left pb-3 font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={a.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 font-medium text-gray-900">{a.name}</td>
                  <td className="py-3 text-gray-600">{a.email}</td>
                  <td className="py-3 text-gray-600">{a.event}</td>
                  <td className="py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      a.checkedIn ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {a.checkedIn ? 'Checked In' : 'Pending'}
                    </span>
                  </td>
                  <td className="py-3 text-gray-500">{a.time || '--'}</td>
                  <td className="py-3">
                    <button
                      onClick={() => toggleCheckIn(a.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        a.checkedIn
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
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
