// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header
import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid || open
          ? 'border-b border-slate-900/10 bg-white/80 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="min-w-0 shrink-0" onClick={close}>
          <img
            src="/al-consultancy-logo.png"
            alt="AL Consultancy"
            className="h-9 w-auto object-contain md:h-12"
            width={180}
            height={48}
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-br from-[#101B33] via-slate-900 to-[#16233F] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg lg:inline-flex"
        >
          Apply now
          <ArrowRight size={16} strokeWidth={2.2} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/10 bg-slate-50 text-slate-900 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-900/10 bg-white/95 backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-5 py-4">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-slate-900/5 py-3 text-base font-semibold text-slate-900 last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={close}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              Apply now
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header