import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Warehouse,
  HardHat,
  Truck,
  Hotel,
  Wheat,
  Wrench,
} from "lucide-react";

const industriesWeServe = [
  {
    title: "Manufacturing",
    icon: Factory,
    description:
      "Providing skilled manpower for production, assembly, quality control, machine operations, and factory support.",
  },
  {
    title: "Logistics & Warehousing",
    icon: Warehouse,
    description:
      "Providing reliable workforce for inventory, packing, material handling, storage, and distribution operations.",
  },
  {
    title: "Construction & Infrastructure",
    icon: HardHat,
    description:
      "Providing experienced manpower for construction, infrastructure, skilled trades, equipment operations, and site activities.",
  },
  {
    title: "Transportation & Logistics",
    icon: Truck,
    description:
      "Supporting transportation with trained professionals for driving, fleet management, delivery, and logistics.",
  },
  {
    title: "Hospitality",
    icon: Hotel,
    description:
      "Providing reliable professionals for hospitality, including hotels, restaurants, housekeeping, and food services.",
  },
  {
    title: "Agriculture",
    icon: Wheat,
    description:
      "Supporting agriculture with reliable workers for farming, harvesting, processing, and seasonal operations.",
  },
  {
    title: "Maintenance & Engineering",
    icon: Wrench,
    description:
      "Providing skilled technicians and engineers for equipment maintenance, repairs, and industrial support services.",
  },
];

const marqueeItems = [...industriesWeServe, ...industriesWeServe];

export default function IndustriesWeServe() {
  return (
    <section id="industries" className="p-4 overflow-hidden">
      {/* Heading and Description */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-slate-400"></span>

            <span className="text-xs font-semibold tracking-widest text-slate-400">
              INDUSTRIES
            </span>
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl tracking-wider font-bold text-slate-900">
            Industries We Serve
          </h2>
        </motion.div>

        {/* Right Side Description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="lg:pt-2"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Trusted Across Sectors
          </h3>

          <p className="mt-3 text-sm md:text-base leading-7 text-slate-600">
            Delivering skilled workforce solutions across diverse industries
            with reliable manpower and professional expertise.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling Cards Row */}
      <div className="mt-12 w-full overflow-hidden 
      group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="flex gap-6 w-max p-4 
          animate-[marquee_32s_linear_infinite] group-hover:[animation-play-state:paused]"
        >
          {marqueeItems.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={`${industry.title}-${index}`}
                className="bg-gradient-to-br
                  from-sky-50 via-violet-50  to-rose-50 text-slate-900
                  rounded-lg p-4 flex flex-col gap-4  
                  border border-slate-200 tracking-wide w-[300px] 
                  shrink-0 shadow-lg shadow-slate-900/10">
                  
                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-white/60 
                flex items-center justify-center">
                  <Icon
                    className="w-6 h-6 text-slate-900"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}