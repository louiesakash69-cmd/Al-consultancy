import { useEffect, useState } from "react";
import { X, ArrowLeft, Building2, Users, ArrowRight } from "lucide-react";
import CompanyForm from "./forms/Companyform";
import EmployeeForm from "./forms/Employeeform";

function Popup({ popup, setPopup }) {
  const [select, setSelect] = useState("");

  useEffect(() => {
    if (!popup) return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [popup]);

  if (!popup) return null;

  const closePopup = () => {
    setPopup(false);
    setSelect("");
  };

  const heightClass =
    select === ""
      ? "h-[380px] sm:h-[420px] md:h-[440px] lg:h-[460px]"
      : "h-[540px] sm:h-[580px] md:h-[600px] lg:h-[620px]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-md p-4">
      <div
        className={`relative w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl ${heightClass} bg-white/70 backdrop-blur-2xl rounded-2xl sm:rounded-3xl md:rounded-[28px] shadow-2xl border border-white/60 ring-1 ring-slate-900/5 overflow-hidden p-4 flex flex-col`}
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -top-20 -right-20 sm:-top-24 sm:-right-24 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-300/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-24 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-cyan-300/20 to-blue-400/10 blur-3xl" />

        {/* Header controls */}
        <div className="relative z-10 flex items-center justify-between mb-2">
          {select !== "" ? (
            <button
              type="button"
              onClick={() => setSelect("")}
              aria-label="Back"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              <ArrowLeft size={15} className="sm:hidden" />
              <ArrowLeft size={16} className="hidden sm:block" />
            </button>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={closePopup}
            aria-label="Close"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/60 backdrop-blur border border-white/70 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white/90 transition"
          >
            <X size={16} className="sm:hidden" />
            <X size={18} className="hidden sm:block" />
          </button>
        </div>

        {/* Content */}
        <div
          className={`relative z-[1] flex-1 min-h-0 flex flex-col ${
            select === "" ? "justify-center" : "justify-start"
          }`}
        >
          {/* Application selection */}
          {select === "" && (
            <>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 sm:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Apply now
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Apply as{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  company
                </span>{" "}
                or{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  candidate
                </span>
              </h2>

              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-500">
                Choose the option that fits you. Every stage, cost and timeline
                is stated up front.
              </p>

              <div className="mt-4 sm:mt-6 md:mt-8 space-y-2.5 sm:space-y-3">
                <button
                  type="button"
                  onClick={() => setSelect("company")}
                  className="group w-full rounded-xl sm:rounded-2xl border border-white/60 bg-white/40 backdrop-blur-sm p-4 flex items-center gap-3 sm:gap-4 hover:border-blue-500/40 hover:bg-blue-50/50 hover:shadow-sm transition text-left"
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
                  type="button"
                  onClick={() => setSelect("employee")}
                  className="group w-full rounded-xl sm:rounded-2xl border border-white/60 bg-white/40 backdrop-blur-sm p-4 flex items-center gap-3 sm:gap-4 hover:border-cyan-500/40 hover:bg-cyan-50/50 hover:shadow-sm transition text-left"
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
          )}

          {/* Forms */}
          {select === "company" && <CompanyForm />}

          {select === "employee" && <EmployeeForm />}
        </div>
      </div>
    </div>
  );
}

export default Popup;