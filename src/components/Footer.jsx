import Link from 'next/link'

const footerLinks = {
  Platform: [
    { label: 'Register', href: '/register' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Events', href: '/dashboard/events' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Help Center', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Privacy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[#d9d8d2] bg-[#2f2f2d] text-white">
      <div className="px-6 py-12 sm:px-10 lg:px-20 xl:px-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-2xl font-black text-white">Zentora</span>
            <p className="mt-3 max-w-xs text-sm font-semibold leading-relaxed text-white/65">
              Eliminate the chaos of event planning. Registration, scheduling, announcements, and check-ins — all in one platform.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">{title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/15 pt-8">
          <p className="text-sm font-semibold text-white/50">
            &copy; {new Date().getFullYear()} Zentora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
