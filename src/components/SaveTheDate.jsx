import useReveal from "./useReveal";
import "./SaveTheDate.css";

export default function SaveTheDate() {
  const ref = useReveal();

  return (
    <section className="std section section--alt" ref={ref}>
      <div className="container std__inner">
        <div className="std__card reveal">
          <p className="eyebrow">Save the date</p>

          <p className="std__intro lead">
            We&apos;re getting married — and we&apos;d love for you to be there.
            Everything you need to know lives here, from the ceremony schedule to
            where to stay.
          </p>

          <div className="divider" aria-hidden="true">
            <span>
              <HeartIcon />
            </span>
          </div>

          <div className="std__details">
            <p className="std__day serif-display">Wednesday</p>
            <p className="std__date serif-display">February 11, 2026</p>
            <p className="std__where">Avani+ Riverside · Bangkok, Thailand</p>
          </div>

          <a className="btn btn--solid" href="#rsvp">
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.25C12 20.25 2.25 14.5 2.25 7.875A4.875 4.875 0 0 1 12 6.06a4.875 4.875 0 0 1 9.75 1.815C21.75 14.5 12 20.25 12 20.25Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
