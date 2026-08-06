import { Plus } from "lucide-react";


export const TRUST_AVATARS = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Placed candidate",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Placed candidate",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Placed candidate",
  },
];

export default function AvatarStack({
  avatars = TRUST_AVATARS,
  label = "50+ candidates placed across Europe",
  href = "#contact",
  center = false,
  className = "",
}) {
  return (
    <div className={`al-facepile${center ? " al-facepile-center" : ""} ${className}`}>
      <div className="al-facepile-row" role="list" aria-label="Candidates and employers">
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
