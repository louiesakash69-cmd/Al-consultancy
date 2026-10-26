import { Globe2, ShieldCheck, Target, CheckCircle2 } from "lucide-react";

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
            <div className="space-y-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal text-justify">
              <p>
                AL Consultancy helps skilled professionals explore international career opportunities and connects them with employers looking for the right talent.
              </p>
              <p>
                We make the recruitment journey easier to understand by providing guidance throughout the process — from exploring suitable opportunities and preparing documentation to navigating the steps involved in international relocation.
              </p>
              <p>
                Our approach is simple: clear communication, practical support, and a recruitment process where candidates understand what to expect at every stage.
              </p>
            </div>
          </div>
        </div>

        {/* 3 EQUAL SIZED CARDS - FULL DETAILS DISPLAYED PERMANENTLY WITHOUT CLICKING */}
        <div>
          <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-[#D0D7DE]">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Key Strategic Pillars
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Core Principles & Standards
            </span>
          </div>

          {/* Grid of 3 equal cards in brand palette, completely open and legible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {aboutCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#103463] text-white border border-[#103463] shadow-[0_16px_40px_-12px_rgba(16,52,99,0.28)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Background Watermark */}
                  <div className="absolute -bottom-6 -right-6 opacity-10 text-white pointer-events-none select-none">
                    <Icon size={180} strokeWidth={1} />
                  </div>

                  {/* Top Bar: Icon, Tag & ID */}
                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-xs">
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-white/15 text-sky-200 border border-white/20">
                        {card.tag}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold opacity-40">
                        {card.id}
                      </span>
                    </div>
                  </div>

                  {/* Middle Content: Title and Complete Description */}
                  <div className="relative z-10 mb-5">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3 text-white">
                      {card.title}
                    </h3>

                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom: Highlight Feature Banner */}
                  <div className="relative z-10 pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-sky-300">
                    <CheckCircle2 size={16} className="text-sky-300 shrink-0" />
                    <span>{card.highlight}</span>
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
