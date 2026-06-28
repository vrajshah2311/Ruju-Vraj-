import { useState } from "react";
import SectionHeader from "./SectionHeader";
import useReveal from "./useReveal";
import "./Schedule.css";

const DAYS = [
  {
    short: "Fri",
    date: "Feb 09",
    label: "Friday, February 9",
    events: [
      {
        time: "10:00 AM",
        name: "Mehendi",
        desc: "Join us for an afternoon of intricate henna, sweet treats, and live music as we kick off the celebrations. Come dressed in bright, festive colours.",
      },
      {
        time: "5:00 PM",
        name: "Vivah Khel",
        desc: "Traditional games between the two families to break the ice and welcome everyone into the festivities. Expect plenty of laughter and friendly competition.",
      },
    ],
  },
  {
    short: "Sat",
    date: "Feb 10",
    label: "Saturday, February 10",
    events: [
      {
        time: "9:00 AM",
        name: "Grahshanti & Haldi",
        desc: "A serene morning puja for the families, followed by the Haldi ceremony where turmeric is applied for blessings, glow, and good fortune.",
      },
      {
        time: "7:30 PM",
        name: "Garba",
        desc: "An evening of dandiya, garba, and dancing under the lights. Bring your energy and your finest festive wear — this one goes late!",
      },
    ],
  },
  {
    short: "Sun",
    date: "Feb 11",
    label: "Sunday, February 11",
    events: [
      {
        time: "11:00 AM",
        name: "Wedding Ceremony",
        desc: "The main event. Witness the sacred rituals as Ruju and Vraj exchange vows surrounded by family and friends, followed by blessings for the couple.",
      },
      {
        time: "7:00 PM",
        name: "Reception & Dinner",
        desc: "Celebrate the newlyweds with dinner, toasts, and dancing into the night. A joyful close to a weekend of love and togetherness.",
      },
    ],
  },
];

export default function Schedule() {
  const [day, setDay] = useState(0);
  const current = DAYS[day];
  const ref = useReveal();

  return (
    <section className="sched section section--surface" id="schedule" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="The weekend"
          title="Our days"
          sub="Three days of celebration. Here's how the weekend unfolds."
        />

        <div className="sched__days reveal" role="tablist" aria-label="Days">
          {DAYS.map((d, i) => (
            <button
              key={d.label}
              role="tab"
              aria-selected={i === day}
              className={`sched__day ${i === day ? "is-active" : ""}`}
              onClick={() => setDay(i)}
            >
              <span className="sched__day-short">{d.short}</span>
              <span className="sched__day-date">{d.date}</span>
            </button>
          ))}
        </div>

        <div className="sched__list reveal" key={current.label}>
          {current.events.map((e) => (
            <div className="sched__row" key={e.name}>
              <div className="sched__time">{e.time}</div>
              <div className="sched__marker" aria-hidden="true">
                <span className="sched__dot" />
              </div>
              <div className="sched__event">
                <h3 className="sched__event-name serif-display">{e.name}</h3>
                <p className="sched__event-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
