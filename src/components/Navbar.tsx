import { useState } from 'react'
import { site } from '../site'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo-hands.png" alt="Urban Projects logo" className="h-8 w-auto" />
          <span className="font-display text-xl font-extrabold uppercase tracking-wider">
            Urban<span className="text-brand">Projects</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Get a Quote
          </a>
        </nav>

        <button
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-charcoal" />
            <span className="block h-0.5 w-6 bg-charcoal" />
            <span className="block h-0.5 w-6 bg-charcoal" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-charcoal/10 bg-white px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-medium text-charcoal/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="block py-2.5 font-semibold text-brand"
          >
            {site.phone}
          </a>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 font-semibold text-[#1DA851]"
          >
            WhatsApp Us
          </a>
        </nav>
      )}
    </header>
  )
}
