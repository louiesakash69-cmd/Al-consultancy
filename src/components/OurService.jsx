import React from "react";
import { motion } from "framer-motion";
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
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */

/* Layout numbers. Change them here, not inside the JSX. */
const LAYOUT = {
  navMobile: "4.5rem", // height of your fixed navbar on mobile
  navDesktop: "6rem", // height of your fixed navbar on desktop
  headMobile: "36dvh", // top panel height on mobile
  gapMobile: "0.75rem", // space between top panel and first card on mobile
  bottomRoomMobile: "5.5rem", // space kept free under the cards on mobile
  bottomRoomDesktop: "6.5rem", // space kept free under the cards on desktop
  cardMinMobile: "250px",
  cardMinDesktop: "480px",
  stackOffsetPx: 6, // how far each stacked card peeks out
};

/* Full class strings (not built dynamically) so Tailwind can find them. */
const C = {
  pageBg: "bg-[#F5F7FA]",
  accentBg: "bg-[#4AB1CC]", // light blue accent (was orange)
  accentText: "text-[#4AB1CC]",
  navyText: "text-[#103463]",
  inkText: "text-[#232D37]",
  mutedText: "text-[#52606D]",
};

const CARD_THEME = {
  light: {
    card: "border-[#D0D7DE] bg-white text-[#232D37]",
    iconBox: "border border-[#103463]/10 bg-[#F5F7FA] text-[#103463]",
    counter: "text-[#103463]/55",
    bigNumber: "text-[#103463]",
    title: "text-[#232D37]",
    description: "text-[#52606D]",
    footerBorder: "border-[#D0D7DE]/70",
    footerText: "text-[#52606D]",
  },
  dark: {
    card: "border-[#103463] bg-[#103463] text-[#F5F7FA]",
    iconBox: "border border-white/15 bg-white/10 text-[#4AB1CC]",
    counter: "text-[#D0D7DE]",
    bigNumber: "text-white",
    title: "text-[#F5F7FA]",
    description: "text-[#D0D7DE]",
    footerBorder: "border-white/15",
    footerText: "text-[#D0D7DE]",
  },
};

const BRAND_NAME = "AL Consultancy";

/* Only the first paragraph shows on mobile (the top panel has no room for more). */
const INTRO = [
  "We handle everything from sourcing to placement, giving employers and job seekers a smooth, end-to-end recruitment experience.",
  "We work only with verified employers and confirmed vacancies, so candidates get complete clarity before they commit.",
  "Costs, documentation, and timelines  every step stays clear, transparent, and free of surprises.",
];

const ourServices = [
  {
    icon: Globe2,
    title: "International Manpower Recruitment",
    description:
      "We connect overseas employers with skilled and semi-skilled professionals across various industries. Our reliable and ethical recruitment solutions help businesses find the right talent to meet their workforce requirements.",
  },
  {
    icon: UserSearch,
    title: "Candidate Sourcing & Screening",
    description:
      "We identify and evaluate potential candidates based on their qualifications, skills, and professional experience. Our screening process ensures candidates align with employer requirements and job expectations.",
  },
  {
    icon: FileText,
    title: "Resume Shortlisting",
    description:
      "We carefully review candidate resumes to assess qualifications, experience, and relevant skills. Our structured shortlisting process helps employers identify suitable applicants and simplify hiring decisions.",
  },
  {
    icon: MessagesSquare,
    title: "Interview Coordination",
    description:
      "We coordinate interviews between employers and shortlisted candidates by managing schedules and communication. Our support ensures a smooth, organized, and efficient interview experience for everyone involved.",
  },
  {
    icon: Handshake,
    title: "Employer-Candidate Matching",
    description:
      "We match qualified professionals with suitable job opportunities based on skills, experience, and employer expectations. Our approach promotes better hiring decisions and successful long-term employment relationships.",
  },
  {
    icon: FolderCheck,
    title: "Documentation Assistance",
    description:
      "We assist candidates in preparing and organizing essential documents for overseas employment. Our guidance helps ensure accurate paperwork, complete submissions, and a more organized recruitment process.",
  },
  {
    icon: Stamp,
    title: "Visa Process Guidance",
    description:
      "We guide candidates through the general visa application process for overseas employment. Our team helps them understand documentation requirements, application procedures, and essential formalities for their destination country.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Support",
    description:
      "We prepare candidates for overseas employment with practical guidance on travel, documentation, and workplace expectations. Our support helps ensure a smooth transition into their new international work environment.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Recruitment Assistance",
    description:
      "We support the entire recruitment journey, from candidate sourcing and screening to interviews and placement coordination. Our comprehensive services simplify hiring and create a seamless experience for employers and candidates.",
  },
];

const TOTAL = String(ourServices.length).padStart(2, "0");

