import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import { DrawArrowRight, DrawMenu, DrawX } from './ui/DrawIcon'
import logo from '../assets/logoo.png'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why us', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
]

const Header = ({ setPopup }) => {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
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
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid || open
          ? 'bg-white/85 backdrop-blur-xl border-b border-[#D0D7DE]/80 shadow-[0_4px_24px_-8px_rgba(16,52,99,0.12)] py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* Logo with tactile spring response */}
          <motion.a
            href="#top"
            className="flex items-center min-w-0"
            onClick={() => setOpen(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={logo}
              alt="AL Consultancy"
              className="h-9 sm:h-11 w-auto object-contain"
              width="150"
              height="44"
              decoding="async"
            />
          </motion.a>

          {/* Desktop Nav with Floating Indicator Pill */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-2 py-1 rounded-full border border-[#D0D7DE]/70 shadow-sm relative"
            aria-label="Primary"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 z-10 ${
                  hoveredIndex === index ? 'text-[#103463]' : 'text-slate-600 hover:text-[#103463]'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="header-nav-pill"
                    className="absolute inset-0 bg-[#E5EAED]/80 rounded-full -z-10 border border-[#D0D7DE]/80"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:block">
            <MagneticButton variant="primary" size="sm" onClick={() => setPopup(true)}>
              Apply now
              <DrawArrowRight size={16} delay={0.2} />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="al-mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="w-10 h-10 rounded-xl bg-white border border-[#D0D7DE] flex items-center justify-center text-[#103463] lg:hidden shadow-sm"
          >
            {open ? <DrawX size={18} key="x" /> : <DrawMenu size={18} key="menu" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="al-mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-[#D0D7DE] shadow-2xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-5 space-y-2">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-base font-semibold text-[#103463] hover:bg-[#E5EAED]/60 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-[#D0D7DE]/70">
                <MagneticButton
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    setOpen(false)
                    setPopup(true)
                  }}
                >
                  Apply now
                  <DrawArrowRight size={16} delay={0.1} />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
