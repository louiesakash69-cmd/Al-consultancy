import { motion } from "framer-motion";
import logoo from "../assets/logoo.png";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#whyus" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#E5EAED] border-t border-[#D0D7DE] relative overflow-hidden">
      <motion.div
        className="max-w-7xl 2xl:max-w-[1700px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Brand & Logo */}
        <motion.div
          className="flex items-center gap-3 shrink-0"
          variants={itemVariants}
        >
          <motion.img
            src={logoo}
            alt="AL Consultancy Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-xl p-1 bg-white border border-[#D0D7DE] shadow-xs"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <div className="text-left">
            <span className="text-sm sm:text-base font-extrabold tracking-wide uppercase text-[#103463] block leading-tight">
              AL Consultancy
            </span>
            <a
              href="mailto:info@alconsultancy.in"
              className="text-xs text-slate-600 hover:text-[#103463] font-medium transition-colors"
            >
              info@alconsultancy.in
            </a>
          </div>
        </motion.div>

        {/* Navigation Links - STRICTLY ALWAYS ON ONE SINGLE LINE / ROW ACROSS ALL DEVICES */}
        <motion.nav variants={itemVariants} aria-label="Footer Navigation" className="w-full lg:w-auto">
          <div className="flex flex-row items-center justify-center flex-nowrap whitespace-nowrap gap-2 sm:gap-4 md:gap-6">
            {links.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-700 hover:text-[#103463] hover:underline underline-offset-4 transition-all shrink-0"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Copyright */}
        <motion.div variants={itemVariants} className="shrink-0">
          <p className="text-xs text-slate-600 font-medium whitespace-nowrap">
            © 2026 AL Consultancy. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
