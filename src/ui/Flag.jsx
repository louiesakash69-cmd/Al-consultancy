export default function Flag({ order = "wbr" }) {
  const bars = order.split("").map((c) => (c === "w" ? "al-fw" : c === "b" ? "al-fb" : "al-fr"));
  return (
    <span className="al-flag" aria-hidden="true">
      {bars.map((cls, i) => (
        <span key={i} className={cls} />
      ))}
    </span>
  );
}
