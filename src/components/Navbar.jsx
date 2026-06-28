import { useState } from "react";
import "./Navbar.css";

const LINKS = [
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="nav__logo serif-display" href="#top">
          Ceremony
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.label} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
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
