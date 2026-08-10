import { useEffect, useState } from 'react'
import MagneticButton from '../ui/MagneticButton'
import { DrawArrowRight, DrawMenu, DrawX } from '../ui/DrawIcon'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

const Header = ({ setPopup }) => {
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

  return (
    <header className={`al-header ${solid || open ? 'al-header-solid' : 'al-header-clear'} fixed top-0 left-0 right-0 z-50`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center min-w-0" onClick={() => setOpen(false)}>
            <img
              src="/al-consultancy-logo.png"
              alt="AL Consultancy"
              className="al-logo"
              width="180"
              height="48"
              decoding="async"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="al-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton variant="primary" size="sm" onClick={() => setPopup(true)}>
              Apply now
              <DrawArrowRight size={16} delay={0.25} />
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="al-mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="al-menu-toggle"
          >
            {open ? <DrawX size={18} key="x" /> : <DrawMenu size={18} key="menu" />}
          </button>
        </div>
      </div>

      <div
        id="al-mobile-nav"
        className={`al-drawer ${open ? 'al-drawer-open' : 'al-drawer-closed'}`}
      >
        <div className="mx-auto max-w-7xl px-5 pt-2 pb-5">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="al-drawer-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <MagneticButton
            variant="primary"
            href="#contact"
            className="mt-4 w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Apply now
            <DrawArrowRight size={16} delay={0.1} />
          </MagneticButton>
        </div>
      </div>
    </header>
  )
}

export default Header
