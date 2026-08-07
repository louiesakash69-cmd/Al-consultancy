import { useEffect, useMemo, useState } from "react";

export default function RollingDigit({ digit, active, delay = 0 }) {
  const cycles = 2;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) {
      setIndex(0);
      return;
    }
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setIndex(cycles * 10 + digit);
      return;
    }
    const frame = requestAnimationFrame(() => {
      setIndex(cycles * 10 + digit);
    });
    return () => cancelAnimationFrame(frame);
  }, [active, digit, cycles]);

  const reel = useMemo(
    () => Array.from({ length: cycles * 10 + 10 }, (_, i) => i % 10),
    [cycles]
  );

  return (
    <span className="al-roll-digit" aria-hidden="true">
      <span
        className="al-roll-strip"
        style={{
          transform: `translate3d(0, calc(-${index} * 1em), 0)`,
          transitionDelay: active ? `${delay}ms` : "0ms",
        }}
      >
        {reel.map((n, i) => (
          <span key={`${n}-${i}`}>{n}</span>
        ))}
      </span>
    </span>
  );
}
