import { Globe, ArrowRight, BadgeCheck, Clock3, Globe2 } from "lucide-react";
const Contact = () => {
  return (
    <section id="contact" className="bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-20 h-[1px] bg-[#465467]"></span>
          <p className="text-sm font-semibold tracking-[3px] text-[#465467] uppercase">
            Contact Us
          </p>
        </div>
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F172A]">Let's Connect</h1>
          <p className="mt-5 text-lg text-gray-600 text-center leading-8 max-w-2xl">
            We're here to help you build a stronger workforce and achieve your
            global hiring goals.
          </p>
        </div>
        <div className="bg-[#253459] rounded-[30px] px-10 py-4 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-sky-400/30 flex items-center justify-center">
              <Globe size={52} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Ready to Hire Globally?
              </h2>
              <p className="mt-3 text-gray-300 max-w-xl leading-7">
                Partner with{" "}
                <span className="font-semibold text-white">AL Consultancy</span>{" "}
                to connect with skilled professionals across international
                markets.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-3 bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-4 py-2 rounded-full font-semibold text-lg shadow-lg hover:scale-105">
            Schedule a Consultation
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center">
              <BadgeCheck className="text-sky-600" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900">
                Free Consultation
              </h3>
              <p className="text-sm text-gray-600">
                Get expert guidance before getting started.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <Clock3 className="text-green-600" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900">
                Fast Response
              </h3>
              <p className="text-sm text-gray-600">Response within 24 hours.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
              <Globe2 className="text-purple-600" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900">
                Global Recruitment Experts
              </h3>
              <p className="text-sm text-gray-600">
                Connecting businesses with top international talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
