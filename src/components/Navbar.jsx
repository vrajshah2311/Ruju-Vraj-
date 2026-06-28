import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Schedule", href: "#schedule" },
  { label: "Attire", href: "#attire" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__inner container">
        <a className="nav__logo" href="#top">
          <span className="nav__monogram">R&amp;V</span>
          <span className="nav__logo-text serif-display">Ceremony</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.label} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--solid nav__cta" href="#rsvp">
            RSVP
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`nav__bar ${open ? "is-open-1" : ""}`} />
          <span className={`nav__bar ${open ? "is-open-2" : ""}`} />
          <span className={`nav__bar ${open ? "is-open-3" : ""}`} />
        </button>
      </div>

      <nav className={`nav__drawer ${open ? "is-open" : ""}`} aria-label="Mobile">
        {LINKS.map((l) => (
          <a
            key={l.label}
            className="nav__drawer-link"
            href={l.href}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
