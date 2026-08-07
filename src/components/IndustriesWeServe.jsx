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
      "Supporting industrial operations with skilled and reliable workforce solutions. We provide manpower for production, assembly, quality control, machine operations, and factory support roles to improve efficiency and productivity.",
  },
  {
    title: "Logistics & Warehousing",
    icon: Warehouse,
    description:
      "Providing workforce solutions for supply chain operations including inventory management, packing, material handling, storage, and distribution activities to ensure smooth business operations.",
  },
  {
    title: "Construction & Infrastructure",
    icon: HardHat,
    description:
      "Delivering experienced manpower for construction projects, infrastructure development, and industrial works. Our workforce supports skilled trades, equipment operations, and site activities.",
  },
  {
    title: "Transportation & Logistics",
    icon: Truck,
    description:
      "Helping transportation companies maintain efficient operations with trained professionals for fleet management, driving, delivery support, and logistics services.",
  },
  {
    title: "Hospitality",
    icon: Hotel,
    description:
      "Providing dedicated professionals for hotels, resorts, restaurants, and service industries. Our workforce supports guest services, housekeeping, food and beverage operations.",
  },
  {
    title: "Agriculture",
    icon: Wheat,
    description:
      "Supporting agricultural businesses with dependable workforce solutions for farming, harvesting, processing, and seasonal operational requirements.",
  },
  {
    title: "Maintenance & Engineering",
    icon: Wrench,
    description:
      "Providing skilled technicians and engineering professionals for equipment maintenance, technical operations, repairs, and industrial support services.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section id="industries" className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left side heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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

        {/* Right side description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
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

      {/* Cards row */}
      <div className="mt-12 w-full overflow-x-auto">
        <div className="flex gap-6 w-max px-4">
          {industriesWeServe.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="
                bg-white text-slate-900 rounded-lg p-6 flex flex-col gap-4
                border-2 border-slate-200 tracking-wide
                w-[280px] shrink-0"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center">
                <industry.icon className="w-6 h-6 text-slate-900" strokeWidth={1.75} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold">{industry.title}</h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-7 text-slate-600">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}