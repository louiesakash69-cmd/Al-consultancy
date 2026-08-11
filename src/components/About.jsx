import { BadgeCheck, Building2, Globe2, ShieldCheck, Target, Users } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-14 md:py-24 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="al-display al-h2 mt-6 max-w-lg">
                Recruitment built around people, not paperwork
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-7 space-y-5 max-w-xl">
                <p className="al-body">
                  AL Consultancy helps skilled professionals explore international career opportunities and connects them with employers looking for the right talent.
                </p>
                <p className="al-body">
                  We make the recruitment journey easier to understand by providing guidance throughout the process — from exploring suitable opportunities and preparing documentation to navigating the steps involved in international relocation.
                </p>
                <p className="al-body">
                  Our approach is simple: clear communication, practical support, and a recruitment process where candidates understand what to expect at every stage.
                </p>
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
                    To connect skilled professionals with international career opportunities through a clear, responsible, and candidate-focused recruitment process.
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
                    To build a trusted international recruitment consultancy known for transparency, professionalism, and meaningful career opportunities.
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
