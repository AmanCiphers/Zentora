'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect, useId } from 'react'

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/register', label: 'Register' },
  { href: '/dashboard', label: 'Dashboard' },
]

const dropdownLinks = [
  { href: '/dashboard/events', label: 'All Events' },
  { href: '/dashboard/announcements', label: 'Announcements' },
  { href: '/dashboard/attendance', label: 'Attendance' },
]

const discoverLinks = [
  { href: '/events', label: 'Events' },
  { href: '/tutorials', label: 'Tutorials' },
]

const navLinks = [...mainLinks.slice(1), ...dropdownLinks]

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const id = useId()

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="flex items-center gap-1 text-sm font-black text-[#171717] hover:text-[#55544f] transition-colors cursor-pointer"
      >
        {label}
        <svg className={`size-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div id={id} className="absolute right-0 top-full mt-2 w-44 border border-[#d9d8d2] bg-[#fbfbfa] py-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm font-black text-[#171717] hover:bg-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  const mobileOverlay = menuOpen && (
    <>
      <div className="fixed inset-0 z-[80] bg-[#171717]/60 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)} />
      <div className="fixed right-0 top-0 z-[90] flex h-full w-[min(80vw,320px)] flex-col border-l border-white/10 bg-[#2f2f2d] p-6 pt-20 shadow-2xl lg:hidden">
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`px-4 py-3 text-lg font-bold transition-colors ${
              pathname === '/' ? 'bg-white/10 text-white rounded-md' : 'text-white/65 hover:bg-white/5 hover:text-white'
            }`}
          >
            Home
          </Link>
          {discoverLinks.map((link) => (
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
  )

  if (isHome) {
    return (
      <header className="absolute inset-x-0 top-0 z-[70]">
        <nav className="lg:grid lg:grid-cols-[1fr_480px] lg:items-start">
          <div className="flex min-h-24 items-center justify-between bg-transparent px-6 sm:px-10 lg:ml-20 ">
            <Link href="/" className="text-2xl font-black text-white">
              Zentora
            </Link>
            <div className="hidden items-center gap-8 lg:flex">
              {discoverLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-black text-white/78 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <div className="hidden min-h-24 items-center gap-6 bg-[#fbfbfa] px-6 text-[#171717] lg:flex">
            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-black text-[#171717] hover:text-[#55544f] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <NavDropdown label="More" items={dropdownLinks} />
          </div>
        </nav>
        {mobileOverlay}
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-[70] border-b border-white/15 bg-[#2f2f2d] text-white">
      <nav className="flex min-h-[72px] items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-28">
        <Link href="/" className="text-2xl font-black text-white">
          Zentora
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-black transition-colors ${
                pathname === link.href ? 'text-white' : 'text-white/62 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {discoverLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-black transition-colors ${
                pathname === link.href ? 'text-white' : 'text-white/62 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <NavDropdown label="Dashboard" items={dropdownLinks} />
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
            aria-expanded={menuOpen}
          >
            <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>
      {mobileOverlay}
    </header>
  )
}
