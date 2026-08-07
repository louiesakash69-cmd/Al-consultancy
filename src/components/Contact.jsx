import { ArrowRight, Plus, X, Building2, Users } from "lucide-react";
import { useState } from "react";
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
const Contact = () => {
  const [popup, setpopup] = useState(false);
  const [select, setselect] = useState("");
  return (
    <>
      <motion.section
        id="contact"
        className="py-10 md:py-14 lg:py-4 mb-4"
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="relative flex flex-col items-center text-center px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[2px] uppercase text-emerald-300">
                  Applications Open
                </span>
              </div>
              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to take your trade abroad?
              </h1>
              <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-300">
                Send your resume and we'll match you with verified opportunities
                in Slovakia, Croatia, and Slovenia with a clear recruitment
                timeline.
              </p>
              <div className="mt-8">
                <button
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 sm:px-6 lg:px-8 text-sm sm:text-base font-semibold text-slate-900 hover:bg-slate-300 transition"
                  onClick={() => setpopup(true)}
                >
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80"
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&h=160&q=80"
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80"
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
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-[90%] max-w-md md:max-w-xl lg:max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8">
            <button
              onClick={() => {
                setpopup(false);
                setselect("");
              }}
              className="absolute top-4 right-4 md:top-5 md:right-5 text-gray-500 hover:text-black transition"
            >
              <X size={24} />
            </button>
            {select === "" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900">
                  Apply As
                </h2>
                <p className="mt-2 md:mt-3 text-sm md:text-base text-center text-gray-500">
                  Please choose your application type.
                </p>
                <div className="mt-6 md:mt-8 space-y-4">
                  <button
                    onClick={() => setselect("company")}
                    className="w-full rounded-2xl border border-gray-200 p-4 md:p-5 flex items-center gap-4 hover:border-sky-500 hover:bg-sky-50 transition"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sky-100 flex items-center justify-center">
                      <Building2
                        className="text-sky-600"
                        size={window.innerWidth < 768 ? 22 : 28}
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-base md:text-lg">
                        Company
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">
                        Hire skilled candidates for your business.
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setselect("employee")}
                    className="w-full rounded-2xl border border-gray-200 p-4 md:p-5 flex items-center gap-4 hover:border-green-500 hover:bg-green-50 transition"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 flex items-center justify-center">
                      <Users
                        className="text-green-600"
                        size={window.innerWidth < 768 ? 22 : 28}
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-base md:text-lg">
                        Employee
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">
                        Find jobs and apply for overseas opportunities.
                      </p>
                    </div>
                  </button>
                </div>
              </>
            )}
            {select === "company" && (
              <>
                <button
                  onClick={() => setselect("")}
                  className="text-sky-600 text-2xl mb-4"
                >
                  ←
                </button>
                <h2 className="text-1xl md:text-3xl font-bold mb-6">
                  Company Registration
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Contact Person"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <textarea
                    rows={2}
                    placeholder="Hiring Requirements"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base resize-none"
                  />
                  <button className="w-full h-[40px] rounded-xl bg-sky-500 py-2 text-white font-semibold hover:bg-sky-600">
                    Submit
                  </button>
                </form>
              </>
            )}
            {select === "employee" && (
              <>
                <button
                  onClick={() => setselect("")}
                  className="text-green-600 text-2xl mb-4"
                >
                  ←
                </button>
                <h2 className="text-1xl md:text-3xl font-bold mb-6">
                  Employee Registration
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Preferred Job Role"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <input
                    type="file"
                    className="w-full h-[40px] rounded-xl border border-gray-300 px-4 py-3 text-sm md:text-base"
                  />
                  <button className="w-full h-[40px] text-center rounded-xl bg-green-600 py-2 text-white font-semibold hover:bg-green-700">
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
