export default function SectionHeader({ eyebrow, title, sub, className = "" }) {
  return (
    <div className={`sec-head reveal ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="sec-head__title">{title}</h2>
      <div className="divider" aria-hidden="true">
        <span>
          <Sprig />
        </span>
      </div>
      {sub && <p className="sec-head__sub">{sub}</p>}
    </div>
  );
}

function Sprig() {
  return (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
      <path
        d="M11 13c0-3.5 2.2-6.4 5.3-7.6M11 13c0-3.5-2.2-6.4-5.3-7.6M11 13V3"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="11" cy="2" r="1.4" fill="currentColor" />
    </svg>
  );
}
