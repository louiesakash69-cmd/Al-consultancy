import { BadgeCheck, Globe2, Plane, ShieldCheck } from "lucide-react";
import heroimg from "../assets/hero-img-2.png"

export default function HeroVisual() {
  return (
    <div className="al-hero-visual">
      <div className="al-hero-glow" aria-hidden="true" />

      <div className="al-hero-frame">
        <img
          src={heroimg}
          alt="Global career placement network"
          width="640"
          height="640"
          decoding="async"
        />
        <div className="al-hero-vignette" aria-hidden="true" />


      </div>

      <div className="al-hero-float-card al-hero-float-card-right">
        <span className="al-icon al-icon-sm text-white" style={{ background: "linear-gradient(140deg,#2563EB,#06B6D4)", borderColor: "transparent" }} aria-hidden="true">
          <Plane size={15} strokeWidth={1.9} />
        </span>
        <div>
          <p className="al-display text-xs al-ink">EU work permits</p>
          <p className="al-body text-[11px] mt-0.5">Tracked end to end</p>
        </div>
      </div>

      <div className="al-hero-float-card al-hero-float-card-left">
        <span className="al-icon al-icon-sm text-white" style={{ background: "#0F172A", borderColor: "transparent" }} aria-hidden="true">
          <ShieldCheck size={15} strokeWidth={1.9} />
        </span>
        <div>
          <p className="al-display text-xs al-ink">Ethical recruitment</p>
          <p className="al-body text-[11px] mt-0.5">Verified employers only</p>
        </div>
      </div>

      <div className="al-hero-float-pill">
        <BadgeCheck size={14} className="al-blue" />
        <span className="al-mono al-muted text-[11px]">End-to-end placement</span>
        <Globe2 size={14} className="al-blue" />
      </div>
    </div>
  );
}
