import { ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

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
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/80 to-slate-900/85"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"></div>
            <div className="relative flex flex-col items-center text-center px-4 py-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-[6px] sm:text-xs font-semibold tracking-[2px] uppercase text-emerald-300">
                  Applications Open
                </span>
              </div>
              <h2 className="max-w-4xl al-display al-h2 font-bold text-white leading-tight">
                Ready to take your trade abroad?
              </h2>
              <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-300">
                Send your resume and we'll match you with verified opportunities
                in Slovakia, Croatia, and Slovenia with a clear recruitment
                timeline.
              </p>
              <div className="mt-8">
                <button
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-4 text-sm sm:text-base font-semibold text-slate-900 hover:bg-slate-300 transition"
                  onClick={() => setPopup(true)}
                >
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/vector-1767330125626-bbf826e86b91?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/vector-1749124647885-49713a8d2750?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/vector-1749124647885-49713a8d2750?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 object-cover"
                  />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center">
                    <Plus size={16} className="text-white" />
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-300">
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
