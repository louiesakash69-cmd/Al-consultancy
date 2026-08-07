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
    <section id="services" className="py-16 px-4 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl tracking-wider font-bold text-slate-900">
        Our Services
      </h2>

      <div className="w-20 h-1 bg-slate-900 mx-auto mt-5 rounded-full"></div>
    </motion.div>


      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {ourServices.map((service, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}

            whileHover={{
              y: -6,
            }}

            className="
              bg-slate-900 text-white rounded-lg p-6 flex flex-col min-h-[320px]
               border-2 border-transparent transition-all duration-300 hover:border-white
              hover:[box-shadow:10px_10px_0px_0px_#ffffff] tracking-wide">

            {/* Icon */}
            <div className="flex justify-center  md:justify-start mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-8 h-8 object-contain"
              />
            </div>


            {/* Title */}
            <h3 className="text-xl font-bold text-center md:text-left min-h-[64px]">
              {service.title}
            </h3>


            {/* Description */}
            <p className="mt-3 text-sm md:text-base leading-7 text-justify flex-grow">
              {service.description}
            </p>


          </motion.div>

        ))}

      </div>

    </section>
  );
}