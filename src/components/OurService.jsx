import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  UserSearch,
  FileText,
  MessagesSquare,
  Handshake,
  FolderCheck,
  Stamp,
  PlaneTakeoff,
  CheckCircle2,
} from "lucide-react";

const ourServices = [
  {
    icon: Globe2,
    title: "International Manpower Recruitment",
    description:
      "Connecting overseas employers with skilled and semi-skilled professionals through reliable, ethical, and efficient recruitment solutions tailored to their workforce needs.",
  },
  {
    icon: UserSearch,
    title: "Candidate Sourcing & Screening",
    description:
      "We identify, evaluate, and screen qualified candidates to ensure they meet the specific requirements of international employers.",
  },
  {
    icon: FileText,
    title: "Resume Shortlisting",
    description:
      "Our recruitment team carefully reviews and shortlists candidate profiles based on skills, experience, and job requirements.",
  },
  {
    icon: MessagesSquare,
    title: "Interview Coordination",
    description:
      "We schedule and coordinate interviews between employers and shortlisted candidates, ensuring a smooth hiring experience.",
  },
  {
    icon: Handshake,
    title: "Employer-Candidate Matching",
    description:
      "We match the right talent with the right opportunities by aligning candidate skills with employer expectations.",
  },
  {
    icon: FolderCheck,
    title: "Documentation Assistance",
    description:
      "We assist candidates in preparing and organizing the required employment documents for overseas recruitment.",
  },
  {
    icon: Stamp,
    title: "Visa Process Guidance",
    description:
      "We provide guidance throughout the visa application process to help candidates complete the necessary formalities with confidence.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Support",
    description:
      "We prepare candidates for international employment by offering guidance before their departure, ensuring a smooth transition.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Recruitment Assistance",
    description:
      "From sourcing candidates to successful overseas placement, we manage the complete recruitment process for employers and job seekers.",
  },
];

export default function OurService() {
  return (
    <section id="services" className="py-7 md:py-12 lg:py-16">
      <div
        className="px-4 max-w-7xl mx-auto grid grid-cols-1
        sm:grid-cols-[1fr_1.1fr] gap-10 sm:gap-16 sm:items-start">

        {/* Left side sticky */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="sticky top-20 z-0 bg-white pb-6
          sm:sticky sm:top-24 sm:self-start sm:z-auto sm:bg-transparent sm:pb-0"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-slate-400">
              SERVICES
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 
          tracking-wider font-bold text-slate-900">
            Our Services
          </h2>
          <p className="mt-5 text-sm sm:text-base xl:text-lg leading-7
            text-slate-600">
            We handle everything from sourcing to placement, giving employers
            and job seekers a smooth, end-to-end recruitment experience.
          </p>

          <p className="mt-5 text-sm sm:text-base xl:text-lg leading-7  text-slate-600">
            We work only with verified employers and confirmed vacancies, so
            candidates get complete clarity before they commit.
          </p>

          <p className="mt-5 text-sm sm:text-base xl:text-lg leading-7  text-slate-600">
            Costs, documentation, and timelines — every step stays clear,
            transparent, and free of surprises.
          </p>
        </motion.div>
        {/* Cards */}
        <div className="relative">
          {ourServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="sticky mb-3 top-[var(--card-top-sm)] sm:top-[var(--card-top-md)]"
                style={{
                  "--card-top-sm": `${180 + index * 8}px`,
                  "--card-top-md": `${96 + index * 8}px`,
                  zIndex: index + 1,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="
                  relative overflow-hidden rounded-2xl
                  min-h-[160px] sm:aspect-[16/9] w-full max-w-md sm:max-w-lg mx-auto
                  border border-slate-200"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #f0f9ff, #f5f3ff, #fff1f2)",
                  }}>

                  {/*  content */}

                  <div className="relative z-10 flex flex-col items-start 
                  justify-center text-left h-full p-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white border
                     border-slate-200 flex items-center justify-center shrink-0">
                      {Icon && (
                        <Icon
                          className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700"
                          strokeWidth={1.75}
                        />
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6
                     text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}