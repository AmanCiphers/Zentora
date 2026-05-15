'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/register', label: 'Register' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/events', label: 'Events' },
  { href: '/dashboard/announcements', label: 'Announcements' },
  { href: '/dashboard/attendance', label: 'Attendance' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  if (isHome) {
    return (
      <header className="absolute inset-x-0 top-0 z-[70]">
        <nav className="xl:grid xl:grid-cols-[1fr_29vw] xl:items-start">
          <div className="flex min-h-24 items-center justify-between bg-transparent px-6 sm:px-10 lg:px-20 xl:px-10 xl:pl-28">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-white">Eventify</span>
            </Link>
            <div className="hidden items-center gap-8 xl:flex">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-white/78 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden text-white"
              aria-label="Toggle menu"
            >
              <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <div className="hidden min-h-24 items-center gap-8 bg-[#fbfbfa] px-10 text-[#171717] xl:flex">
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#62615d]">Platform</span>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-black text-[#171717] hover:text-[#55544f] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-[80] bg-[#171717]/60 backdrop-blur-sm xl:hidden" onClick={() => setMenuOpen(false)} />
            <div className="fixed right-0 top-0 z-[90] flex h-full w-[min(80vw,320px)] flex-col border-l border-white/10 bg-[#2f2f2d] p-6 pt-20 shadow-2xl transition-transform duration-300 xl:hidden">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 text-lg font-bold transition-colors ${
                      pathname === link.href ? 'bg-white/10 text-white rounded-md' : 'text-white/65 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-[70] border-b border-white/15 bg-[#2f2f2d] text-white">
      <nav className="flex min-h-[72px] items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-28">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-white">Eventify</span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition-colors ${
                pathname === link.href ? 'text-white' : 'text-white/62 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/register"
            className="border border-white px-4 py-2 text-sm font-black transition hover:bg-white hover:text-[#171717]"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-[80] bg-[#171717]/60 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)} />
          <div className="fixed right-0 top-0 z-[90] flex h-full w-[min(80vw,320px)] flex-col border-l border-white/10 bg-[#2f2f2d] p-6 pt-20 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-lg font-bold transition-colors ${
                    pathname === link.href ? 'bg-white/10 text-white rounded-md' : 'text-white/65 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
