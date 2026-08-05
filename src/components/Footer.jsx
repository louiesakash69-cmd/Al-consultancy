import logo from "../assets/logo.jpeg";
const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 px-6 py-8 md:px-15 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-around pb-8 border-b border-b-[#465467] gap-8">
          <div className="flex flex-col items-start gap-5 md:w-1/2">
            <img
              className="w-[80px] h-[80px] rounded-2xl"
              src={logo}
              alt="logo image"
            />
            <span className="block text-[#465467] text-sm md:text-base">
              International manpower recruitment from Velachery, Chennai,
              placing skilled Indian workers with verified employers in
              Slovakia, Croatia and Slovenia.
            </span>
            <div className="text-white inline-flex items-center gap-2 border border-[#434a6fbe]-[1px] bg-[#1c1f2e] rounded-4xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <p className="text-sm">hello@alconsultancy.in</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-16 text-[#465467]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[#7d8b9e] font-semibold">COMPANY</h4>
              <p>About</p>
              <p>Why Us</p>
              <p>Process</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#7d8b9e] font-semibold">SERVICES</h4>
              <p>Recruitment</p>
              <p>Roles</p>
              <p>Visa assistance</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#7d8b9e] font-semibold">CONNECT</h4>
              <p>Countries</p>
              <p>Apply</p>
              <p>Email</p>
            </div>
          </div>
        </div>
        <div className="mt-5 text-[#465467] flex flex-col sm:flex-row items-center justify-between gap-3 text-sm md:text-base">
          <p>© 2026 AL Consultancy</p>
          <p>Ethical international recruitment</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
