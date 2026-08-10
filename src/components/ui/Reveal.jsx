import useInView from "../../hooks/useInView";

export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const [ref, inView] = useInView();
  const delayClass = delay ? ` al-d${delay}` : "";
  return (
    <Tag ref={ref} className={`al-reveal${inView ? " is-in" : ""}${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