/*
  Mobile  : heading panel sticks in the TOP part of the screen,
            cards stack in the BOTTOM part underneath it.
  Desktop : heading panel sticks on the LEFT, cards stack on the RIGHT,
            and every card is exactly as tall as the left panel.
*/
const layoutCss = `
  .os-root {
    --nav: ${LAYOUT.navMobile};
    --head-h: ${LAYOUT.headMobile};
    --gap: ${LAYOUT.gapMobile};
    --head-box: var(--head-h);
    --stack-top: calc(var(--head-h) + var(--gap));
    --card-h: calc(100dvh - var(--nav) - var(--head-h) - var(--gap) - ${LAYOUT.bottomRoomMobile});
    --card-min: ${LAYOUT.cardMinMobile};
  }

  @media (min-width: 1024px) {
    .os-root {
      --nav: ${LAYOUT.navDesktop};
      --head-h: 0px;
      --gap: 0px;
      --stack-top: 0px;
      --card-h: calc(100dvh - var(--nav) - ${LAYOUT.bottomRoomDesktop});
      --head-box: var(--card-h);
      --card-min: ${LAYOUT.cardMinDesktop};
    }
    .os-head { min-height: var(--card-min); }
  }

  .os-head {
    position: sticky;
    top: var(--nav);
    height: var(--head-box);
  }

  .os-wrap {
    position: sticky;
    top: calc(var(--nav) + var(--stack-top) + var(--off, 0px));
  }

  .os-card {
    height: var(--card-h);
    min-height: var(--card-min);
  }
`;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function OurService() {
  return (
    <section id="services" className={`os-root relative ${C.pageBg}`}>
      <style>{layoutCss}</style>

      {/* Parent div: container + mx-auto. Plain block on mobile (so the heading
          can stay sticky for the whole card list), two-column grid from lg up. */}
      <div className="mx-auto max-w-7xl 2xl:max-w-[1700px] 2xl:px-8 py-10 sm:px-4 max-sm:px-5 sm:py-14 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 mx-auto xl:gap-20">
        {/* LEFT on desktop / TOP HALF on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`os-head z-49 flex flex-col justify-center ${C.pageBg}`}
        >
          <div className="flex items-center gap-2.5">
            <span className={`h-[3px] w-8 rounded-full ${C.accentBg}`} />
            <span
              className={`text-xs font-bold tracking-[0.22em] sm:text-sm ${C.navyText}`}
            >
              SERVICES
            </span>
          </div>

          <h2
            className={`mt-3 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:mt-4 lg:text-5xl xl:text-6xl ${C.inkText}`}
          >
            Our{" "}
            <span className={`relative inline-block ${C.navyText}`}>
              Services
              <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-0 h-1.5 w-2/3 rounded-full sm:-bottom-2 ${C.accentBg}`}
              />
            </span>
          </h2>

          {INTRO.map((text, i) => (
            <p
              key={i}
              className={`max-w-lg text-sm leading-6 sm:text-base sm:leading-7 lg:leading-8 xl:text-lg ${
                C.mutedText
              } ${
                i === 0 ? "mt-4 lg:mt-7" : "mt-5 hidden lg:block"
              }`}
            >
              {text}
            </p>
          ))}

          <div
            className={`mt-4 inline-flex items-center gap-2 text-sm font-bold lg:mt-7 ${C.navyText}`}
          >
            Explore our services
            <ArrowUpRight size={18} className={C.accentText} />
          </div>
        </motion.div>

        {/* RIGHT on desktop / BOTTOM HALF on mobile */}
        <div className="relative min-w-0 pb-4 pt-3 lg:pt-0">
          {ourServices.map((service, index) => {
            const Icon = service.icon;
            const t = index % 2 === 1 ? CARD_THEME.dark : CARD_THEME.light;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.title}
                className="os-wrap os-card mb-3 lg:mb-6"
                style={{
                  "--off": `${index * LAYOUT.stackOffsetPx}px`,
                  zIndex: index + 1,
                }}
              >
                <motion.article
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`group relative isolate flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border p-4  sm:rounded-3xl sm:p-7 lg:p-10 ${t.card}`}
                >
                  {/* Decorative background number */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-2 -top-7 -z-10 select-none text-[110px] font-black leading-none tracking-tighter opacity-[0.055] sm:-right-1 sm:-top-8 sm:text-[140px] lg:-top-10 lg:text-[220px] ${t.bigNumber}`}
                  >
                    {num}
                  </span>

                  {/* Accent bar */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-1 w-16 rounded-br-full transition-all duration-300 group-hover:w-28 sm:h-1.5 ${C.accentBg}`}
                  />

                  {/* Icon and service number */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl lg:h-16 lg:w-16 ${t.iconBox}`}
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                      />
                    </div>

                    <span
                      className={`pt-1 font-mono text-xs font-bold tracking-[0.2em] sm:text-sm ${t.counter}`}
                    >
                      {num} / {TOTAL}
                    </span>
                  </div>

                  {/* Title and description */}
                  <div className="max-w-lg">
                    <h3
                      className={`max-w-md text-base font-extrabold leading-snug tracking-tight sm:text-xl md:text-2xl lg:text-3xl ${t.title}`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-2 text-xs leading-5 sm:mt-3 sm:text-sm sm:leading-7 lg:mt-4 lg:text-base lg:leading-8 ${t.description}`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Footer: hidden on small phones to give the text room */}
                  <div
                    className={`hidden items-center justify-between border-t pt-3 sm:flex ${t.footerBorder}`}
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs ${t.footerText}`}
                    >
                      {BRAND_NAME}
                    </span>

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${C.accentText}`}
                    />
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}