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

// All seven subdivisions with complete, justified continuous paragraphs
const industriesWeServe = [
  {
    id: "01",
    title: "Manufacturing",
    icon: Factory,
    content:
      "AL Consultancy provides reliable workforce solutions for industrial production, CNC machine operations, precision tooling, assembly line logistics, and strict quality control compliance. Candidates deployed within this sector undergo technical skill verification to meet European engineering standards, ensuring immediate operational efficiency, adherence to factory workplace safety regulations, and dependable productivity across advanced automotive and automated manufacturing plants in Slovakia and the wider European corridor.",
  },
  {
    id: "02",
    title: "Logistics & Warehousing",
    icon: Warehouse,
    content:
      "We source and deploy trained warehouse associates, inventory controllers, order pickers, and certified material handling equipment operators across central distribution hubs. Our personnel are experienced in enterprise warehouse management software, systematic inventory tracking, automated sorting systems, and round-the-clock shift cycles, providing scalable staffing support to maintain continuous supply chain momentum, minimized dispatch turnaround times, and safe cargo handling protocols.",
  },
  {
    id: "03",
    title: "Construction & Infrastructure",
    icon: HardHat,
    content:
      "Our infrastructure staffing division delivers seasoned tradespeople, heavy equipment operators, structural assemblers, site technicians, and civil works specialists for modern commercial and industrial developments. Every candidate is screened for verified site safety compliance, blueprint interpretation capabilities, and hands-on site experience, assisting primary contractors in meeting rigorous construction deadlines while maintaining full adherence to EU structural building codes and safety norms.",
  },
  {
    id: "04",
    title: "Transportation & Logistics",
    icon: Truck,
    content:
      "We connect verified international drivers, commercial fleet operators, freight handlers, and transit coordinators with established European transport networks. Candidates hold valid licensing, clean driving records, and cross-border haulage expertise, ensuring dependable long-haul delivery schedules, route optimization, strict tachograph driving-time compliance, and secure carriage of goods across strategic European arterial transit corridors.",
  },
  {
    id: "05",
    title: "Hospitality",
    icon: Hotel,
    content:
      "AL Consultancy supports leading hotels, resorts, commercial restaurants, and institutional catering operations with service-driven hospitality professionals. From housekeeping team members and banquet assistants to kitchen line support and guest relations staff, we focus on verified background checks, language proficiency, customer care etiquette, and adaptable service excellence to elevate guest satisfaction across diverse hospitality establishments.",
  },
  {
    id: "06",
    title: "Agriculture",
    icon: Wheat,
    content:
      "We supply dedicated seasonal and permanent agricultural manpower for commercial farming, modern greenhouse facilities, automated harvesting operations, and crop processing units. Our candidates possess proven stamina, equipment handling know-how, and agro-handling diligence, ensuring timely harvest cycles, reduction of post-harvest crop loss, and continuous support for European agricultural and agri-business enterprises.",
  },
  {
    id: "07",
    title: "Maintenance & Engineering",
    icon: Wrench,
    content:
      "Our engineering recruitment division recruits skilled electromechanical technicians, industrial maintenance specialists, HVAC operators, and facility engineers. Personnel are selected based on rigorous diagnostic proficiency, preventive maintenance discipline, and rapid troubleshooting capabilities, minimizing plant machinery downtime and protecting critical industrial assets across manufacturing, commercial, and utility environments.",
  },
];

export default function IndustriesWeServe() {
  // Initially null so all 7 sectors are closed on refresh, open on click
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSector = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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

        {/* Accordion List: Full Width across screen, scalable up to 4K */}
        <div className="space-y-3 2xl:space-y-4">
          {industriesWeServe.map((sector, index) => {
            const Icon = sector.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={sector.id}
                className={`rounded-2xl 2xl:rounded-3xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#103463] shadow-[0_12px_32px_-10px_rgba(16,52,99,0.15)]"
                    : "bg-white/80 hover:bg-white border-[#D0D7DE] hover:border-slate-300 shadow-xs"
                }`}
              >
                {/* Clickable Header for Industry */}
                <button
                  type="button"
                  onClick={() => toggleSector(index)}
                  className="w-full text-left p-4 sm:p-5 2xl:p-6 flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 2xl:gap-5 min-w-0">
                    <span className="text-xs sm:text-sm 2xl:text-base font-mono text-slate-400 font-bold shrink-0">
                      {sector.id}
                    </span>
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 2xl:w-13 2xl:h-13 rounded-xl 2xl:rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#103463] text-white"
                          : "bg-[#E5EAED] text-slate-600"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} className="sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
                    </div>
                    <span
                      className={`text-base sm:text-lg 2xl:text-xl font-bold tracking-tight truncate ${
                        isOpen ? "text-[#103463]" : "text-slate-800"
                      }`}
                    >
                      {sector.title}
                    </span>
                  </div>

                  {/* Toggle Arrow */}
                  <div
                    className={`w-8 h-8 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#E5EAED] text-[#103463] rotate-180"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <ChevronDown size={18} className="2xl:w-5 2xl:h-5" />
                  </div>
                </button>

                {/* Content displayed directly below the clicked industry */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 2xl:px-8 pb-6 2xl:pb-8 pt-2 border-t border-[#D0D7DE]/60 space-y-4 bg-gradient-to-b from-[#F7F9FB]/60 to-white">
                        
                        {/* Comprehensive Justified Paragraph (no bullet points) */}
                        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-700 leading-relaxed font-normal pt-2 text-justify">
                          {sector.content}
                        </p>

                        {/* Both boxes strictly in the same row on mobile & desktop without truncation */}
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 2xl:gap-4 pt-1">
                          <div className="p-1.5 sm:p-2.5 2xl:p-3 rounded-lg sm:rounded-xl bg-white border border-[#D0D7DE] flex items-center gap-1 sm:gap-2 shadow-xs min-w-0">
                            <ShieldCheck size={13} className="text-[#365D8A] shrink-0 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5" />
                            <span className="text-[9.5px] sm:text-xs md:text-sm 2xl:text-base font-semibold text-[#103463] leading-tight">
                              EU tested & verified credentials
                            </span>
                          </div>
                          <div className="p-1.5 sm:p-2.5 2xl:p-3 rounded-lg sm:rounded-xl bg-white border border-[#D0D7DE] flex items-center gap-1 sm:gap-2 shadow-xs min-w-0">
                            <Check size={13} className="text-emerald-600 shrink-0 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5" />
                            <span className="text-[9.5px] sm:text-xs md:text-sm 2xl:text-base font-semibold text-[#103463] leading-tight">
                              EU compliant contracts
                            </span>
                          </div>
                        </div>

                        {/* Institutional Action Footer - strictly on the same row with no ellipsis */}
                        <div className="pt-2 flex flex-row items-center justify-between gap-1.5 sm:gap-2 border-t border-[#D0D7DE]/40">
                          <span className="text-[8px] min-[380px]:text-[9px] sm:text-xs 2xl:text-sm text-slate-500 font-medium leading-tight whitespace-nowrap">
                            Direct corridor staffing for verified European and Slovakia enterprises.
                          </span>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-0.5 sm:gap-1 text-[8px] min-[380px]:text-[9px] sm:text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#103463] hover:text-[#365D8A] transition-colors shrink-0 whitespace-nowrap"
                          >
                            Consult <ArrowRight size={10} className="sm:w-3 sm:h-3 2xl:w-4 2xl:h-4" />
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

      </div>
    </section>
  );
}
