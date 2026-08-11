import { ArrowRight } from "lucide-react";

const inputClass =
  "w-full h-10 sm:h-11 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm md:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50";

function CompanyForm() {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        Company registration
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1">
        Hire verified talent
      </h2>

      <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
        Tell us your hiring needs and a coordinator will follow up.
      </p>

      <form className="space-y-2.5 sm:space-y-3.5">
        <input
          type="text"
          placeholder="Company name"
          required
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Contact person"
          required
          className={inputClass}
        />

        <input
          type="email"
          placeholder="Email address"
          required
          className={inputClass}
        />

        <input
          type="tel"
          placeholder="Phone number"
          required
          className={inputClass}
        />

        <textarea
          rows={2}
          placeholder="Hiring requirements"
          required
          className="w-full rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm md:text-base text-slate-900 placeholder:text-slate-400 resize-none outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />

        <button
          type="submit"
          className="w-full h-11 sm:h-12 rounded-full bg-slate-900 text-white text-sm md:text-base font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition"
        >
          Submit request
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}

export default CompanyForm;