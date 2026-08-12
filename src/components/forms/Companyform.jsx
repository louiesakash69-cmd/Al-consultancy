import { useState } from "react";
import { ArrowRight } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzCEWL_rm18OzbN-kqgcCF-haXTJs0NmEmFXmpxn2E-6uyF_fc8mrB82niaApNerc1C/exec";

const inputClass =
  "w-full h-10 sm:h-11 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm md:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50";

function CompanyForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData(form);

    const data = new URLSearchParams();

    data.append("type", "Company");
    data.append("companyName", formData.get("companyName").trim());
    data.append("workerType", formData.get("workerType").trim());
    data.append("workerQuantity", formData.get("workerQuantity"));
    data.append("budgetPerWorker", formData.get("budgetPerWorker"));
    data.append("visaSupport", formData.get("visaSupport"));
    data.append("workLocation", formData.get("workLocation").trim());
    data.append("contactPerson", formData.get("contactPerson").trim());
    data.append("businessEmail", formData.get("businessEmail").trim());

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      form.reset();
      setMessage("Recruitment request submitted successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        Recruitment Request
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1">
        Find the right talent
      </h2>

      <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
        Tell us about your workforce requirements and our team will get in
        touch.
      </p>

      <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5"
>
  <input
    type="text"
    name="companyName"
    placeholder="Company Name"
    required
    minLength={2}
    maxLength={150}
    autoComplete="organization"
    className={inputClass}
  />

  <input
    type="text"
    name="workerType"
    placeholder="Position / Worker Type Required"
    required
    minLength={2}
    maxLength={150}
    className={inputClass}
  />

  <input
    type="number"
    name="workerQuantity"
    placeholder="Number of Workers Required"
    required
    min="1"
    max="10000"
    step="1"
    inputMode="numeric"
    className={inputClass}
  />

  <input
    type="number"
    name="budgetPerWorker"
    placeholder="Budget per Worker"
    required
    min="0"
    max="100000000"
    step="1"
    inputMode="numeric"
    className={inputClass}
  />

  <div className="relative">
  <select
    name="visaSupport"
    defaultValue=""
    className={`${inputClass} appearance-none pr-10 cursor-pointer`}
  >
    <option value="" disabled>
      Visa Support Required (Optional)
    </option>
    <option value="required">Required</option>
    <option value="not-required">Not Required</option>
    <option value="not-sure">Not Sure</option>
  </select>

  <svg
    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m6 8 4 4 4-4" />
  </svg>
</div>

  <input
    type="text"
    name="workLocation"
    placeholder="Work Location"
    required
    minLength={2}
    maxLength={150}
    autoComplete="address-level2"
    className={inputClass}
  />

  <input
    type="text"
    name="contactPerson"
    placeholder="Contact Person"
    required
    minLength={2}
    maxLength={100}
    autoComplete="name"
    className={inputClass}
  />

  <input
    type="email"
    name="businessEmail"
    placeholder="Business Email"
    required
    maxLength={150}
    autoComplete="email"
    className={inputClass}
  />

  <button
    type="submit"
    disabled={loading}
    className="sm:col-span-2 w-full h-11 sm:h-12 rounded-full bg-slate-900 text-white text-sm md:text-base font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
  >
    {loading ? "Submitting..." : "Submit Recruitment Request"}
    {!loading && <ArrowRight size={16} />}
  </button>

  {message && (
    <p className="sm:col-span-2 text-center text-sm text-slate-600">
      {message}
    </p>
  )}
</form>
    </div>
  );
}

export default CompanyForm;