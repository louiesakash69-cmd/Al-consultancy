import { useState } from "react";
import { ArrowRight } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzCEWL_rm18OzbN-kqgcCF-haXTJs0NmEmFXmpxn2E-6uyF_fc8mrB82niaApNerc1C/exec";

const inputClass =
  "w-full h-10 sm:h-11 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm md:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50";

function EmployeeForm() {
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

    data.append("type", "Candidate");
    data.append("fullName", formData.get("fullName").trim());
    data.append("email", formData.get("email").trim());
    data.append("category", formData.get("category").trim());
    data.append("description", formData.get("description").trim());

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      form.reset();
      setMessage("Application submitted successfully.");
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
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
        Candidate Registration
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1">
        Start your career
      </h2>

      <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
        Share your details and experience with us to explore suitable
        opportunities.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          maxLength={150}
          autoComplete="email"
          className={inputClass}
        />

        <input
          type="text"
          name="category"
          placeholder="Professional Category"
          required
          minLength={2}
          maxLength={100}
          className={inputClass}
        />

        <textarea
          name="description"
          rows={4}
          placeholder="Tell us about your experience, skills, and the type of opportunity you're looking for."
          required
          minLength={10}
          maxLength={1000}
          className="w-full rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm md:text-base text-slate-900 placeholder:text-slate-400 resize-none outline-none transition focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 sm:h-12 rounded-full bg-slate-900 text-white text-sm md:text-base font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {loading ? "Submitting..." : "Submit Application"}
          {!loading && <ArrowRight size={16} />}
        </button>

        {message && (
          <p className="text-center text-sm text-slate-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default EmployeeForm;