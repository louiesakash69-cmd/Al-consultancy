import logoo from "../assets/logoo.png";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const links = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      <footer className="bg-[#253459] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18 pb-12 border-b border-slate-700">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logoo}
                  alt="AL Consultancy Logo"
                  className="w-24 h-24 object-contain rounded-2xl"
                />
                <div>
                  <h2 className="text-3xl font-bold">
                    AL <span className="text-sky-400">Consultancy</span>
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 mt-5 leading-7">
                Empowering businesses with world-class recruitment, staffing,
                and global workforce solutions.
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-500 duration-300 flex items-center justify-center"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-500 duration-300 flex items-center justify-center"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-500 duration-300 flex items-center justify-center"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

              <ul className="space-y-4 text-gray-400">
                {links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:text-sky-400 flex items-center gap-2 duration-300"
                    >
                      <ArrowUpRight size={16} />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>

              <ul className="space-y-4 text-gray-400">
                {[
                  "Global Recruitment",
                  "Staffing Solutions",
                  "Executive Search",
                  "HR Consulting",
                  "Talent Acquisition",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-sky-400 duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <Phone className="text-sky-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p>+91 99999 99999</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-sky-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p>info@alconsultancy.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-sky-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Office</p>
                    <p>
                      Velachery, Chennai, Tamil Nadu,
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
            <p className="text-gray-400 text-sm">
              © AL Consultancy. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-sky-400">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-sky-400">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
