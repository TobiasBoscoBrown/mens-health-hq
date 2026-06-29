import { useReveal } from "./useReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CredibilityStrip from "./components/CredibilityStrip";
import About from "./components/About";
import Focus from "./components/Focus";
import Media from "./components/Media";
import Speaking from "./components/Speaking";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:font-600 focus:text-ink focus:shadow-soft"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <CredibilityStrip />
        <About />
        <Focus />
        <Media />
        <Speaking />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
