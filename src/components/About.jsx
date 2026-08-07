import { BadgeCheck, Building2, Globe2, ShieldCheck, Target, Users } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-14 md:py-24 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="al-display al-h2 mt-6 max-w-lg">
                A recruitment partner built around the candidate, not the paperwork
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-7 space-y-5 max-w-xl">
                <p className="al-body">
                  AL Consultancy is an international manpower recruitment firm based in Velachery,
                  Chennai. For over two years we have connected skilled Indian workers (welders,
                  drivers, electricians, warehouse and production staff) with employers in Central
                  Europe who need them.
                </p>
                <p className="al-body">
                  We work on confirmed vacancies only. Candidates are screened before submission,
                  employers are verified before we present a role, and everyone knows what happens
                  next at every stage. That is the whole approach.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <span className="al-chip al-mono">
                  <Building2 size={13} strokeWidth={2} /> Head office · Velachery
                </span>
                <span className="al-chip al-mono al-chip-verified">
                  <BadgeCheck size={13} strokeWidth={2} /> 50+ placements
                </span>
                <span className="al-chip al-mono">
                  <Users size={13} strokeWidth={2} /> 14 trade categories
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-5">
              <Reveal delay={2}>
                <article className="al-card al-card-hover p-8">
                  <div className="al-icon" aria-hidden="true">
                    <Target size={20} strokeWidth={1.9} />
                  </div>
                  <h3 className="al-display al-h3 mt-6">Mission</h3>
                  <p className="al-body mt-3">
                    Bridge skilled Indian professionals with trusted global employers through ethical
                    international recruitment.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={3}>
                <article className="al-card al-card-hover p-8">
                  <div className="al-icon" aria-hidden="true">
                    <Globe2 size={20} strokeWidth={1.9} />
                  </div>
                  <h3 className="al-display al-h3 mt-6">Vision</h3>
                  <p className="al-body mt-3">
                    Become one of the world's most trusted international recruitment consultancies.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={4}>
                <article className="al-card al-card-hover p-8">
                  <div className="flex flex-col items-start gap-4">
                    <div className="al-icon " aria-hidden="true">
                      <ShieldCheck size={17} strokeWidth={1.9} />
                    </div>
                    <div>
                      <h3 className="al-display al-h3">How we work</h3>
                      <p className="al-body mt-3">
                        Every cost, document and timeline is written down before you commit. No stage
                        of the process is a surprise, and no fee appears later.
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
