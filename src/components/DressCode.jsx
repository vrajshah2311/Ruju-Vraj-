import { useState } from "react";
import "./DressCode.css";

const EVENTS = [
  {
    key: "mehendi",
    name: "Mehendi",
    title: "Shades of Yellow",
    blurb:
      "An afternoon of henna, music, and laughter. Come in bright, breezy festive wear — yellows, marigolds, and florals are perfect.",
    palette: ["#fbe79e", "#f5c712", "#e7b404", "#df9b0c"],
  },
  {
    key: "vivah-khel",
    name: "Vivah Khel",
    title: "Playful Brights",
    blurb:
      "Traditional pre-wedding games between the families. Wear something fun and comfortable that you can celebrate in.",
    palette: ["#f7c6d0", "#ef8aa3", "#e25c7c", "#c43a5c"],
  },
  {
    key: "grahshanti",
    name: "Grahshanti",
    title: "Soft Ivory",
    blurb:
      "An intimate family puja for peace and blessings. Light, traditional attire in ivory and pastel tones is ideal.",
    palette: ["#f6f1e7", "#ece1c8", "#dcc9a0", "#c4ad7e"],
  },
  {
    key: "garba",
    name: "Garba",
    title: "Jewel Tones",
    blurb:
      "A night of dandiya and dance. Dress in vibrant chaniya choli, kediyu, or any festive outfit you can twirl in.",
    palette: ["#1f8a70", "#1565c0", "#7b1fa2", "#e64a19"],
  },
  {
    key: "haldi",
    name: "Haldi",
    title: "Turmeric Gold",
    blurb:
      "A joyful morning of turmeric and blessings — things will get messy! Wear yellows you don't mind getting a little colourful.",
    palette: ["#fff3bf", "#ffe066", "#fcc419", "#f08c00"],
  },
  {
    key: "wedding",
    name: "Wedding",
    title: "Royal & Festive",
    blurb:
      "The main ceremony. Bring out your finest traditional wear — rich silks, sherwanis, sarees, and lehengas.",
    palette: ["#7c1f33", "#a8324a", "#d4a017", "#f2d680"],
  },
];

export default function DressCode() {
  const [active, setActive] = useState(0);
  const ev = EVENTS[active];

  return (
    <section className="dress section" id="contact">
      <div className="container">
        <div className="dress__head">
          <p className="eyebrow">Dress code</p>
          <h2 className="dress__title serif-display">What to wear</h2>
          <p className="dress__blurb lead">{ev.blurb}</p>
        </div>

        <div className="dress__tabs" role="tablist" aria-label="Events">
          {EVENTS.map((e, i) => (
            <button
              key={e.key}
              role="tab"
              aria-selected={i === active}
              className={`dress__tab ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {e.name}
            </button>
          ))}
        </div>

        <div className="dress__panel">
          <h3 className="dress__panel-title serif-display">{ev.title}</h3>

          <div className="dress__swatches">
            {ev.palette.map((c) => (
              <span
                key={c}
                className="dress__swatch"
                style={{ background: c }}
                title={c}
              />
            ))}
          </div>

          <div className="dress__gallery">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={`https://placehold.co/327x398?text=${ev.name}+${i + 1}`}
                alt={`${ev.name} inspiration ${i + 1}`}
                width="327"
                height="398"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
