import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="story section" id="venue">
      <div className="container story__inner">
        <div className="story__text">
          <h2 className="story__title serif-display">Our Story</h2>

          <div className="divider story__rule" aria-hidden="true">
            <span />
          </div>

          <p className="story__sub serif-display">
            A chance meeting, and a few beautiful years later...
          </p>

          <p className="lead">
            What started as a simple introduction slowly became something
            neither of us could imagine living without — built on long
            conversations, shared laughter, and a friendship that grew into
            love.
          </p>

          <p className="lead">
            One quiet moment, one question, and an easy &quot;yes.&quot; Now
            we&apos;re getting married, and we can&apos;t imagine celebrating
            without you.
          </p>
        </div>

        <figure className="story__media">
          <img
            src="https://placehold.co/600x735?text=Our+Story"
            alt="The couple together"
            width="600"
            height="735"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
