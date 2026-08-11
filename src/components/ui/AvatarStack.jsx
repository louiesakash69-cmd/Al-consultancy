import { Plus } from "lucide-react";
import img1 from "../../assets/avatars/Cartoon01.png"
import img2 from "../../assets/avatars/Cartoon02.png"
import img3 from "../../assets/avatars/Human01.png"


export const TRUST_AVATARS = [
  {
    src: img1,
    alt: "Placed candidate",
  },
  {
    src: img2,
    alt: "Placed candidate",
  },
  {
    src: img3,
    alt: "Placed candidate",
  },
];

export default function AvatarStack({
  avatars = TRUST_AVATARS,
  label = "Your Career. A Global Opportunity.",
  href = "#contact",
  center = false,
  className = "",
}) {
  return (
    <div
      className={`al-facepile${center ? " al-facepile-center" : ""} ${className}`}
    >
      <div
        className="al-facepile-row"
        role="list"
        aria-label="Candidates and employers"
      >
        {avatars.map((person, i) => (
          <img
            key={person.src}
            src={person.src}
            alt={person.alt}
            role="listitem"
            className="al-facepile-avatar"
            style={{ zIndex: avatars.length - i }}
            width={42}
            height={42}
            loading="lazy"
            decoding="async"
          />
        ))}
        <a
          href={href}
          className="al-facepile-more"
          style={{ zIndex: 0 }}
          aria-label="Join the next placement cohort"
        >
          <Plus size={16} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>
      {label ? <p className="al-facepile-label">{label}</p> : null}
    </div>
  );
}
