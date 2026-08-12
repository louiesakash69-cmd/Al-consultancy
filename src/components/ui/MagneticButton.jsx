import { useCallback, useRef } from "react";

export default function MagneticButton({ children, variant = "primary", href = "#contact", className = "", size, onClick }) {
  const ref = useRef(null);
  const onMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
    node.style.setProperty("--mx", `${(dx * 9).toFixed(2)}px`);
    node.style.setProperty("--my", `${(dy * 6).toFixed(2)}px`);
  }, []);
  const onLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--mx", "0px");
    node.style.setProperty("--my", "0px");
  }, []);

  const handleClick = (event) => {
    if (onClick) {
      event.preventDefault();
      event.stopPropagation();
      onClick(event);
      return;
    }
  };

  return (
    <a
      ref={ref}
      href={href}
      onClick={handleClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`al-btn al-btn-${variant}${size === "sm" ? " al-btn-sm" : ""} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2 text-xs sm:text-base">{children}</span>
    </a>
  );
}
