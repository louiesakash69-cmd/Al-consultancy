import React from "react";
import { motion } from "framer-motion";
import global from "../assets/OurService/global.png";
import candidate from "../assets/OurService/candidate.png";
import resume from "../assets/OurService/resume.png";
import interview from "../assets/OurService/interview.png";
import employer from "../assets/OurService/employer.png";
import document from "../assets/OurService/document.png";
import visa from "../assets/OurService/visa.png";
import predepature from "../assets/OurService/predepature.png";
import endtoend from "../assets/OurService/endtoend.png";
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
    bgImage: global,
  },
  {
    icon: UserSearch,
    title: "Candidate Sourcing & Screening",
    description:
      "We identify, evaluate, and screen qualified candidates to ensure they meet the specific requirements of international employers.",
    bgImage: candidate,
  },
  {
    icon: FileText,
    title: "Resume Shortlisting",
    description:
      "Our recruitment team carefully reviews and shortlists candidate profiles based on skills, experience, and job requirements.",
    bgImage: resume,
  },
  {
    icon: MessagesSquare,
    title: "Interview Coordination",
    description:
      "We schedule and coordinate interviews between employers and shortlisted candidates, ensuring a smooth hiring experience.",
    bgImage: interview,
  },
  {
    icon: Handshake,
    title: "Employer-Candidate Matching",
    description:
      "We match the right talent with the right opportunities by aligning candidate skills with employer expectations.",
    bgImage: employer,
  },
  {
    icon: FolderCheck,
    title: "Documentation Assistance",
    description:
      "We assist candidates in preparing and organizing the required employment documents for overseas recruitment.",
    bgImage: document,
  },
  {
    icon: Stamp,
    title: "Visa Process Guidance",
    description:
      "We provide guidance throughout the visa application process to help candidates complete the necessary formalities with confidence.",
    bgImage: visa,
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Support",
    description:
      "We prepare candidates for international employment by offering guidance before their departure, ensuring a smooth transition.",
    bgImage: predepature,
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Recruitment Assistance",
    description:
      "From sourcing candidates to successful overseas placement, we manage the complete recruitment process for employers and job seekers.",
    bgImage: endtoend,
  },
];

export default function OurService() {
  return (
    <section id="services" className="p-4">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1
        lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 p-4 lg:items-start"
      >
        {/* Left side sticky */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:sticky lg:top-24 lg:self-start"
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
          <p className="mt-5 text-sm sm:text-base xl:text-lg leading-7 sm:leading-7
 text-slate-600">
            We handle everything from sourcing to placement, giving employers
            and job seekers a smooth, end-to-end recruitment experience.
          </p>

          <p className="mt-5 text-sm sm:text-base xl:text-lg leading-7 sm:leading-7
 text-slate-600">
            We work only with verified employers and confirmed vacancies, so
            candidates get complete clarity before they commit.
          </p>

          <p className="mt-5 text-sm sm:text-base xl:text-lg leading-7 sm:leading-7
 text-slate-600">
            Costs, documentation, and timelines — every step stays clear,
            transparent, and free of surprises.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative p-4">
          {ourServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="sticky mb-3"
                style={{
                  top: `${96 + index * 8}px`,
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
                  min-h-[260px] sm:aspect-[4/3] w-full max-w-full mx-auto
                  shadow-xl border border-slate-200
                "
                >
                  {/* Background image */}
                  <img
                    src={service.bgImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Dark overlay for text contrast */}
                  <div className="absolute inset-0 bg-black/35" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90
                 via-black/60 to-black/40"
                  />

                  {/* Centered content */}
                  <div
                    className="relative z-10 flex flex-col items-center 
                justify-center text-center h-full p-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-white/20 border
                     border-white/30 backdrop-blur-sm flex items-center justify-center shrink-0">
                      {Icon && (
                        <Icon
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                          strokeWidth={1.75}
                        />
                      )}
                    </div>

                    <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-lg leading-5 sm:leading-6 md:leading-7 text-white/85">
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