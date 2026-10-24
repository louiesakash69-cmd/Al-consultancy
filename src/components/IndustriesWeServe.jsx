import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Warehouse,
  HardHat,
  Truck,
  Hotel,
  Wheat,
  Wrench,
  ChevronDown,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";

// Substantial continuous paragraphs that naturally fill the height of the 7-button sidebar on desktop
const industriesWeServe = [
  {
    id: "01",
    title: "Manufacturing",
    icon: Factory,
    content:
      "AL Consultancy delivers specialized workforce recruitment solutions for advanced industrial manufacturing, automated assembly facilities, and precision machining corridors across Slovakia and broader European territories. We systematically recruit and deploy qualified CNC milling operators, mechanical fitters, sheet metal specialists, robotic welding operatives, and quality control inspectors who have been rigorously trade-tested to meet stringent ISO and European production benchmarks.\n\nOur direct corridor placement model manages candidate credentialing, workplace safety onboarding, and compliance documentation from initial screening through full on-site relocation. By aligning candidate technical qualifications with employer production schedules, we ensure immediate shop-floor operational readiness, minimize factory ramp-up periods, reduce turnover, and sustain reliable manufacturing volumes for automotive and heavy manufacturing leaders.",
  },
  {
    id: "02",
    title: "Logistics & Warehousing",
    icon: Warehouse,
    content:
      "We source, verify, and deploy skilled warehousing personnel and logistics associates across key European distribution networks, regional fulfillment hubs, and freight clearing terminals. Our recruitment covers licensed reach truck, counterbalance, and VNA forklift drivers, alongside experienced inventory controllers, packing technicians, cross-dock handlers, and dispatch supervisors experienced with enterprise Warehouse Management Systems.\n\nEvery candidate is screened for shift adaptability, spatial accuracy, and rigorous adherence to occupational safety standards in fast-paced operational environments. This comprehensive staffing support enables multi-shift logistics operators to meet peak seasonal throughput requirements, eliminate supply chain bottlenecks, protect cargo integrity, and maintain dependable turnaround times across critical continental trade routes.",
  },
  {
    id: "03",
    title: "Construction & Infrastructure",
    icon: HardHat,
    content:
      "Our construction and infrastructure staffing division provides experienced commercial tradespeople, heavy civil machinery operators, certified structural welders, concrete formworkers, and qualified site safety supervisors for commercial, industrial, and major civil engineering undertakings across European markets. We address critical regional trades shortages by supplying proven workers capable of interpreting complex technical blueprints and operating modern plant machinery.\n\nCandidates are trade-tested and validated against European Union building codes, structural standards, and rigorous occupational health regulations before site arrival. Through disciplined compliance management and relocation logistics, we ensure contractors secure dependable teams that adhere to strict build schedules, reduce contractor liability, and complete landmark infrastructure developments efficiently.",
  },
  {
    id: "04",
    title: "Transportation & Logistics",
    icon: Truck,
    content:
      "We connect vetted professional commercial drivers, international freight transit specialists, and arterial fleet handlers with premier European transport carriers and logistics enterprises. Our pool features licensed Category C and CE drivers possessing clean driving records, verified background credentials, and extensive experience navigating cross-border continental corridors, intermodal hubs, and severe weather road conditions.\n\nWe emphasize strict adherence to European tachograph driving-time directives, road haulage safety laws, and temperature-controlled cargo integrity. By delivering dedicated driving personnel who prioritize fleet security and schedule reliability, we help European transport operators maintain continuous freight flow, optimize route efficiency, and prevent regulatory compliance delays across all delivery routes.",
  },
  {
    id: "05",
    title: "Hospitality",
    icon: Hotel,
    content:
      "AL Consultancy partners with prestigious international hotel chains, luxury resorts, conference venues, and commercial catering operators to provide trained hospitality talent across Europe. We supply experienced culinary professionals, sous chefs, banquet service specialists, front-of-house staff, and executive housekeeping teams selected for their customer-centric service mindset, professional presentation, and linguistic versatility.\n\nOur vetting process assesses practical service etiquette, food hygiene certifications, and rapid adaptability to diverse international guest standards. Whether facilitating seasonal staffing surges or fulfilling year-round hospitality vacancies, we deliver reliable professionals who uphold brand prestige, elevate guest satisfaction ratings, and seamlessly integrate into high-volume hospitality operations.",
  },
  {
    id: "06",
    title: "Agriculture",
    icon: Wheat,
    content:
      "We provide dependable seasonal and year-round agricultural manpower for commercial farming estates, automated greenhouse facilities, fruit orchards, and modern agro-processing centers throughout Slovakia and the European agricultural belt. Our personnel are carefully selected for stamina, mechanical harvesting expertise, crop handling precision, and demonstrated field reliability across varied weather conditions.\n\nFrom planting and automated irrigation monitoring to rapid harvesting and packhouse sorting, we manage the full international recruitment and corridor logistics lifecycle. This targeted workforce delivery ensures European agri-business enterprises prevent crop spoil, meet tight distribution deadlines, and maintain continuous productivity during peak seasonal harvest cycles.",
  },
  {
    id: "07",
    title: "Maintenance & Engineering",
    icon: Wrench,
    content:
      "Our engineering recruitment division connects industrial facilities, manufacturing plants, and commercial complexes with qualified electromechanical engineers, automation technicians, industrial electricians, and certified HVAC maintenance specialists. Every candidate possesses proven diagnostic proficiency, technical problem-solving capabilities, and extensive familiarity with automated PLC systems, hydraulic machinery, and industrial instrumentation.\n\nWe prioritize candidates trained in rigorous preventive maintenance schedules, asset reliability programs, and rapid machine downtime troubleshooting. By providing dependable technical specialists who safeguard industrial machinery integrity and optimize operating uptime, we help European enterprises prevent catastrophic production line stoppages and preserve valuable capital assets.",
  },
];

