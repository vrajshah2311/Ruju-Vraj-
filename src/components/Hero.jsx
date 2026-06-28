import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero__head">
        <h1 className="hero__names serif-display">Ruju &amp; Vraj</h1>
        <p className="hero__date">February 11, 2026</p>
      </div>

      <figure className="hero__frame">
        <img
          src="https://placehold.co/630x767?text=Ruju+%26+Vraj"
          alt="Ruju and Vraj"
          width="630"
          height="767"
          loading="eager"
        />
      </figure>
    </section>
  );
}
