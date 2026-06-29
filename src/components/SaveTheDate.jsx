import "./SaveTheDate.css";

export default function SaveTheDate() {
  return (
    <section className="std section" id="schedule">
      <div className="container std__inner">
        <div className="std__head">
          <h2 className="std__title serif-display">Save the Date</h2>
          <p className="std__intro">
            We&apos;re getting married. Our little adventure is turning into a
            celebration with the best people in our lives. And it&apos;s made of
            everything that makes us, us. We&apos;re tying the knot and
            we&apos;re excited to do it with the people who&apos;ve seen us grow,
            fall, get back up, and still believe in love.
          </p>
        </div>

        <div className="divider" aria-hidden="true">
          <span>
            <EnvelopeIcon />
          </span>
        </div>

        <div className="std__cta">
          <div className="std__details">
            <p className="std__when">Feb 11, 2027</p>
            <p className="std__where">Pramukh Party Plot, Vadodara, Gujarat</p>
          </div>
          <a className="btn btn--solid" href="#rsvp">
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="2.25"
        y="4.5"
        width="19.5"
        height="16.5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M2.5 5.5 12 13l9.5-7.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
