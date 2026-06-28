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
            Two families, one beautiful new beginning.
          </p>

          <p className="lead">
            What began as a quiet introduction between our families grew into a
            friendship, and then into something neither of us could imagine
            living without. Through long conversations, shared traditions, and
            countless cups of chai, we found our home in one another.
          </p>

          <p className="lead">
            With the blessings of our parents and elders, we are overjoyed to
            begin this next chapter together — and we can&apos;t imagine
            celebrating it without you by our side.
          </p>
        </div>

        <figure className="story__media">
          <img
            src="https://placehold.co/600x735?text=Our+Story"
            alt="Ruju and Vraj together"
            width="600"
            height="735"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
