import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "./ui/Counter";
import MagneticButton from "./ui/MagneticButton";
import { DrawArrowRight } from "./ui/DrawIcon";
import alvideor from "../assets/videos/al-bg-video-r.mp4";

const statItems = [
  {
    value: 50,
    suffix: "+",
    label: "Global Placements",
    subLabel: "Candidates placed",
  },
  {
    value: 3,
    suffix: "",
    label: "Active Corridors",
    subLabel: "Slovakia & Europe",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years of Trust",
    subLabel: "Direct employers",
  },
];

const Hero = ({ setPopup }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Smooth subtle parallax
  const videoY = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex flex-col justify-center pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white"
    >
      {/* 1. BACKGROUND: Full-Bleed Rotating Earth Video - 100% unblocked & colorful */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-[75%_50%] md:object-[65%_50%]"
        >
          <source src={alvideor} type="video/mp4" />
        </video>
      </motion.div>

      {/* 2. DUAL-SIDED SOFT SHEER GRADIENT */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-white via-white/85 to-transparent md:w-[70%]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-white via-transparent to-white/30" />

      {/* 3. HERO MAIN CONTENT */}
      <div className="relative z-[2] mx-auto max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 2xl:gap-16 items-center">
          
          {/* Left Column: Typography, CTAs & Stats */}
          <div className="lg:col-span-8 2xl:col-span-7">
            
            {/* Active Recruitment Pill - Single row on mobile with no extra margins */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D0D7DE] shadow-xs mb-4 sm:mb-5 max-w-full"
            >
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#103463]"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] 2xl:text-xs font-bold text-[#103463] uppercase tracking-wider whitespace-nowrap truncate">
                Hiring actively in Europe and Slovakia
              </span>
            </motion.div>

            {/* Headline - Enhanced brand color gradation */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] 2xl:text-[4.75rem] font-black tracking-[-0.035em] text-[#103463] leading-[1.08]"
            >
              Connecting Talent
              <br />
              With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103463] via-[#2563EB] to-[#38BDF8]">
                global opportunities
              </span>
            </motion.h1>

            {/* Description - Justified across the row with clear corporate text color */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg 2xl:text-xl text-slate-700 max-w-xl 2xl:max-w-2xl font-normal leading-relaxed text-justify"
            >
              AL Consultancy helps skilled professionals explore international career
              opportunities with trusted employers across Slovakia and Europe. From understanding the
              opportunity to preparing documents and navigating the relocation process,
              we provide support throughout the journey.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center"
            >
              <MagneticButton variant="primary" onClick={() => setPopup(true)}>
                Start your career
                <DrawArrowRight size={17} delay={0.2} />
              </MagneticButton>
              <MagneticButton variant="ghost" href="#services" className="bg-white/90 backdrop-blur-md hover:bg-white">
                Our services
              </MagneticButton>
            </motion.div>

            {/* 3 CLEAN COMPACT METRIC SQUARES - WITH INCREASED VERTICAL SPACING BETWEEN NUMBER, TITLE & SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
              className="mt-7 sm:mt-10 max-w-xl 2xl:max-w-2xl"
            >
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                {statItems.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="p-3.5 sm:p-5 2xl:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D0D7DE] hover:border-[#103463] hover:shadow-md transition-all cursor-default flex flex-col items-center text-center justify-center min-h-[110px] sm:min-h-[130px]"
                  >
                    {/* Big Prominent Number Counter */}
                    <div className="text-3xl sm:text-4xl lg:text-[2.65rem] 2xl:text-5xl font-black text-[#103463] tracking-tight leading-none mb-3 sm:mb-3.5">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>

                    {/* Primary Bold Label */}
                    <div className="text-xs sm:text-sm 2xl:text-base font-extrabold text-slate-800 tracking-tight leading-tight mb-1.5 sm:mb-2">
                      {stat.label}
                    </div>

                    {/* Secondary Descriptive Subtext */}
                    <div className="text-[10px] sm:text-xs 2xl:text-sm font-semibold text-slate-500 tracking-tight">
                      {stat.subLabel}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Kept completely empty so the rotating Earth is 100% visible */}
          <div className="lg:col-span-4 2xl:col-span-5 hidden lg:block" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
