import { Plus } from "lucide-react";

export const TRUST_AVATARS = [
  {
    src: "https://images.unsplash.com/vector-1767330125626-bbf826e86b91?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Placed candidate",
  },
  {
    src: "https://images.unsplash.com/vector-1749124647885-49713a8d2750?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Placed candidate",
  },
  {
    src: "https://images.unsplash.com/vector-1749124647885-49713a8d2750?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
