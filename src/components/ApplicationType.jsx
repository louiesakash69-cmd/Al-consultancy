import { Building2, Users, ArrowRight } from "lucide-react";

function ApplicationType({ setSelect }) {
  return (
    <>
      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 sm:mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
        Apply now
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
        Apply as a{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          company
        </span>{" "}
        or{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          candidate
        </span>
      </h2>
      <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-500">
        Choose the option that fits you. Every stage, cost and timeline is
        stated up front.
      </p>
      <div className="mt-4 sm:mt-6 md:mt-8 space-y-2.5 sm:space-y-3">
        <button
          onClick={() => setSelect("company")}
          className="group w-full rounded-xl sm:rounded-2xl border border-white/60 bg-white/40 backdrop-blur-sm p-3.5 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 hover:border-blue-500/40 hover:bg-blue-50/50 hover:shadow-sm transition text-left"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0">
            <Building2 className="text-blue-600" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-slate-900">
              Company
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Hire verified, trade-tested talent for your business.
            </p>
          </div>
          <ArrowRight
            size={16}
            className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition shrink-0"
          />
        </button>
        <button
          onClick={() => setSelect("employee")}
          className="group w-full rounded-xl sm:rounded-2xl border border-white/60 bg-white/40 backdrop-blur-sm p-3.5 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 hover:border-cyan-500/40 hover:bg-cyan-50/50 hover:shadow-sm transition text-left"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-cyan-50/80 border border-cyan-100 flex items-center justify-center shrink-0">
            <Users className="text-cyan-600" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-slate-900">
              Candidate
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Find a verified role and build your career abroad.
            </p>
          </div>
          <ArrowRight
            size={16}
            className="text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition shrink-0"
          />
        </button>
      </div>
    </>
  );
}

export default ApplicationType;
