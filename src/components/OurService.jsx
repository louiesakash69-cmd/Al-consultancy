import React from "react";
import { motion } from "framer-motion";
import globe from "../assets/OurService/globe.png";
import candidate from "../assets/OurService/candidate.png";
import resume from "../assets/OurService/resume.png";
import interview from "../assets/OurService/interview.png";
import employer from "../assets/OurService/employer.png";
import documentation from "../assets/OurService/documentation.png";
import visa from "../assets/OurService/visa.png";
import predeparture from "../assets/OurService/predepature.png";
import endtoend from "../assets/OurService/end-to-end.png";

const ourServices = [
  {
    icon: globe,
    title: "International Manpower Recruitment",
    description:
      "Connecting overseas employers with skilled and semi-skilled professionals through reliable, ethical, and efficient recruitment solutions tailored to their workforce needs.",
  },
  {
    icon: candidate,
    title: "Candidate Sourcing & Screening",
    description:
      "We identify, evaluate, and screen qualified candidates to ensure they meet the specific requirements of international employers.",
  },
  {
    icon: resume,
    title: "Resume Shortlisting",
    description:
      "Our recruitment team carefully reviews and shortlists candidate profiles based on skills, experience, and job requirements.",
  },
  {
    icon: interview,
    title: "Interview Coordination",
    description:
      "We schedule and coordinate interviews between employers and shortlisted candidates, ensuring a smooth hiring experience.",
  },
  {
    icon: employer,
    title: "Employer-Candidate Matching",
    description:
      "We match the right talent with the right opportunities by aligning candidate skills with employer expectations.",
  },
  {
    icon: documentation,
    title: "Documentation Assistance",
    description:
      "We assist candidates in preparing and organizing the required employment documents for overseas recruitment.",
  },
  {
    icon: visa,
    title: "Visa Process Guidance",
    description:
      "We provide guidance throughout the visa application process to help candidates complete the necessary formalities with confidence.",
  },
  {
    icon: predeparture,
    title: "Pre-Departure Support",
    description:
      "We prepare candidates for international employment by offering guidance before their departure, ensuring a smooth transition.",
  },
  {
    icon: endtoend,
    title: "End-to-End Recruitment Assistance",
    description:
      "From sourcing candidates to successful overseas placement, we manage the complete recruitment process for employers and job seekers.",
  },
];

export default function OurService() {
  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">

        {/* Left side sticky */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:sticky lg:top-24 lg:self-start">

          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-xs font-semibold tracking-widest text-slate-400">
              SERVICES
            </span>
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl tracking-wider font-bold text-slate-900">
            Our Services
          </h2>

          <p className="mt-5 text-sm md:text-base leading-7 text-slate-600">
            We handle everything from sourcing candidates to placing them
            abroad, so employers and job seekers get a smooth recruitment
            experience.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="relative">

          {ourServices.map((service, index) => (

            <div
              key={index}
              className="sticky mb-6"
              style={{
                top: `${96 + index * 12}px`,
                zIndex: index + 1,
              }}
            >

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
                  bg-white text-slate-900 rounded-lg p-6 flex 
                  flex-col md:flex-row md:items-start gap-5
                  border-2 border-slate-200 tracking-wide shadow-xl">

                {/* Icon */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-center md:text-left">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm md:text-base leading-7 text-justify text-slate-600">
                    {service.description}
                  </p>
                </div>

              </motion.div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}