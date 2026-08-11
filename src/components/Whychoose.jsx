import { motion } from "framer-motion";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

import video1 from "../assets/Whyus/video1.mp4";
import video2 from "../assets/Whyus/video2.mp4";
import video3 from "../assets/Whyus/video3.mp4";
import video4 from "../assets/Whyus/video4.mp4";
import video5 from "../assets/Whyus/video5.mp4";
import video6 from "../assets/Whyus/video6.mp4";
const Whychoose = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="whyus" className="py-10 md:py-16 lg:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 lg:mb-14">
          <Reveal>
            <Eyebrow>Why Us</Eyebrow>
          </Reveal>
          <h2 className="al-display al-h2 font-bold text-slate-900 leading-tight">
            Reasons candidates and <br />
            employers stay with us
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="rounded-2xl bg-[#F8FAFC] overflow-hidden flex flex-col p-4"
            variants={cardVariants}
          >
            <video
              src={video1}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-44 lg:h-58 object-cover rounded-2xl"
            />
            <div className="pt-2 flex flex-col justify-center">
              <h3 className="text-1xl font-bold mb-1">
                Strong Sourcing Network
              </h3>
              <p className="text-gray-600 leading-7">
                Pipelines by trade across Tamil Nadu and neighbouring states,
                built candidate by candidate.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-[#F8FAFC] overflow-hidden flex flex-col p-4"
            variants={cardVariants}
          >
            <video
              src={video2}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-44 lg:h-58 object-cover rounded-2xl"
            />
            <div className="pt-2 flex flex-col justify-center">
              <h3 className="text-1xl font-bold mb-1">
                Transparent Recruitment
              </h3>
              <p className="text-gray-600 leading-7">
                Every stage, cost and timeline stated up front and in writing.
                Nothing appears later.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-[#F8FAFC] overflow-hidden flex flex-col p-4"
            variants={cardVariants}
          >
            <video
              src={video3}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-44 lg:h-58 object-cover rounded-2xl"
            />
            <div className="pt-2 flex flex-col justify-center">
              <h3 className="text-1xl font-bold mb-1">
                Professional Screening
              </h3>
              <p className="text-gray-600 leading-7">
                Skills verified before submission, so employers interview
                candidates who can do the work.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-[#F8FAFC] overflow-hidden flex flex-col p-4"
            variants={cardVariants}
          >
            <video
              src={video4}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-44 lg:h-58 object-cover rounded-2xl"
            />
            <div className="pt-2 flex flex-col justify-center">
              <h3 className="text-1xl font-bold mb-1">Employer Matching</h3>
              <p className="text-gray-600 leading-7">
                We place people where the role, shift and pay genuinely fit,
                which is why they stay.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-[#F8FAFC] overflow-hidden flex flex-col p-4"
            variants={cardVariants}
          >
            <video
              src={video5}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-44 lg:h-58 object-cover rounded-2xl"
            />
            <div className="pt-2 flex flex-col justify-center">
              <h3 className="text-1xl font-bold mb-1">Personalised Support</h3>
              <p className="text-gray-600 leading-7">
                One named coordinator from first call to first week on site.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-[#F8FAFC] overflow-hidden flex flex-col p-4"
            variants={cardVariants}
          >
            <video
              src={video6}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-44 lg:h-58 object-cover rounded-2xl"
            />
            <div className="pt-2 flex flex-col justify-center">
              <h3 className="text-1xl font-bold mb-1">End-to-End Assistance</h3>
              <p className="text-gray-600 leading-7">
                Screening, documents, visa and departure handled by the same
                team.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whychoose;
