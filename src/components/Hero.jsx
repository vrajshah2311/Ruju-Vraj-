import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <figure className="hero__photo">
        <img
          src="https://placehold.co/441x537?text=Ruju+%26+Vraj"
          alt="Ruju and Vraj"
          width="441"
          height="537"
          loading="eager"
        />
      </figure>

      <div className="hero__head">
        <h1 className="hero__names serif-display">Ruju &amp; Vraj</h1>
        <p className="hero__date">February 11, 2027</p>
      </div>
    </section>
  );
}
