export default function Eyebrow({ children, className = "" }) {
  return (
    <p className={`al-mono al-faint flex items-center gap-2 ${className}`}>
      <span className="inline-block w-6 h-px bg-slate-300" aria-hidden="true" />
      {children}
    </p>
  );
}
