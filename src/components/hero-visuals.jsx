import { motion } from 'framer-motion'
import alvideor from "../assets/videos/al-bg-video-r.mp4"
import {
  DrawBadgeCheck,
  DrawGlobe,
  DrawPlane,
  DrawShieldCheck,
} from './ui/DrawIcon'

const FLOATS = [
  {
    id: 'permits',
    title: 'EU work permits',
    note: 'Tracked end to end',
    Icon: DrawPlane,
    iconColor: 'text-[#103463]',
    iconBg: 'bg-[#EEF4FA]',
    flagColors: ['#FFFFFF', '#1E40AF', '#DC2626'], // Slovakia / EU
    place: 'al-hero-float--right',
    delay: 0.35,
  },
  {
    id: 'ethics',
    title: 'Ethical recruitment',
    note: 'Verified EU employers only',
    Icon: DrawShieldCheck,
    iconColor: 'text-[#16A34A]',
    iconBg: 'bg-[#F0FDF4]',
    flagColors: ['#DC2626', '#FFFFFF', '#1E40AF'], // Croatia
    place: 'al-hero-float--left',
    delay: 0.5,
  },
  {
    id: 'placement',
    title: 'India to Europe corridors',
    note: 'End-to-end relocation',
    Icon: DrawGlobe,
    iconColor: 'text-[#0284C7]',
    iconBg: 'bg-[#E0F2FE]',
    flagColors: ['#16A34A', '#FFFFFF', '#DC2626'], // Italy / Hungary
    place: 'al-hero-float--right--bottom',
    delay: 0.65,
  },
]

const cardEnter = (delay) => ({
  initial: { opacity: 0, y: 16, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
})

function FloatChip({ title, note, Icon, iconColor, iconBg, flagColors, place, delay }) {
  return (
    <motion.div
      className={`al-hero-float ${place}`}
      {...cardEnter(delay)}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <span className={`al-hero-float-icon ${iconBg} ${iconColor}`} aria-hidden="true">
        <Icon size={17} />
      </span>
      <div className="al-hero-float-copy">
        <div className="flex items-center gap-1.5">
          <p className="al-hero-float-title">{title}</p>
          {/* Vivid national tri-color flag indicator */}
          {flagColors && (
            <span className="inline-flex flex-col w-3.5 h-2.5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.15)] shrink-0">
              {flagColors.map((c, i) => (
                <span key={i} style={{ backgroundColor: c }} className="flex-1 w-full" />
              ))}
            </span>
          )}
        </div>
        <p className="al-hero-float-note">{note}</p>
      </div>
    </motion.div>
  )
}

export default function HeroVisual() {
  return (
    <div className="al-hero-visual">
      {/* Soft atmospheric ambient glow */}
      <div className="al-hero-glow" aria-hidden="true" />

      {/* Rotating Earth globe frame */}
      <motion.div
        className="al-hero-frame"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={alvideor} type="video/mp4" />
        </video>

        <div className="al-hero-sheen" aria-hidden="true" />
      </motion.div>

      {/* High-visibility floating interactive chips with full color flags & icons */}
      {FLOATS.map((item) => (
        <FloatChip key={item.id} {...item} />
      ))}
    </div>
  )
}
