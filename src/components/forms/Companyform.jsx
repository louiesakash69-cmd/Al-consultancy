import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  Check,
  LoaderCircle,
  Minus,
  Plus,
  UserRound,
} from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzUOIFe3B3fqCs1jxzXAKX42bOJjNvgQG3xcVP9QePOt6qKoIR2Pi6cf23kzFN48Xmclg/exec";

const MAX_WORKERS = 10000;

/* Inline style wins over any global input:focus outline in App.css. */
const NO_OUTLINE = { outline: "none" };

const VISA_OPTIONS = [
  { value: "required", label: "Required" },
  { value: "not-required", label: "Not required" },
  { value: "not-sure", label: "Not sure" },
];

const labelClass = "mb-1.5 block text-xs font-semibold text-[#103463]";

const inputClass =
  "block h-11 w-full rounded-lg border border-[#C9D2DC] bg-white px-3.5 text-sm text-[#232D37] outline-none transition placeholder:text-[#232D37]/35 focus:border-[#4AB1CC] focus:ring-4 focus:ring-[#4AB1CC]/15";

/* One block of the form, hung on a vertical rail with an icon node. */
function Section({ icon: Icon, title, hint, last = false, children }) {
  return (
    <div className="relative pl-11">
      {!last && (
        <span
          aria-hidden="true"
          className="absolute bottom-[-12px] left-[15px] top-9 w-px bg-[#103463]/15"
        />
      )}

      <span
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#103463] text-[#4AB1CC]"
      >
        <Icon size={15} />
      </span>

      <div className="mb-3 flex flex-wrap items-baseline gap-x-2 leading-8">
        <h3 className="text-sm font-bold text-[#103463]">{title}</h3>
        {hint && <span className="text-xs text-[#232D37]/50">{hint}</span>}
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function CompanyForm({ onSuccess }) {
  const [workers, setWorkers] = useState("1");
  const [visa, setVisa] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changeWorkers = (delta) =>
    setWorkers((current) => {
      const next = (Number(current) || 0) + delta;
      return String(Math.min(MAX_WORKERS, Math.max(1, next)));
    });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData(form);

    const data = {
      companyName: String(formData.get("companyName") || "").trim(),
      position: String(formData.get("workerType") || "").trim(),
      numberOfWorkers: Number(formData.get("workerQuantity")),
      budgetPerWorker: Number(formData.get("budgetPerWorker")),
      visaSupport: formData.get("visaSupport") || "Not specified",
      workLocation: String(formData.get("workLocation") || "").trim(),
      contactPerson: String(formData.get("contactPerson") || "").trim(),
      businessEmail: String(formData.get("businessEmail") || "").trim(),
      additionalDetails: String(formData.get("description") || "").trim(),
    };

    try {
      // Sent as JSON text. Do NOT use mode: "no-cors": it hides the result.
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          formType: "company", // saves to Sheet2
          ...data,
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

      console.log("Saved:", result); // { ok: true, sheet: "Sheet2", row: N }

      // Only reached when the script confirmed a row was written.
      onSuccess?.({ name: data.contactPerson, email: data.businessEmail });
    } catch (err) {
      console.error("Company submission failed:", err);
      setError("Could not save your request: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-w-0 text-[#232D37]">
      {/* Header: icon block + title, left-aligned like a document title */}
      <div className="mb-6 flex items-center gap-3.5 rounded-xl border border-[#D0D7DE] bg-white p-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#103463] text-[#4AB1CC]">
          <Building2 size={22} />
        </span>
        <div className="min-w-0">
          <h2 className="text-lg font-bold leading-tight text-[#103463] sm:text-xl">
            Recruitment request
          </h2>
          <p className="text-xs text-[#232D37]/60 sm:text-sm">
            Tell us the workforce you need. It takes about two minutes.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        <Section icon={Building2} title="Your company">
          <div>
            <label htmlFor="company-name" className={labelClass}>
              Company name
            </label>
            <input
              id="company-name"
              name="companyName"
              type="text"
              placeholder="Registered company name"
              autoComplete="organization"
              required
              minLength={2}
              maxLength={150}
              className={inputClass}
              style={NO_OUTLINE}
            />
          </div>

          <div>
            <label htmlFor="company-location" className={labelClass}>
              Company location
            </label>
            <input
              id="company-location"
              name="workLocation"
              type="text"
              placeholder="City, country"
              autoComplete="address-level2"
              required
              minLength={2}
              maxLength={150}
              className={inputClass}
              style={NO_OUTLINE}
            />
          </div>
        </Section>

        <Section icon={BriefcaseBusiness} title="What you need">
          <div className="sm:col-span-2">
            <label htmlFor="company-position" className={labelClass}>
              Position / worker type
            </label>
            <input
              id="company-position"
              name="workerType"
              type="text"
              placeholder="e.g. Welders, drivers, kitchen staff"
              required
              minLength={2}
              maxLength={150}
              className={inputClass}
              style={NO_OUTLINE}
            />
          </div>

          <div>
            <label htmlFor="company-workers" className={labelClass}>
              Number of workers
            </label>
            <div className="flex h-11 overflow-hidden rounded-lg border border-[#C9D2DC] bg-white transition focus-within:border-[#4AB1CC] focus-within:ring-4 focus-within:ring-[#4AB1CC]/15">
              <button
                type="button"
                onClick={() => changeWorkers(-1)}
                aria-label="Decrease number of workers"
                className="flex w-11 shrink-0 items-center justify-center text-[#103463] transition hover:bg-[#4AB1CC]/15 focus-visible:outline-none"
              >
                <Minus size={16} />
              </button>

              <input
                id="company-workers"
                name="workerQuantity"
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX_WORKERS}
                step={1}
                required
                value={workers}
                onChange={(e) => setWorkers(e.target.value)}
                className="min-w-0 flex-1 border-x border-[#C9D2DC] bg-white text-center text-sm font-semibold text-[#232D37] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                style={NO_OUTLINE}
              />

              <button
                type="button"
                onClick={() => changeWorkers(1)}
                aria-label="Increase number of workers"
                className="flex w-11 shrink-0 items-center justify-center text-[#103463] transition hover:bg-[#4AB1CC]/15 focus-visible:outline-none"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="company-budget" className={labelClass}>
              Budget per worker
            </label>
            <input
              id="company-budget"
              name="budgetPerWorker"
              type="number"
              inputMode="numeric"
              min={0}
              max={100000000}
              step={1}
              placeholder="Amount"
              required
              className={`${inputClass} [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
              style={NO_OUTLINE}
            />
          </div>

          <div className="sm:col-span-2">
            <span id="visa-label" className={labelClass}>
              Visa support{" "}
              <span className="font-normal text-[#232D37]/50">(optional)</span>
            </span>

            <input type="hidden" name="visaSupport" value={visa} />

            <div
              role="radiogroup"
              aria-labelledby="visa-label"
              className="grid grid-cols-3 gap-1 rounded-lg bg-[#103463]/[0.07] p-1"
            >
              {VISA_OPTIONS.map((option) => {
                const selected = visa === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    // click the selected option again to clear it
                    onClick={() => setVisa(selected ? "" : option.value)}
                    className={`flex h-9 items-center justify-center gap-1.5 rounded-md px-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4AB1CC]/30 sm:text-sm ${
                      selected
                        ? "bg-white text-[#103463] shadow-sm"
                        : "text-[#232D37]/60 hover:text-[#103463]"
                    }`}
                  >
                    {selected && (
                      <Check
                        size={14}
                        aria-hidden="true"
                        className="shrink-0 text-[#4AB1CC]"
                      />
                    )}
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company-details" className={labelClass}>
              Additional details &amp; requirements
            </label>
            <textarea
              id="company-details"
              name="description"
              rows={3}
              required
              minLength={10}
              maxLength={1000}
              placeholder="Skills needed, contract length, shift pattern, accommodation…"
              className="block w-full resize-y rounded-lg border border-[#C9D2DC] bg-white px-3.5 py-3 text-sm leading-5 text-[#232D37] outline-none transition placeholder:text-[#232D37]/35 focus:border-[#4AB1CC] focus:ring-4 focus:ring-[#4AB1CC]/15"
              style={NO_OUTLINE}
            />
          </div>
        </Section>

        <Section icon={UserRound} title="Who we should contact" last>
          <div>
            <label htmlFor="company-contact" className={labelClass}>
              Contact person
            </label>
            <input
              id="company-contact"
              name="contactPerson"
              type="text"
              placeholder="Full name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              className={inputClass}
              style={NO_OUTLINE}
            />
          </div>

          <div>
            <label htmlFor="company-email" className={labelClass}>
              Business email
            </label>
            <input
              id="company-email"
              name="businessEmail"
              type="email"
              placeholder="name@company.com"
              autoComplete="email"
              required
              maxLength={150}
              className={inputClass}
              style={NO_OUTLINE}
            />
          </div>
        </Section>

        {error && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
          >
            <AlertCircle size={17} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#103463] px-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#17477F] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4AB1CC]/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Send recruitment request
              <ArrowRight
                size={17}
                className="text-[#4AB1CC] transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </form>
    </section>
  );
}

export default CompanyForm;