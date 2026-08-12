import logoo from "../assets/logoo.png";
const Footer = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#whyus" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <footer className="bg-[#d9e8f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <img
              src={logoo}
              alt="AL Consultancy Logo"
              className="w-12 h-12 object-contain rounded-md"
            />
            <div>
              <span className="text-lg text-gray-600 font-bold tracking-wide uppercase">
                AL Consultancy
              </span>
              <p className="text-gray-600 text-xs md:text-sm">
                info@alconsultancy.in
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-sm text-gray-600 order-3 md:order-2">
            © 2026 AL Consultancy. All rights reserved.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3 order-2 md:order-3">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xs md:text-sm text-gray-600 hover:text-sky-400 duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
