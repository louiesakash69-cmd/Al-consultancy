import { motion } from 'framer-motion'
import heroimg from '../assets/hero-img-2.png'
import alvideol from "../assets/videos/al-bg-video-l.mp4"
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
    place: 'al-hero-float--right',
    delay: 0.4,
  },
  {
    id: 'ethics',
    title: 'Ethical recruitment',
    note: 'Verified employers only',
    Icon: DrawShieldCheck,
    place: 'al-hero-float--left',
    delay: 0.55,
  },
  {
    id: 'placement',
    title: 'End-to-end placement',
    note: 'India to EU corridors',
    Icon: DrawGlobe,
    place: 'al-hero-float--right--bottom',
    delay: 0.7,
  },
]

const cardEnter = (delay) => ({
  initial: { y: 14, scale: 0.97 },
  animate: {
    y: 0,
    scale: 1,
    transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
})

function FloatChip({ title, note, Icon, Extra, place, delay }) {
  return (
    <motion.div className={`al-hero-float ${place}`} {...cardEnter(delay)}>
      <span className="al-hero-float-icon" aria-hidden="true">
        <Icon size={15} />
      </span>
      <div className="al-hero-float-copy">
        <p className="al-hero-float-title">{title}</p>
        <p className="al-hero-float-note">{note}</p>
      </div>
      {Extra ? (
        <span className="al-hero-float-icon al-hero-float-icon--ghost" aria-hidden="true">
          <Extra size={14} />
        </span>
      ) : null}
    </motion.div>
  )
}

export default function HeroVisual() {
  return (
    <div className="al-hero-visual">
      <div className="al-hero-glow" aria-hidden="true" />

      <motion.div
        className="al-hero-frame"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* <img
          src={heroimg}
          alt="Professional building a global career"
          width="640"
          height="640"
          decoding="async"
        /> */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[100%_50%]"
        >
          <source src={alvideor} type="video/mp4" />
        </video>


        <div className="al-hero-sheen" aria-hidden="true" />
      </motion.div>

      {FLOATS.map((item) => (
        <FloatChip key={item.id} {...item} />
      ))}
    </div>
  )
}