export default function IndustriesWeServe() {
  // Mobile accordion state (null on load)
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);

  // Desktop side-by-side selection state (defaults to 0)
  const [desktopSelectedIndex, setDesktopSelectedIndex] = useState(0);

  const toggleMobileSector = (index) => {
    setMobileOpenIndex((prev) => (prev === index ? null : index));
  };

  const activeDesktopSector = industriesWeServe[desktopSelectedIndex];
  const ActiveIcon = activeDesktopSector.icon;

  return (
    <section id="industries" className="py-16 lg:py-32 bg-[#F7F9FB] border-t border-[#D0D7DE] overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#103463]" />
              <span className="text-xs font-bold tracking-widest text-[#103463] uppercase">
                Industries
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black text-[#103463] tracking-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-[#103463]">
              Trusted Across Sectors
            </h3>
            <p className="mt-1.5 sm:mt-2 text-sm sm:text-base 2xl:text-lg text-slate-600 leading-relaxed font-normal text-justify">
              Delivering skilled workforce solutions across diverse industries with reliable manpower and professional expertise.
            </p>
          </div>
        </div>

        {/* 1. MOBILE VIEW ONLY (hidden on lg): Accordion with in-place bottom expansion */}
        <div className="space-y-3 lg:hidden">
          {industriesWeServe.map((sector, index) => {
            const Icon = sector.icon;
            const isOpen = mobileOpenIndex === index;

            return (
              <div
                key={sector.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#103463] shadow-[0_12px_32px_-10px_rgba(16,52,99,0.15)]"
                    : "bg-white/80 hover:bg-white border-[#D0D7DE] hover:border-slate-300 shadow-xs"
                }`}
              >
                {/* Clickable Header for Industry */}
                <button
                  type="button"
                  onClick={() => toggleMobileSector(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="text-xs sm:text-sm font-mono text-slate-400 font-bold shrink-0">
                      {sector.id}
                    </span>
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#103463] text-white"
                          : "bg-[#E5EAED] text-slate-600"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} className="sm:w-5 sm:h-5" />
                    </div>
                    <span
                      className={`text-base sm:text-lg font-bold tracking-tight truncate ${
                        isOpen ? "text-[#103463]" : "text-slate-800"
                      }`}
                    >
                      {sector.title}
                    </span>
                  </div>

                  {/* Toggle Arrow */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#E5EAED] text-[#103463] rotate-180"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Content displayed directly below the clicked industry on mobile */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-[#D0D7DE]/60 space-y-4 bg-gradient-to-b from-[#F7F9FB]/60 to-white">
                        
                        {/* Comprehensive Justified Paragraph */}
                        <div className="space-y-3 pt-2">
                          {sector.content.split("\n\n").map((para, i) => (
                            <p key={i} className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Both boxes strictly in the same row on mobile */}
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 pt-1">
                          <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white border border-[#D0D7DE] flex items-center gap-1 sm:gap-2 shadow-xs min-w-0">
                            <ShieldCheck size={13} className="text-[#365D8A] shrink-0 sm:w-4 sm:h-4" />
                            <span className="text-[9.5px] sm:text-xs font-semibold text-[#103463] leading-tight">
                              EU tested & verified credentials
                            </span>
                          </div>
                          <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white border border-[#D0D7DE] flex items-center gap-1 sm:gap-2 shadow-xs min-w-0">
                            <Check size={13} className="text-emerald-600 shrink-0 sm:w-4 sm:h-4" />
                            <span className="text-[9.5px] sm:text-xs font-semibold text-[#103463] leading-tight">
                              EU compliant contracts
                            </span>
                          </div>
                        </div>

                        {/* Institutional Action Footer on mobile */}
                        <div className="pt-2 flex flex-row items-center justify-between gap-1.5 sm:gap-2 border-t border-[#D0D7DE]/40">
                          <span className="text-[8px] min-[380px]:text-[9px] sm:text-xs text-slate-500 font-medium leading-tight whitespace-nowrap">
                            Direct corridor staffing for verified European and Slovakia enterprises.
                          </span>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-0.5 sm:gap-1 text-[8px] min-[380px]:text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#103463] hover:text-[#365D8A] transition-colors shrink-0 whitespace-nowrap"
                          >
                            Consult <ArrowRight size={10} className="sm:w-3 sm:h-3" />
                          </a>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 2. PC / DESKTOP VIEW ONLY (hidden on mobile, visible on lg+): Master-Detail Side Panel */}
        <div className="hidden lg:grid grid-cols-12 gap-8 2xl:gap-12 items-stretch">
          
          {/* Left Column: 7 Industry Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-2 2xl:gap-3">
            {industriesWeServe.map((sector, index) => {
              const Icon = sector.icon;
              const isSelected = desktopSelectedIndex === index;

              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setDesktopSelectedIndex(index)}
                  className={`group relative text-left p-4 2xl:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? "bg-white text-[#103463] border-[#103463] shadow-[0_10px_25px_-8px_rgba(16,52,99,0.14)] font-bold"
                      : "bg-white/60 hover:bg-white text-slate-600 border-transparent hover:border-[#D0D7DE]"
                  }`}
                >
                  {/* Left accent bar for active item */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeSectorPill"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#103463] rounded-r-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5 2xl:gap-4 pl-2">
                    <span className="text-xs 2xl:text-sm font-mono text-slate-400 font-semibold">
                      {sector.id}
                    </span>
                    <div
                      className={`w-10 h-10 2xl:w-11 2xl:h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#103463] text-white"
                          : "bg-[#E5EAED] text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} className="2xl:w-5 2xl:h-5" />
                    </div>
                    <span className="text-base 2xl:text-lg tracking-tight">
                      {sector.title}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-200 ${
                      isSelected
                        ? "text-[#103463] translate-x-0 opacity-100"
                        : "text-slate-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dedicated Side Detail Box - Full Natural Height & Fill */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-3xl bg-white border border-[#D0D7DE] shadow-[0_20px_50px_-15px_rgba(16,52,99,0.08)] p-8 2xl:p-12 flex flex-col justify-between relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDesktopSector.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full space-y-6"
                >
                  {/* Top: Industry Title Lockup */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 2xl:w-16 2xl:h-16 rounded-2xl bg-[#103463] text-white flex items-center justify-center shadow-md shrink-0">
                        <ActiveIcon size={26} strokeWidth={2} className="2xl:w-8 2xl:h-8" />
                      </div>
                      <div>
                        <span className="text-xs 2xl:text-sm font-bold text-slate-400 uppercase tracking-widest block font-mono">
                          Sector {activeDesktopSector.id} / 07
                        </span>
                        <h3 className="text-2xl 2xl:text-3xl font-black text-[#103463] tracking-tight">
                          {activeDesktopSector.title}
                        </h3>
                      </div>
                    </div>

                    {/* Middle: Rich 2-Paragraph Justified Continuous Text */}
                    <div className="space-y-4">
                      {activeDesktopSector.content.split("\n\n").map((para, i) => (
                        <p
                          key={i}
                          className="text-base 2xl:text-lg text-slate-700 leading-[1.8] font-normal text-justify"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Two Compliance Badges in a Row */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D0D7DE]/50">
                    <div className="p-3.5 2xl:p-4 rounded-xl bg-[#F7F9FB] border border-[#D0D7DE] flex items-center gap-3 text-xs 2xl:text-sm font-semibold text-[#103463]">
                      <ShieldCheck size={18} className="text-[#365D8A] shrink-0" />
                      <span>EU tested & verified credentials</span>
                    </div>
                    <div className="p-3.5 2xl:p-4 rounded-xl bg-[#F7F9FB] border border-[#D0D7DE] flex items-center gap-3 text-xs 2xl:text-sm font-semibold text-[#103463]">
                      <Check size={18} className="text-emerald-600 shrink-0" />
                      <span>EU compliant contracts</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Institutional Footer on PC */}
              <div className="pt-6 mt-6 border-t border-[#D0D7DE]/60 flex items-center justify-between">
                <span className="text-xs 2xl:text-sm text-slate-500 font-medium">
                  Direct corridor staffing for verified European and Slovakia enterprises.
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#103463] hover:text-[#365D8A] transition-colors"
                >
                  Consult for this sector <ArrowRight size={14} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
