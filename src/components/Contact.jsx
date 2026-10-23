import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AvatarStack from "./ui/AvatarStack";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = ({ setPopup }) => {
  return (
    <section
      id="contact"
      className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative isolate overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#103463] via-[#174575] to-[#232D37] px-5 py-8 text-center shadow-2xl shadow-[#103463]/15 sm:rounded-[2.5rem] sm:px-10 sm:py-11 md:px-14 md:py-14 lg:px-20 lg:py-16"
        >
          {/* Decorative background shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10 sm:-right-12 sm:-top-28 sm:h-80 sm:w-80" />

            <div className="absolute -right-10 -top-14 h-48 w-48 rounded-full border border-[#4AB1CC]/30 sm:-right-2 sm:-top-16 sm:h-64 sm:w-64" />

            <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#4AB1CC]/10 blur-3xl sm:-bottom-36 sm:-left-12 sm:h-80 sm:w-80" />

            <div className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-[#4AB1CC] opacity-80" />

            <div className="absolute right-[16%] top-[36%] h-2 w-2 rounded-full bg-[#D0D7DE] opacity-70" />

            <div className="absolute bottom-[20%] right-[24%] h-4 w-4 rounded-full border-2 border-[#4AB1CC]/70" />

            <svg
              className="absolute bottom-0 left-0 h-28 w-full opacity-[0.08] sm:h-40"
              viewBox="0 0 1200 160"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 100C180 20 280 150 480 80S800 10 1000 80 1120 120 1200 40"
                stroke="#F5F7FA"
                strokeWidth="2"
              />
              <path
                d="M0 130C180 50 280 180 480 110S800 40 1000 110 1120 150 1200 70"
                stroke="#F5F7FA"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center">
            {/* Eyebrow label */}
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-xs font-semibold tracking-wide text-[#F5F7FA] shadow-sm backdrop-blur-sm sm:mb-5 sm:px-4 sm:text-sm"
            >
              <Sparkles size={15} className="text-[#4AB1CC]" />
              YOUR NEXT OPPORTUNITY STARTS HERE
            </motion.div>

            {/* Main heading */}
            <motion.h2
              variants={itemVariants}
              className="max-w-3xl text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-[#F5F7FA] sm:text-4xl md:text-5xl"
            >
              Ready to take your{" "}
              <span className="relative inline-block text-[#4AB1CC]">
                trade abroad?
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-2 w-full sm:-bottom-2 sm:h-3"
                  viewBox="0 0 240 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M3 8C60 2 160 2 237 7"
                    stroke="#4AB1CC"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-3xl text-sm leading-7 text-[#D0D7DE] sm:mt-5 sm:text-base md:text-lg"
            >
              Your skills can take you further. Send us your resume and let
              AL Consultancy help you explore verified opportunities in
              Slovakia, Croatia, and Slovenia—with a clear recruitment
              timeline to guide your next step.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-6 sm:mt-7">
              <button
                type="button"
                onClick={() => setPopup(true)}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#4AB1CC] px-7 py-3.5 text-sm font-bold text-[#103463] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A9DB8] hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4AB1CC]/40 active:translate-y-0 sm:w-auto sm:min-w-48 sm:px-8 sm:text-base"
              >
                Apply Now
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>

            {/* Candidate community */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex w-full flex-col items-center border-t border-white/15 pt-5 sm:mt-8 sm:pt-6"
            >
              <div className="flex items-center justify-center">
                <AvatarStack center={true} label={false} />
              </div>

              <p className="mt-2 text-xs font-medium text-[#D0D7DE] sm:text-sm">
                Join candidates already on the corridor
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

