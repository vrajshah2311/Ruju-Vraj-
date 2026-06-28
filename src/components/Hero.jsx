import useReveal from "./useReveal";
import "./Hero.css";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero__inner">
        <p className="hero__eyebrow eyebrow reveal">Together with their families</p>

        <h1 className="hero__names serif-display reveal">
          Ruju <span className="hero__amp">&amp;</span> Vraj
        </h1>

        <div className="hero__meta reveal">
          <span>February 11, 2026</span>
          <span className="hero__dot" aria-hidden="true">•</span>
          <span>Thailand</span>
        </div>

        <figure className="hero__frame reveal">
          <img
            src="https://placehold.co/1000x680?text=Ruju+%26+Vraj"
            alt="Ruju and Vraj"
            width="1000"
            height="680"
            loading="eager"
          />
        </figure>

        <a className="hero__scroll reveal" href="#story" aria-label="Scroll to story">
          <span>Our story</span>
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
            <path
              d="M8 1v18m0 0 6-6m-6 6-6-6"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
