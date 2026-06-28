import "./Footer.css";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Schedule", href: "#schedule" },
  { label: "Attire", href: "#attire" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__monogram serif-display">
          Ruju <span>&amp;</span> Vraj
        </div>

        <p className="footer__date">February 11, 2026 · Bangkok, Thailand</p>

        <nav className="footer__links" aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l.label} className="footer__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__rule" aria-hidden="true" />

        <p className="footer__credit">
          Made with love for our family &amp; friends
        </p>
      </div>
    </footer>
  );
}
