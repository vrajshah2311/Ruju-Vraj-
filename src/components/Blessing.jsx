import useReveal from "./useReveal";
import "./Blessing.css";

const SHAH_FAMILY = [
  "સ્વ. નવીનચંદ્ર અંબાલાલ શાહ",
  "સ્વ. ઇન્દ્રવદન અંબાલાલ શાહ",
  "વિલાસબેન નવીનચંદ્ર શાહ",
  "મેહુલકુમાર નવીનચંદ્ર શાહ",
  "નિશા મેહુલકુમાર શાહ",
  "અતુલકુમાર રમેશચંદ્ર ડાભી",
  "રોશની અતુલકુમાર ડાભી",
  "કાવ્યા – કેયાન",
];

const MISTRY_FAMILY = [
  "નવીનચંદ્ર અંબાલાલ શાહ",
  "ઇન્દ્રવદન અંબાલાલ શાહ",
  "વિલાસબેન નવીનચંદ્ર શાહ",
  "મેહુલકુમાર નવીનચંદ્ર શાહ",
  "નિશા મેહુલકુમાર શાહ",
  "અતુલકુમાર રમેશચંદ્ર ડાભી",
  "રોશની અતુલકુમાર ડાભી",
];

export default function Blessing() {
  const ref = useReveal();

  return (
    <section className="bless section section--alt" ref={ref}>
      <div className="container">
        <div className="bless__card reveal">
          <div className="bless__mark" aria-hidden="true">
            ૐ
          </div>

          <div className="bless__messages">
            <p className="bless__guj">
              અમે આપના અપાર પ્રેમ અને સહયોગ માટે હૃદયપૂર્વક આભારી છીએ. થાઇલેન્ડમાં
              અમારી પ્રિય પરિવારજનો ની ઉપસ્થિતિમાં અમારું લગ્નોત્સવ આનંદપૂર્વક
              ઉજવવા જઈ રહ્યા છીએ. આ શુભ પ્રસંગે આપના આશીર્વાદ અને શુભેચ્છાઓ અમારા
              માટે સર્વોચ્ચ અને અમૂલ્ય ભેટ સમાન છે.
            </p>

            <div className="divider" aria-hidden="true">
              <span>❖</span>
            </div>

            <p className="bless__en">
              We&apos;re truly grateful for your love and support. Our wedding
              celebration will be held in Thailand with our closest family. Your
              blessings and wishes are the most precious gift to us.
            </p>
          </div>

          <div className="bless__families">
            <div className="bless__family">
              <p className="bless__family-eyebrow">With blessings from</p>
              <h3 className="bless__family-name">શાહ પરિવાર</h3>
              <ul className="bless__names">
                {SHAH_FAMILY.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>

            <div className="bless__divider-v" aria-hidden="true" />

            <div className="bless__family">
              <p className="bless__family-eyebrow">With blessings from</p>
              <h3 className="bless__family-name">મિસ્ત્રી પરિવાર</h3>
              <ul className="bless__names">
                {MISTRY_FAMILY.map((n, i) => (
                  <li key={`${n}-${i}`}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
