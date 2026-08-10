import { useEffect, useRef } from "react";
import useScrollY from "../hooks/useScrollY";
import AvatarStack from "./ui/AvatarStack";
import Counter from "./ui/Counter";
import MagneticButton from "./ui/MagneticButton";
import Reveal from "./ui/Reveal";
import { DrawArrowRight, DrawMapPin } from "./ui/DrawIcon";
import HeroVisual from "./hero-visuals";




const Hero = ({ setPopup }) => {
  const y = useScrollY();
  const panelRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (panelRef.current)
      panelRef.current.style.transform = `translate3d(0,${Math.min(y * 0.06, 40)}px,0)`;
    if (canvasRef.current)
      canvasRef.current.style.transform = `translate3d(0,${Math.min(y * 0.14, 120)}px,0)`;
  }, [y]);

  return (
    <section
      id="top"
      className="relative pt-24 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-24 overflow-hidden"
    >
      <div className="al-canvas" ref={canvasRef}>
        <div className="al-dots" />
        <div className="al-blob al-blob-blue w-72 h-72 md:w-96 md:h-96 -left-24 -top-16" />
        <div className="al-blob al-blob-cyan w-64 h-64 md:w-80 md:h-80 right-0 top-24" />
        <div className="al-blob al-blob-emerald w-56 h-56 md:w-72 md:h-72 left-1/3 top-80 md:top-96" />
        <div className="al-noise" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <h1 className="al-display al-h1 mt-5 md:mt-7">
                Connecting Talent
                <br />
                With <span className="al-gradient-text">global opportunities</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="al-lead mt-5 md:mt-7 max-w-xl">
                AL Consultancy helps skilled professionals explore international career opportunities with trusted employers across Europe. From understanding the opportunity to preparing documents and navigating the relocation process, we provide support throughout the journey.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3">
                <MagneticButton variant="primary" onClick={() => setPopup(true)}>
                  Start your career
                  <DrawArrowRight size={17} delay={0.35} />
                </MagneticButton>
                <MagneticButton variant="ghost" href="#services">
                  Our services
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
                <AvatarStack />
                <dl className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 flex-1 max-w-md">
                  {[
                    { value: 1, label: "International Opportunities" },
                    { value: 2, label: "End-to-End Support" },
                    { value: 3, label: "Professional Guidance" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className={
                        i > 0 ? "pl-3 sm:pl-4 border-l border-slate-200" : ""
                      }
                    >
                      <dt className="al-display text-xl sm:text-2xl md:text-3xl al-ink tabular-nums">
                        <Counter to={stat.value} prefix="0" />
                      </dt>
                      <dd className="al-mono al-faint mt-1.5 text-[10px] sm:text-inherit leading-4">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>


          </div>
          <div className="lg:col-span-5 hidden lg:block" ref={panelRef}>
            <Reveal>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </div>




    </section>
  )
}

export default Hero
