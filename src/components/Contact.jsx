import { ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import AvatarStack from "./ui/AvatarStack";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = ({ setPopup }) => {
  return (
    <>
      <motion.section
        id="contact"
        className="py-10 md:py-14 lg:py-8 mb-4"
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(15,23,42,0.12)]">
            <div className="al-canvas">
              <div className="al-dots" />
              <div className="al-blob al-blob-blue w-72 h-72 -left-16 -top-16" />
              <div className="al-blob al-blob-cyan w-64 h-64 right-0 top-10" />
              <div className="al-blob al-blob-emerald w-56 h-56 left-1/3 bottom-0" />
              <div className="al-noise" />
            </div>
            <div className="relative flex flex-col items-center text-center px-4 py-9">
              <h2 className="max-w-4xl al-display text-4xl  font-bold  leading-tight max-md:text-xl">
                Ready to take your{" "}
                <span className="al-gradient-text">trade abroad?</span>
              </h2>
              <p className="al-lead mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-7">
                Send your resume and we'll match you with verified opportunities
                in Slovakia, Croatia, and Slovenia with a clear recruitment
                timeline.
              </p>
              <div className="mt-4">
                <button
                  className="flex items-center gap-2 rounded-xl text-white bg-black px-4 py-2 text-sm sm:text-base font-semibold text-slate-900 hover:bg-gray-800 transition"
                  onClick={() => setPopup(true)}
                >
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="mt-4 flex flex-col items-center">
                 <AvatarStack center={true} label={false} />
                <p className="al-lead mt-3 text-xs sm:text-sm text-slate-300">
                  Join candidates already on the corridor
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
