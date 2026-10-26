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

// Rich 2-paragraph descriptions tailored to fill the box height precisely
const industriesWeServe = [
  {
    id: "01",
    title: "Manufacturing",
    icon: Factory,
    content:
      "AL Consultancy provides end-to-end recruitment solutions for industrial manufacturing, CNC machining, automated tooling, assembly operations, and quality inspection across Slovakia and European corridors. Candidates undergo technical trade assessments and safety verifications to integrate into automotive, electronic, and precision fabrication plants. From handling production quotas to meeting strict ISO compliance, our workforce solutions ensure high retention, immediate on-site productivity, and transparent recruitment governance.\n\nOur direct placement pipeline manages technical onboarding, relocation logistics, and contract documentation with verified European enterprises. By aligning candidate trade qualifications with plant production schedules, we eliminate workforce bottlenecks and maintain continuous output for high-demand industrial corridors.",
  },
  {
    id: "02",
    title: "Logistics & Warehousing",
    icon: Warehouse,
    content:
      "We source and deploy trained warehouse associates, certified forklift operators, order pickers, and inventory coordinators across central European distribution networks. Candidates are trained in warehouse management software, barcode scanning, safe cargo palletizing, and round-the-clock shift cycles. Our placement model guarantees reliable workforce readiness to handle high seasonal shipment volumes, minimize dispatch turnaround times, and maintain continuous European supply chain operations.\n\nFrom modern fulfillment hubs to specialized cold-storage facilities, our personnel integrate smoothly into fast-paced sorting and palletizing workflows. We provide thorough background verification and full regulatory compliance to support reliable multi-shift warehouse performance.",
  },
  {
    id: "03",
    title: "Construction & Infrastructure",
    icon: HardHat,
    content:
      "Our infrastructure recruitment division supplies seasoned tradespeople, certified welders, civil works operators, and site supervisors for commercial, civil, and industrial infrastructure projects. Every professional is screened for technical competence, site safety certifications, and blueprint execution skills. We help contractors overcome European skilled trade shortages while upholding European Union building standards, contractual compliance, and workplace safety protocols.\n\nWhether supporting major urban developments, transportation links, or specialized structural projects, our candidates are verified for trade experience and on-site occupational safety. We assist European general contractors in meeting aggressive build milestones with dependable tradespeople.",
  },
  {
    id: "04",
    title: "Transportation & Logistics",
    icon: Truck,
    content:
      "We connect verified international drivers, commercial fleet operators, freight handlers, and transit coordinators with established transport carriers across Europe and Slovakia. Candidates hold valid licenses, clean records, and cross-border transit experience. We ensure full adherence to European tachograph driving-time regulations, route planning accuracy, and cargo integrity, ensuring seamless long-haul transit across international trade routes.\n\nOur dedicated driver staffing programs maintain high standards in road safety, cargo tracking, and fleet dependability. We facilitate all driver qualification checks and legal paperwork so transit operations maintain maximum haulage efficiency and on-time delivery across continental freight corridors.",
  },
  {
    id: "05",
    title: "Hospitality",
    icon: Hotel,
    content:
      "AL Consultancy partners with leading European hotel chains, resorts, and commercial dining establishments to provide skilled culinary staff, housekeeping teams, banquet coordinators, and service personnel. We focus on candidate background verifications, service etiquette, language proficiency, and rapid cultural adaptability, ensuring high service standards and guest satisfaction across seasonal and permanent hospitality deployments.\n\nOur hospitality professionals undergo rigorous hospitality service screening and customer care training. We ensure verified talent is deployed on schedule to meet peak resort seasons and year-round corporate hospitality demands with professional excellence.",
  },
  {
    id: "06",
    title: "Agriculture",
    icon: Wheat,
    content:
      "We supply dedicated seasonal and permanent agricultural personnel for modern commercial farming, automated greenhouses, fruit harvesting, and food processing facilities across Europe. Our candidates possess proven field experience, mechanical harvest handling skills, and physical endurance. We ensure timely workforce deployment to protect crop cycles, minimize post-harvest loss, and support essential European agro-industrial output.\n\nFrom automated crop monitoring to high-volume harvest and packhouse operations, our staffing corridors support agricultural enterprises through critical seasonal cycles with hard-working, disciplined, and reliable international workers.",
  },
  {
    id: "07",
    title: "Maintenance & Engineering",
    icon: Wrench,
    content:
      "Our engineering recruitment division supplies qualified industrial electricians, electromechanical technicians, HVAC specialists, and facility maintenance technicians. Selected for diagnostic accuracy and preventive maintenance skills, these professionals minimize industrial machine downtime and maintain critical equipment integrity across industrial manufacturing, utility, and automated commercial plant operations.\n\nWith extensive familiarity in automated production machinery, industrial controls, and scheduled plant overhauls, our technical teams safeguard operational continuity and protect high-value capital assets for European manufacturing leaders.",
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
    <section id="industries" className="py-16 lg:py-24 bg-[#F7F9FB] border-t border-[#D0D7DE] overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Header - Aligned strictly with the 5/7 column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 2xl:gap-12 items-end mb-8 lg:mb-10">
          {/* Left Column: Heading starts above the 7 buttons */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#103463]" />
              <span className="text-xs font-bold tracking-widest text-[#103463] uppercase">
                Industries
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#103463] tracking-tight">
              Industries We Serve
            </h2>
          </div>

          {/* Right Column: Subtitle text starts exactly where the right detail box starts */}
          <div className="lg:col-span-7">
            <h3 className="text-base sm:text-lg font-bold text-[#103463]">
              Trusted Across Sectors
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-justify">
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
                  className={`group relative text-left p-3.5 2xl:p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
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
                      className={`w-9 h-9 2xl:w-10 2xl:h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#103463] text-white"
                          : "bg-[#E5EAED] text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      <Icon size={17} strokeWidth={2} className="2xl:w-5 2xl:h-5" />
                    </div>
                    <span className="text-sm 2xl:text-base tracking-tight">
                      {sector.title}
                    </span>
                  </div>

                  <ArrowRight
                    size={15}
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

          {/* Right Column: Dedicated Side Detail Box - Height perfectly aligns with the 7 buttons, content fills cleanly without empty white gaps */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-3xl bg-white border border-[#D0D7DE] shadow-[0_20px_50px_-15px_rgba(16,52,99,0.08)] p-6 2xl:p-8 flex flex-col justify-between relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDesktopSector.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full space-y-4"
                >
                  {/* Top: Industry Title Lockup */}
                  <div>
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-2xl bg-[#103463] text-white flex items-center justify-center shadow-md shrink-0">
                        <ActiveIcon size={24} strokeWidth={2} className="2xl:w-7 2xl:h-7" />
                      </div>
                      <div>
                        <span className="text-xs 2xl:text-sm font-bold text-slate-400 uppercase tracking-widest block font-mono">
                          Sector {activeDesktopSector.id} / 07
                        </span>
                        <h3 className="text-xl 2xl:text-2xl font-black text-[#103463] tracking-tight">
                          {activeDesktopSector.title}
                        </h3>
                      </div>
                    </div>

                    {/* Middle: Clean Justified 2-Paragraph Continuous Text Filling the Box */}
                    <div className="space-y-3">
                      {activeDesktopSector.content.split("\n\n").map((para, i) => (
                        <p
                          key={i}
                          className="text-xs lg:text-[0.875rem] 2xl:text-base text-slate-700 leading-relaxed font-normal text-justify"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Two Compliance Badges in a Row */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#D0D7DE]/50">
                    <div className="p-3 2xl:p-3.5 rounded-xl bg-[#F7F9FB] border border-[#D0D7DE] flex items-center gap-2.5 text-xs 2xl:text-sm font-semibold text-[#103463]">
                      <ShieldCheck size={16} className="text-[#365D8A] shrink-0" />
                      <span>EU tested & verified credentials</span>
                    </div>
                    <div className="p-3 2xl:p-3.5 rounded-xl bg-[#F7F9FB] border border-[#D0D7DE] flex items-center gap-2.5 text-xs 2xl:text-sm font-semibold text-[#103463]">
                      <Check size={16} className="text-emerald-600 shrink-0" />
                      <span>EU compliant contracts</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Institutional Footer on PC */}
              <div className="pt-3.5 mt-4 border-t border-[#D0D7DE]/60 flex items-center justify-between">
                <span className="text-xs 2xl:text-sm text-slate-500 font-medium">
                  Direct corridor staffing for verified European and Slovakia enterprises.
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#103463] hover:text-[#365D8A] transition-colors"
                >
                  Consult for this sector <ArrowRight size={13} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
