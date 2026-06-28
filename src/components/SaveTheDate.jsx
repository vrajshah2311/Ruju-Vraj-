import "./SaveTheDate.css";

export default function SaveTheDate() {
  return (
    <section className="std section" id="schedule">
      <div className="container std__inner">
        <h2 className="std__title serif-display">Save the Date</h2>

        <p className="std__intro lead">
          We&apos;re getting married, and we&apos;d love for you to be there. This
          page has everything you need to know — from the ceremony schedule to
          where to stay.
        </p>

        <div className="divider" aria-hidden="true">
          <span>
            <HeartIcon />
          </span>
        </div>

        <div className="std__details">
          <p className="std__when">February 11, 2026</p>
          <p className="std__where serif-display">
            Avani+ Riverside, Bangkok, Thailand
          </p>
        </div>

        <a className="btn btn--solid" href="#rsvp">
          RSVP Now
        </a>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.25C12 20.25 2.25 14.5 2.25 7.875A4.875 4.875 0 0 1 12 6.06a4.875 4.875 0 0 1 9.75 1.815C21.75 14.5 12 20.25 12 20.25Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
