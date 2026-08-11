import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const testimonials = [
  {
    name: "Suresh Kumar",
    role: "Welder — placed in Bratislava, Slovakia",
    quote:
      "AL Consultancy explained every step before I signed anything — the salary, the shift pattern, even the accommodation. No surprises once I landed. Six months in and the job is exactly what they described.",
    initials: "SK",
    accent: "blue",
  },
  {
    name: "Fenix Manufacturing Co.",
    role: "Employer — Bratislava, Slovakia",
    quote:
      "We needed trade-tested welders fast and didn't want to sponsor visas for people who couldn't do the work. Every candidate AL Consultancy sent had already been screened and interview-ready. Saved us weeks.",
    initials: "FM",
    accent: "cyan",
  },
  {
    name: "Anitha Raj",
    role: "Hospitality Staff — placed in Ljubljana, Slovenia",
    quote:
      "My coordinator called me by name, not a candidate number. Documentation, visa appointment, even the arrival contact at the airport — someone was tracking all of it. I never had to chase anyone for updates.",
    initials: "AR",
    accent: "blue",
  },
  {
    name: "Adriatic Build Group",
    role: "Employer — Zagreb, Croatia",
    quote:
      "We've hired through three agencies before. AL Consultancy is the only one that put the full cost and timeline in writing up front. Their construction workers showed up on day one already briefed on the site.",
    initials: "AB",
    accent: "cyan",
  },
  {
    name: "Muthu Vel",
    role: "Driver — placed in Trnava, Slovakia",
    quote:
      "I was nervous about the visa process — I'd heard bad stories from other agencies. AL Consultancy walked me through every document and followed up with the embassy themselves. The permit came through without a single delay.",
    initials: "MV",
    accent: "blue",
  },
  {
    name: "Nordic Logistics Partners",
    role: "Employer — Ljubljana, Slovenia",
    quote:
      "What stood out was the matching, not just the sourcing. They asked about our shift patterns and pay bands before sending a single profile, so nobody wasted time on candidates who wouldn't actually take the job.",
    initials: "NL",
    accent: "cyan",
  },
];

const accentStyles = {
  blue: {
    ring: "border-blue-100",
    bg: "bg-blue-50/80",
    text: "text-blue-600",
  },
  cyan: {
    ring: "border-cyan-100",
    bg: "bg-cyan-50/80",
    text: "text-cyan-600",
  },
};

function TestimonialCard({ item }) {
  const accent = accentStyles[item.accent];
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-2xl border border-slate-300 bg-[#F8FAFC] p-5 sm:p-6 flex flex-col hover:shadow-md transition h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <Quote className={`${accent.text} opacity-70`} size={22} />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
      <p className="text-gray-600">{item.quote}</p>
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
        <div
          className={`w-10 h-10 rounded-full ${accent.bg} border ${accent.ring} flex items-center justify-center shrink-0`}
        >
          <span
            className={`text-[10px] lg:text-sm font-semibold ${accent.text}`}
          >
            {item.initials}
          </span>
        </div>
        <div>
          <p className="text-xs lg:text-sm font-semibold text-slate-900">
            {item.name}
          </p>
          <p className="text-[10px] lg:text-[12px] text-slate-500">
            {item.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="lg:py-8 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <Eyebrow>Testimonials</Eyebrow>
        </Reveal>
        <h2 className="al-display al-h2 font-bold text-slate-900 leading-tight">
          Reasons candidates and <br />
          employers trust us
        </h2>
        <div className="sm:hidden mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="shrink-0 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-blue-300 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex-1">
              <TestimonialCard item={testimonials[index]} />
            </div>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="shrink-0 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-blue-300 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden sm:grid mt-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
