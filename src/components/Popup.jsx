import { useEffect, useState } from "react";
import { X, Building2, Users } from "lucide-react";
import CompanyForm from "./forms/Companyform";
import EmployeeForm from "./forms/Employeeform";

function Popup({ popup, setPopup }) {
  const [select, setSelect] = useState("employee");

  useEffect(() => {
    if (!popup) return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    setSelect("employee");

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [popup]);

  if (!popup) return null;

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-md p-4">
      <div className="relative w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white/70 backdrop-blur-2xl rounded-2xl sm:rounded-3xl md:rounded-[28px] shadow-2xl border border-white/60 ring-1 ring-slate-900/5 overflow-hidden p-4 flex flex-col">
        
        {/* Decorative background */}
        <div className="pointer-events-none absolute -top-20 -right-20 sm:-top-24 sm:-right-24 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-300/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-24 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-cyan-300/20 to-blue-400/10 blur-3xl" />

        {/* Header */}
        <div className="relative z-10 flex justify-end mb-3">
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

        {/* Tabs */}
        <div className="relative z-10 flex p-1 mb-5 sm:mb-6 bg-slate-100/70 rounded-xl sm:rounded-2xl border border-slate-200/60">
          <button
            type="button"
            onClick={() => setSelect("employee")}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition ${
              select === "employee"
                ? "bg-white text-cyan-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Users size={16} />
            Candidate
          </button>

          <button
            type="button"
            onClick={() => setSelect("company")}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition ${
              select === "company"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Building2 size={16} />
            Company
          </button>
        </div>

        {/* Form */}
        <div className="relative z-10 min-h-0">
          {select === "employee" && <EmployeeForm />}
          {select === "company" && <CompanyForm />}
        </div>
      </div>
    </div>
  );
}

export default Popup;