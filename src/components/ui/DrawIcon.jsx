import { motion } from 'framer-motion'

const draw = (delay = 0, duration = 0.85) => ({
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      pathLength: { delay, duration, ease: [0.16, 1, 0.3, 1] },
    },
  },
})

function DrawSvg({ size = 24, className = '', delay = 0, children, ...props }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
      {...props}
    >
      {typeof children === 'function' ? children(delay) : children}
    </motion.svg>
  )
}

export function DrawMapPin({ size = 13, className = '', delay = 0 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <>
          <motion.path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            variants={draw(d, 0.9)}
          />
          <motion.circle cx="12" cy="10" r="3" variants={draw(d + 0.15, 0.7)} />
        </>
      )}
    </DrawSvg>
  )
}

export function DrawArrowRight({ size = 16, className = '', delay = 0.2 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <>
          <motion.path d="M5 12h14" variants={draw(d, 0.7)} />
          <motion.path d="m12 5 7 7-7 7" variants={draw(d + 0.12, 0.7)} />
        </>
      )}
    </DrawSvg>
  )
}

export function DrawMenu({ size = 18, className = '', delay = 0 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <>
          <motion.path d="M4 5h16" variants={draw(d, 0.45)} />
          <motion.path d="M4 12h16" variants={draw(d + 0.08, 0.45)} />
          <motion.path d="M4 19h16" variants={draw(d + 0.16, 0.45)} />
        </>
      )}
    </DrawSvg>
  )
}

export function DrawX({ size = 18, className = '', delay = 0 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <>
          <motion.path d="M18 6 6 18" variants={draw(d, 0.5)} />
          <motion.path d="m6 6 12 12" variants={draw(d + 0.1, 0.5)} />
        </>
      )}
    </DrawSvg>
  )
}

export function DrawPlane({ size = 15, className = '', delay = 0.35 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <motion.path
          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
          variants={draw(d, 1.1)}
        />
      )}
    </DrawSvg>
  )
}

export function DrawShieldCheck({ size = 15, className = '', delay = 0.45 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <>
          <motion.path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            variants={draw(d, 0.95)}
          />
          <motion.path d="m9 12 2 2 4-4" variants={draw(d + 0.2, 0.55)} />
        </>
      )}
    </DrawSvg>
  )
}

export function DrawBadgeCheck({ size = 14, className = '', delay = 0.55 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <>
          <motion.path
            d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            variants={draw(d, 0.9)}
          />
          <motion.path d="m9 12 2 2 4-4" variants={draw(d + 0.2, 0.5)} />
        </>
      )}
    </DrawSvg>
  )
}

export function DrawGlobe({ size = 14, className = '', delay = 0.65 }) {
  return (
    <DrawSvg size={size} className={className} delay={delay}>
      {(d) => (
        <>
          <motion.circle cx="12" cy="12" r="10" variants={draw(d, 0.85)} />
          <motion.path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" variants={draw(d + 0.12, 0.85)} />
          <motion.path d="M2 12h20" variants={draw(d + 0.22, 0.6)} />
        </>
      )}
    </DrawSvg>
  )
}
