import {
  Globe,
  ArrowRight,
  BadgeCheck,
  Clock3,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 sm:w-20 h-[1px] bg-[#465467]"></span>
          <p className="text-xs sm:text-sm font-semibold tracking-[3px] text-[#465467] uppercase">
            Contact Us
          </p>
        </div>

        <div className="flex flex-col items-center mb-7">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] text-center">
            Let's Connect
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 text-center leading-7 sm:leading-8 max-w-2xl">
            We're here to help you build a stronger workforce and achieve your
            global hiring goals.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-7"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Get in Touch */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-6 sm:mb-8 leading-7 text-sm sm:text-base">
              Have questions about our recruitment or staffing services? Our
              team is ready to help you find the right talent.
            </p>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-sky-600" size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">Phone</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-500">
                    +91 99999 99999
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-sky-600" size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">Email</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-500 break-all">
                    info@alconsultancy.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-sky-600" size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">Office Address</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-500 leading-7">
                    Velachery,
                    <br />
                    Chennai, Tamil Nadu,
                    <br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-sky-600" size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">Working Hours</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-500">
                    Monday - Saturday
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Send us a Message */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 h-full flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
            <form className="space-y-5 sm:space-y-6 flex flex-col flex-1">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-4">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                    className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 focus:border-sky-500 outline-none transition"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 focus:border-sky-500 outline-none transition"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-4">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 99999 99999"
                    onChange={(e) => setphone(e.target.value)}
                    value={phone}
                    className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 focus:border-sky-500 outline-none transition"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Recruitment Enquiry"
                    onChange={(e) => setsubject(e.target.value)}
                    value={subject}
                    className="w-full rounded-xl border border-gray-300 px-4 sm:px-5 py-3 focus:border-sky-500 outline-none transition"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  onChange={(e) => setmessage(e.target.value)}
                  value={message}
                  className="w-full flex-1 min-h-[90px] rounded-xl border border-gray-300 px-4 sm:px-5 py-3 resize-none focus:border-sky-500 outline-none transition"
                />
              </div>
              <button
                className="w-full bg-sky-500 hover:bg-sky-400 py-3.5 sm:py-4 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => {
                  setname("");
                  setemail("");
                  setphone("");
                  setsubject("");
                  setmessage("");
                  alert("Message Sended Successfully..!");
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          className="bg-[#253459] rounded-[24px] sm:rounded-[30px] px-6 sm:px-10 py-6 sm:py-4 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl text-center lg:text-left"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-sky-400/30 flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Globe size={40} className="text-white sm:hidden" />
              <Globe size={52} className="text-white hidden sm:block" />
            </motion.div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Ready to Hire Globally?
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 max-w-xl leading-6 sm:leading-7">
                Partner with{" "}
                <span className="font-semibold text-white">AL Consultancy</span>{" "}
                to connect with skilled professionals across international
                markets.
              </p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-5 sm:px-4 py-3 sm:py-2 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:scale-105 w-full sm:w-auto">
            Schedule a Consultation
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              title: "Free Consultation",
              description: "Get expert guidance before getting started.",
              icon: <BadgeCheck className="text-sky-600" size={26} />,
              bg: "bg-sky-100",
            },
            {
              title: "Fast Response",
              description: "Response within 24 hours.",
              icon: <Clock3 className="text-green-600" size={26} />,
              bg: "bg-green-100",
            },
            {
              title: "Global Recruitment Experts",
              description:
                "Connecting businesses with top international talent.",
              icon: <Globe2 className="text-purple-600" size={26} />,
              bg: "bg-purple-100",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 hover:shadow-2xl cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}
              >
                {item.icon}
              </motion.div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
