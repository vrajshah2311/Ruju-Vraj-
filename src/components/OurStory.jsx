import useReveal from "./useReveal";
import "./OurStory.css";

export default function OurStory() {
  const ref = useReveal();

  return (
    <section className="story section section--surface" id="story" ref={ref}>
      <div className="container story__inner">
        <figure className="story__media reveal">
          <img
            src="https://placehold.co/700x840?text=Our+Story"
            alt="Ruju and Vraj together"
            width="700"
            height="840"
            loading="lazy"
          />
          <figcaption className="story__caption">Oxford, 2021</figcaption>
        </figure>

        <div className="story__text">
          <p className="eyebrow reveal">Our story</p>
          <h2 className="story__title serif-display reveal">
            Two families, one beautiful new beginning.
          </h2>

          <p className="lead reveal">
            What began as a quiet introduction between our families grew into a
            friendship, and then into something neither of us could imagine
            living without. Through long conversations, shared traditions, and
            countless cups of chai, we found our home in one another.
          </p>

          <p className="lead reveal">
            With the blessings of our parents and elders, we are overjoyed to
            begin this next chapter together — and we can&apos;t imagine
            celebrating it without you by our side.
          </p>

          <p className="story__sign serif-display reveal">— Ruju &amp; Vraj</p>
        </div>
      </div>
    </section>
  );
}
