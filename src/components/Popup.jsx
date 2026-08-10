import { useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";
import ApplicationType from "./ApplicationType";
import CompanyForm from "./CompanyForm";
import EmployeeForm from "./EmployeeForm";

function Popup({ popup, setPopup, select, setSelect }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-md p-3 sm:p-4">
      <div
        className={`relative w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl ${heightClass} bg-white/70 backdrop-blur-2xl rounded-2xl sm:rounded-3xl md:rounded-[28px] shadow-2xl border border-white/60 ring-1 ring-slate-900/5 overflow-hidden p-5 sm:p-7 md:p-9 lg:p-10 flex flex-col`}
      >
        <div className="pointer-events-none absolute -top-20 -right-20 sm:-top-24 sm:-right-24 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-24 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-cyan-300/20 to-blue-400/10 blur-3xl" />
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
            onClick={closePopup}
            aria-label="Close"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/60 backdrop-blur border border-white/70 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white/90 transition"
          >
            <X size={16} className="sm:hidden" />
            <X size={18} className="hidden sm:block" />
          </button>
        </div>
        <div
          className={`relative z-[1] flex-1 min-h-0 flex flex-col ${
            select === "" ? "justify-center" : "justify-start"
          }`}
        >
          {select === "" && <ApplicationType setSelect={setSelect} />}
          {select === "company" && <CompanyForm setSelect={setSelect} />}
          {select === "employee" && <EmployeeForm setSelect={setSelect} />}
        </div>
      </div>
    </div>
  );
}

export default Popup;
