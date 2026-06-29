import "./Footer.css";

const LINKS = [
  { label: "Invitation", href: "#top" },
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__logo serif-display" href="#top">
          Ceremony
        </a>

        <nav className="footer__links" aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l.label} className="footer__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__meta">
        <p>Ruju &amp; Vraj · February 11, 2027 · Vadodara, India</p>
      </div>
    </footer>
  );
}
