import { useEffect, useRef, useState } from "react";
import { X, Building2, Users, Check } from "lucide-react";
import CompanyForm from "./forms/Companyform";
import EmployeeForm from "./forms/Employeeform";

/* Keyframes used by the popup AND by the two forms (they only render inside it). */
const popupCss = `
  @keyframes rise {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(.6); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes drawCheck {
    from { stroke-dashoffset: 1; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes ripple {
    from { opacity: .55; transform: scale(.9); }
    to   { opacity: 0;   transform: scale(1.7); }
  }
  .sub-check { stroke-dasharray: 1; stroke-dashoffset: 0; }
  @media (prefers-reduced-motion: reduce) {
    .popup-anim, .popup-anim * { animation: none !important; transition: none !important; }
  }
`;

const SUCCESS_COPY = {
  candidate: {
    title: "Your application has been submitted",
    steps: [
      "We review your profile and experience.",
      "We match you with suitable verified vacancies.",
      "Our team contacts you by email.",
    ],
  },
  company: {
    title: "Your request has been submitted",
    steps: [
      "We review your workforce requirements.",
      "We shortlist candidates who fit the role.",
      "Our team contacts you by email.",
    ],
  },
};

function SubmitSuccess({ result, onClose }) {
  const copy = SUCCESS_COPY[result.type];
  const firstName = result.name?.split(" ")[0];

  return (
    <div
      role="status"
      aria-live="polite"
      className="popup-anim relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-2 py-6 text-center"
    >
      <div
        className="relative mb-6 flex h-24 w-24 items-center justify-center"
        style={{ animation: "popIn 500ms cubic-bezier(.2,.9,.3,1.2) both" }}
      >
        <span
          className="absolute inset-0 rounded-full bg-[#4AB1CC]/30"
          style={{ animation: "ripple 1.6s ease-out 400ms 2 both" }}
        />
        <span className="absolute inset-1 rounded-full bg-[#4AB1CC]/20" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#103463]">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
            <path
              className="sub-check"
              pathLength="1"
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="#4AB1CC"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: "drawCheck 500ms ease-out 350ms both" }}
            />
          </svg>
        </span>
      </div>

      <div style={{ animation: "rise 450ms ease-out 450ms both" }}>
        <h2 className="text-2xl font-bold tracking-tight text-[#103463] sm:text-3xl">
          {copy.title}
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#232D37]/70 sm:text-base">
          {firstName ? `Thank you, ${firstName}. ` : "Thank you. "}
          We've received your details and will get in touch at{" "}
          <span className="font-semibold text-[#103463] [overflow-wrap:anywhere]">
            {result.email}
          </span>
          .
        </p>
      </div>

      <ol
        className="mt-6 w-full max-w-sm space-y-2.5 text-left"
        style={{ animation: "rise 450ms ease-out 650ms both" }}
      >
        {copy.steps.map((text, i) => (
          <li
            key={text}
            className="flex items-center gap-3 rounded-xl border border-[#D0D7DE] bg-white px-3.5 py-2.5 text-sm text-[#232D37]/80"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4AB1CC]/20 text-xs font-bold text-[#103463]">
              {i + 1}
            </span>
            {text}
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={onClose}
        className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#103463] px-8 text-sm font-semibold text-white shadow-md transition hover:bg-[#17477F] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4AB1CC]/40"
        style={{ animation: "rise 450ms ease-out 800ms both" }}
        autoFocus
      >
        <Check size={17} className="text-[#4AB1CC]" />
        Back to website
      </button>
    </div>
  );
}

function Popup({ popup, setPopup }) {
  const [select, setSelect] = useState("employee");
  const [submitted, setSubmitted] = useState(null);
  const [contentH, setContentH] = useState(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!popup) return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    setSelect("employee");
    setSubmitted(null);
    setContentH(null);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [popup]);

  useEffect(() => {
    if (!popup) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPopup(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popup, setPopup]);

  // Make the popup exactly as tall as the form that is showing (up to the
  // screen height). It grows/shrinks on tab change, wizard step, error text.
  useEffect(() => {
    if (!popup || submitted || !innerRef.current) return;

    const el = innerRef.current;
    const observer = new ResizeObserver(() => setContentH(el.offsetHeight));

    observer.observe(el);
    setContentH(el.offsetHeight);

    return () => observer.disconnect();
  }, [popup, submitted]);

  if (!popup) return null;

  const closePopup = () => setPopup(false);

  const tabBase =
    "flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-2 py-2.5 text-xs font-semibold transition sm:py-3 sm:text-sm";

  const tabClass = (active) =>
    `${tabBase} ${
      active
        ? "bg-white text-[#103463] shadow-sm ring-1 ring-[#103463]/5"
        : "text-[#232D37]/65 hover:bg-white/50 hover:text-[#103463]"
    }`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#232D37]/65 p-2 backdrop-blur-md sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <style>{popupCss}</style>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="relative flex max-h-[calc(100dvh-1rem)] w-full max-w-[560px] flex-col overflow-hidden rounded-2xl border border-white/70 bg-[#F5F7FA]/95 p-3 shadow-2xl ring-1 ring-[#103463]/10 sm:max-h-[calc(100dvh-2rem)] sm:rounded-3xl sm:p-5"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#103463]/10 blur-3xl sm:h-56 sm:w-56" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#4AB1CC]/20 blur-3xl sm:h-52 sm:w-52" />

        {/* Fixed header */}
        <div className="relative z-10 mb-3 flex shrink-0 items-center justify-between sm:mb-4">
          <h2 id="popup-title" className="sr-only">
            Registration form
          </h2>

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#103463]/65">
            AL Consultancy
          </span>

          <button
            type="button"
            onClick={closePopup}
            aria-label="Close registration popup"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D0D7DE] bg-white/80 text-[#103463] transition hover:bg-[#103463] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4AB1CC]/30 sm:h-9 sm:w-9"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <SubmitSuccess result={submitted} onClose={closePopup} />
        ) : (
          <>
            {/* Fixed tabs */}
            <div
              role="tablist"
              aria-label="Registration type"
              className="relative z-10 mb-4 flex shrink-0 gap-1 rounded-2xl border border-[#D0D7DE]/80 bg-[#D0D7DE]/45 p-1 sm:mb-5"
            >
              <button
                id="candidate-tab"
                type="button"
                role="tab"
                aria-selected={select === "employee"}
                aria-controls="candidate-panel"
                onClick={() => setSelect("employee")}
                className={tabClass(select === "employee")}
              >
                <Users size={16} className="shrink-0" />
                <span>Candidate</span>
              </button>

              <button
                id="company-tab"
                type="button"
                role="tab"
                aria-selected={select === "company"}
                aria-controls="company-panel"
                onClick={() => setSelect("company")}
                className={tabClass(select === "company")}
              >
                <Building2 size={16} className="shrink-0" />
                <span>Company</span>
              </button>
            </div>

            {/* Scrollable form area.
                Both forms stay mounted (just hidden), so switching tabs
                no longer wipes what the person already typed. */}
            <div
              className="popup-anim relative z-10 min-h-0 shrink overflow-x-hidden overflow-y-auto overscroll-contain"
              style={{
                height: contentH ?? undefined,
                transition: "height 280ms ease",
                scrollbarGutter: "stable",
              }}
            >
              <div ref={innerRef} className="px-1 pb-1">
              <div
                id="candidate-panel"
                role="tabpanel"
                aria-labelledby="candidate-tab"
                hidden={select !== "employee"}
                style={{ animation: "rise 300ms ease-out both" }}
              >
                <EmployeeForm
                  onSuccess={(result) =>
                    setSubmitted({ type: "candidate", ...result })
                  }
                />
              </div>

              <div
                id="company-panel"
                role="tabpanel"
                aria-labelledby="company-tab"
                hidden={select !== "company"}
                style={{ animation: "rise 300ms ease-out both" }}
              >
                <CompanyForm
                  onSuccess={(result) =>
                    setSubmitted({ type: "company", ...result })
                  }
                />
              </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Popup;