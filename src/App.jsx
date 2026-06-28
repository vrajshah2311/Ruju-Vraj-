import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SaveTheDate from "./components/SaveTheDate";
import OurStory from "./components/OurStory";
import DressCode from "./components/DressCode";
import Schedule from "./components/Schedule";
import Blessing from "./components/Blessing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SaveTheDate />
        <OurStory />
        <DressCode />
        <Schedule />
        <Blessing />
      </main>
      <Footer />
    </>
  );
}
