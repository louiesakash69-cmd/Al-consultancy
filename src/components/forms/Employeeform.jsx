import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  BriefcaseBusiness,
  LoaderCircle,
  Mail,
  UserRound,
} from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzUOIFe3B3fqCs1jxzXAKX42bOJjNvgQG3xcVP9QePOt6qKoIR2Pi6cf23kzFN48Xmclg/exec";

const MAX_DESCRIPTION = 1000;

const STEP_COPY = [
  {
    title: "Let's get to know you",
    subtitle: "Tell us who you are and how we can reach you.",
  },
  {
    title: "Your trade",
    subtitle: "Tell us your field and your experience.",
  },
];

const labelClass = "mb-1.5 block text-xs font-semibold text-[#103463]";

const fieldClass =
  "box-border block h-12 w-full min-w-0 max-w-full rounded-2xl border border-[#E1E7F0] bg-white pl-11 pr-4 text-sm text-[#232D37] shadow-[0_2px_8px_rgba(16,52,99,0.06)] outline-none transition placeholder:text-[#232D37]/40 focus:border-[#4AB1CC] focus:ring-4 focus:ring-[#4AB1CC]/20";

const iconClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#103463]/55";

const rise = {
  animation: "rise 350ms ease-out both",
};

const NO_OUTLINE = { outline: "none" };

function EmployeeForm({ onSuccess }) {
  const formRef = useRef(null);

  const [step, setStep] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = (names) => {
    const elements = formRef.current.elements;

    for (const name of names) {
      const element = elements.namedItem(name);

      if (element && !element.checkValidity()) {
        element.reportValidity();
        return false;
      }
    }

    return true;
  };

  const goNext = () => {
    if (validate(["fullName", "email"])) {
      setError("");
      setStep(1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    if (step === 0) {
      goNext();
      return;
    }

    if (!validate(["category", "description"])) {
      return;
    }

    setLoading(true);
    setError("");

    const input = new FormData(formRef.current);

    const data = {
      fullName: String(input.get("fullName") || "").trim(),
      email: String(input.get("email") || "").trim(),
      category: String(input.get("category") || "").trim(),
      description: String(input.get("description") || "").trim(),
    };

    try {
      // Sent as JSON text. Do NOT use mode: "no-cors": it hides the result.
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "professional", // saves to Sheet1
          fullName: data.fullName,
          emailAddress: data.email,
          professionalCategory: data.category,
          experienceDetails: data.description,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error(
          "Unexpected response from the server. Check that the web app is deployed with access set to Anyone."
        );
      }

      if (!result.ok) {
        throw new Error(result.error || "Save failed");
      }

      console.log("Saved:", result); // { ok: true, sheet: "Sheet1", row: N }

      // Only reached when the script confirmed a row was written.
      onSuccess?.({
        name: data.fullName,
        email: data.email,
      });
    } catch (err) {
      console.error("Candidate submission failed:", err);
      setError("Could not save your application: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-w-0 max-w-full text-[#232D37]">
      {/* Progress */}
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-[#103463]/70">
          <span>Candidate registration</span>
          <span>Step {step + 1} of 2</span>
        </div>

        <div className="flex gap-2" aria-hidden="true">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#103463]/10"
            >
              <span
                className="block h-full rounded-full bg-[#4AB1CC] transition-all duration-500"
                style={{
                  width: step >= i ? "100%" : "0%",
                }}
              />
            </span>
          ))}
        </div>
      </div>

      <div key={step} className="mb-4" style={rise}>
        <h2 className="text-xl font-bold tracking-tight text-[#103463] sm:text-2xl">
          {STEP_COPY[step].title}
        </h2>

        <p className="mt-1 text-sm text-[#232D37]/65">
          {STEP_COPY[step].subtitle}
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="min-w-0 max-w-full"
      >
        {/* STEP 1 — About you */}
        <div
          className={step === 0 ? "space-y-3.5" : "hidden"}
          style={rise}
        >
          <label className="block min-w-0">
            <span className={labelClass}>Full name</span>

            <span className="relative block">
              <UserRound size={17} aria-hidden="true" className={iconClass} />

              <input
                name="fullName"
                type="text"
                placeholder="Full name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                className={fieldClass}
                style={NO_OUTLINE}
              />
            </span>
          </label>

          <label className="block min-w-0">
            <span className={labelClass}>Email address</span>

            <span className="relative block">
              <Mail size={17} aria-hidden="true" className={iconClass} />

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                maxLength={150}
                className={fieldClass}
                style={NO_OUTLINE}
              />
            </span>
          </label>
        </div>

        {/* STEP 2 — Professional details */}
        <div
          className={step === 1 ? "space-y-3.5" : "hidden"}
          style={rise}
        >
          <label className="block min-w-0">
            <span className={labelClass}>Professional category</span>

            <span className="relative block">
              <BriefcaseBusiness
                size={17}
                aria-hidden="true"
                className={iconClass}
              />

              <input
                name="category"
                type="text"
                placeholder="e.g. Welder, Electrician, Driver"
                required
                minLength={2}
                maxLength={100}
                className={fieldClass}
                style={NO_OUTLINE}
              />
            </span>
          </label>

          <label className="block min-w-0">
            <span className="mb-1.5 flex items-center justify-between text-xs font-semibold text-[#103463]">
              Experience, skills &amp; career goals

              <span className="font-medium text-[#232D37]/50">
                {description.length}/{MAX_DESCRIPTION}
              </span>
            </span>

            <textarea
              name="description"
              rows={3}
              required
              minLength={10}
              maxLength={MAX_DESCRIPTION}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Years of experience, tools you use, countries you'd like to work in…"
              className="box-border block h-24 w-full min-w-0 max-w-full resize-none rounded-2xl border border-[#E1E7F0] bg-white px-4 py-3 text-sm leading-5 text-[#232D37] shadow-[0_2px_8px_rgba(16,52,99,0.06)] outline-none transition placeholder:text-[#232D37]/40 focus:border-[#4AB1CC] focus:ring-4 focus:ring-[#4AB1CC]/20"
              style={NO_OUTLINE}
            />
          </label>
        </div>

        {error && (
          <p
            role="alert"
            className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
          >
            <AlertCircle size={17} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3">
          {step === 1 && (
            <button
              type="button"
              onClick={() => {
                setError("");
                setStep(0);
              }}
              disabled={loading}
              className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-[#D0D7DE] bg-white px-4 text-sm font-semibold text-[#103463] transition hover:bg-[#103463]/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4AB1CC]/30 disabled:opacity-60"
            >
              <ArrowLeft size={17} />
              Back
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group flex h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[#103463] px-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#17477F] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4AB1CC]/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <LoaderCircle size={17} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                {step === 0 ? "Continue" : "Submit application"}

                <ArrowRight
                  size={17}
                  className="text-[#4AB1CC] transition-transform group-hover:translate-x-1"
                />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

export default EmployeeForm;