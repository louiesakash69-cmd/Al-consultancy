import { useState } from "react";
import { Globe2, ShieldCheck, Target, ArrowUpRight, ChevronDown } from "lucide-react";

// Exact original content from repository
const aboutCards = [
  {
    id: "01",
    title: "Mission",
    icon: Target,
    tag: "Core Focus",
    description:
      "To connect skilled professionals with international career opportunities through a clear, responsible, and candidate-focused recruitment process.",
    highlight: "Candidate-centered placement across verified European corridors.",
  },
  {
    id: "02",
    title: "Vision",
    icon: Globe2,
    tag: "Global Horizon",
    description:
      "To build a trusted international recruitment consultancy known for transparency, professionalism, and meaningful career opportunities.",
    highlight: "Ethical recruitment standards with long-term employer trust.",
  },
  {
    id: "03",
    title: "How we work",
    icon: ShieldCheck,
    tag: "Governance",
    description:
      "Every cost, document and timeline is written down before you commit. No stage of the process is a surprise, and no fee appears later.",
    highlight: "100% upfront transparency with zero hidden commitments.",
  },
];

export default function About() {
  // activeCard is null when none is selected; clicking sets or toggles it
  const [activeCard, setActiveCard] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleCardClick = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section id="about" className="py-16 lg:py-32 scroll-mt-24 bg-white border-t border-[#D0D7DE] overflow-hidden">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#103463]" />
              <span className="text-xs font-bold tracking-widest text-[#103463] uppercase">
                Who we are
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#103463] tracking-tight leading-[1.12]">
              Recruitment built around people, not paperwork
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {/* First paragraph - always visible */}
              <p>
                AL Consultancy helps skilled professionals explore international career opportunities and connects them with employers looking for the right talent.
              </p>

              {/* Paragraphs 2 & 3 - hidden on mobile until "See More" clicked, always visible on lg+ */}
              <div className={`space-y-4 ${showMore ? "block" : "hidden"} lg:block`}>
                <p>
                  We make the recruitment journey easier to understand by providing guidance throughout the process — from exploring suitable opportunities and preparing documentation to navigating the steps involved in international relocation.
                </p>
                <p>
                  Our approach is simple: clear communication, practical support, and a recruitment process where candidates understand what to expect at every stage.
                </p>
              </div>
            </div>

            {/* See More / See Less toggle - only visible on mobile/tablet */}
            <button
              onClick={() => setShowMore((v) => !v)}
              className="lg:hidden mt-3 text-sm font-bold text-[#103463] inline-flex items-center gap-1 hover:underline transition-colors"
            >
              {showMore ? "See Less" : "See More"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${showMore ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* 3 EQUAL SIZED CARDS IN BOTH LAPTOP AND MOBILE - CLICK TO EXPAND DETAILS */}
        <div>
          <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-[#D0D7DE]">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
              Key Strategic Pillars
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
              Click any card to view details
            </span>
          </div>

          {/* Grid of 3 equal sized cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              const isExpanded = activeCard === index;

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(index)}
                  className={`relative rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden transition-all duration-300 ease-out border flex flex-col justify-between ${
                    isExpanded
                      ? "bg-[#103463] text-white border-[#103463] shadow-[0_20px_45px_-12px_rgba(16,52,99,0.32)] p-6 sm:p-7"
                      : "bg-[#F7F9FB] hover:bg-[#E5EAED] text-slate-800 border-[#D0D7DE] shadow-sm p-6 sm:p-7 hover:border-[#103463]/40"
                  }`}
                >
                  {/* Subtle Background Watermark on Active Card */}
                  {isExpanded && (
                    <div className="absolute -bottom-6 -right-6 opacity-10 text-white pointer-events-none select-none">
                      <Icon size={200} strokeWidth={1} />
                    </div>
                  )}

                  {/* Top Bar: Icon, Tag & ID */}
                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                        isExpanded
                          ? "bg-white/10 text-white backdrop-blur-md border border-white/20"
                          : "bg-white text-[#103463] shadow-sm border border-[#D0D7DE]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          isExpanded
                            ? "bg-white/15 text-sky-200 border border-white/20"
                            : "bg-[#E5EAED] text-[#103463] border border-[#D0D7DE]"
                        }`}
                      >
                        {card.tag}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold opacity-40">
                        {card.id}
                      </span>
                    </div>
                  </div>

                  {/* Middle Content */}
                  <div className="relative z-10 mb-5">
                    <h3
                      className={`text-xl sm:text-2xl font-black tracking-tight mb-2.5 ${
                        isExpanded ? "text-white" : "text-[#103463]"
                      }`}
                    >
                      {card.title}
                    </h3>

                    {/* Complete details appear in blue background when clicked */}
                    {isExpanded ? (
                      <div className="space-y-3">
                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                          {card.description}
                        </p>
                        <div className="pt-2 text-xs font-semibold text-sky-300">
                          {card.highlight}
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {card.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom: Click Status / Action */}
                  <div
                    className={`relative z-10 pt-3.5 border-t flex items-center justify-between text-xs font-semibold ${
                      isExpanded
                        ? "border-white/15 text-sky-300"
                        : "border-[#D0D7DE] text-slate-500"
                    }`}
                  >
                    <span>{isExpanded ? "Click to collapse" : "Click to view details"}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isExpanded ? "bg-white text-[#103463] rotate-45" : "bg-white text-slate-400 border border-[#D0D7DE]"
                      }`}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
