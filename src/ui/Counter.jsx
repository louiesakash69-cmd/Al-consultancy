import { useMemo } from "react";
import useInView from "../hooks/useInView";
import RollingDigit from "./RollingDigit";

export default function Counter({ to, suffix = "", prefix = "" }) {
  const [ref, inView] = useInView(0.4);
  const digits = useMemo(() => String(Math.max(0, Math.round(to))).split(""), [to]);

  return (
    <span
      ref={ref}
      className="al-roll"
      aria-label={`${prefix}${to}${suffix}`}
    >
      {prefix ? <span className="al-roll-affix">{prefix}</span> : null}
      <span className="al-roll-track">
        {digits.map((digit, i) => (
          <RollingDigit
            key={`${digits.length}-${i}`}
            digit={Number(digit)}
            active={inView}
            delay={(digits.length - 1 - i) * 90}
          />
        ))}
      </span>
      {suffix ? <span className="al-roll-affix">{suffix}</span> : null}
    </span>
  );
}
