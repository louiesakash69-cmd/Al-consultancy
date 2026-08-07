import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.jpg";
import img6 from "../assets/img-6.jpg";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="rounded-2xl overflow-hidden"
            variants={cardVariants}
          >
            <img
              src={img1}
              alt=""
              className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="bg-[#F8FAFC] rounded-2xl border border-gray-300 p-6 flex flex-col justify-center"
            variants={cardVariants}
          >
            <p className="text-gray-500">01</p>
            <h3 className="text-1xl font-bold mb-4">Strong Sourcing Network</h3>
            <p className="text-gray-600 leading-7">
              Pipelines by trade across Tamil Nadu and neighbouring states,
              built candidate by candidate.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden"
            variants={cardVariants}
          >
            <img
              src={img2}
              alt=""
              className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="bg-[#F8FAFC] rounded-2xl border border-gray-300 p-6 flex flex-col justify-center"
            variants={cardVariants}
          >
            <p className="text-gray-500">02</p>
            <h3 className="text-1xl font-bold mb-4">Transparent Recruitment</h3>
            <p className="text-gray-600 leading-7">
              Every stage, cost and timeline stated up front and in writing.
              Nothing appears later.
            </p>
          </motion.div>
          <motion.div
            className="bg-[#F8FAFC] rounded-2xl border border-gray-300 p-6 flex flex-col justify-center"
            variants={cardVariants}
          >
            <p className="text-gray-500">03</p>
            <h3 className="text-1xl font-bold mb-4">Professional Screening</h3>
            <p className="text-gray-600 leading-7">
              Skills verified before submission, so employers interview
              candidates who can do the work.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden"
            variants={cardVariants}
          >
            <img
              src={img3}
              alt=""
              className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="bg-[#F8FAFC] rounded-2xl border border-gray-300 p-6 flex flex-col justify-center"
            variants={cardVariants}
          >
            <p className="text-gray-500">04</p>
            <h3 className="text-1xl font-bold mb-4">Employer Matching</h3>
            <p className="text-gray-600 leading-7">
              We place people where the role, shift and pay genuinely fit, which
              is why they stay.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden"
            variants={cardVariants}
          >
            <img
              src={img4}
              alt=""
              className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden"
            variants={cardVariants}
          >
            <img
              src={img5}
              alt=""
              className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="bg-[#F8FAFC] rounded-2xl border border-gray-300 p-6 flex flex-col justify-center"
            variants={cardVariants}
          >
            <p className="text-gray-500">05</p>
            <h3 className="text-1xl font-bold mb-4">Personalised Support</h3>
            <p className="text-gray-600 leading-7">
              One named coordinator from first call to first week on site.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden"
            variants={cardVariants}
          >
            <img
              src={img6}
              alt=""
              className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            className="bg-[#F8FAFC] rounded-2xl border border-gray-300 p-6 flex flex-col justify-center"
            variants={cardVariants}
          >
            <p className="text-gray-500">06</p>
            <h3 className="text-1xl font-bold mb-4">End-to-End Assistance</h3>
            <p className="text-gray-600 leading-7">
              Screening, documents, visa and departure handled by the same team.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whychoose;
