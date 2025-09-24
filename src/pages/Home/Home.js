import { useEffect, useState, useRef } from "react";
import "./Home.scss";

const SLIDES = [
  {
    src:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    alt: "Smiling family enjoying an event outdoors",
    caption: "Memories that last forever",
  },
  {
    src:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
    alt: "Balloon decorations at a birthday party",
    caption: "We bring the vibes",
  },
  {
    src:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    alt: "Photographer taking candid photos",
    caption: "Candid moments, perfect shots",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, [index]);

  return (
    <main className="home">
      {/* HERO / CAROUSEL */}
      <section className="home__hero" aria-label="Featured photos">
        <div className="home__carousel">
          {SLIDES.map((slide, i) => (
            <figure
              key={i}
              className={`home__slide ${i === index ? "home__slide--active" : ""}`}
              aria-hidden={i !== index}
            >
              <img className="home__image" src={slide.src} alt={slide.alt} />
              <figcaption className="home__caption">{slide.caption}</figcaption>
            </figure>
          ))}

          <button
            className="home__control home__control--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="home__control home__control--next"
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="home__dots" role="tablist" aria-label="Select slide">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`home__dot ${i === index ? "home__dot--active" : ""}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* WELCOME / SLOGAN */}
        <div className="home__welcome">
          <h1 className="home__title">Welcome to Our Website</h1>
          <p className="home__tagline">“Celebrate moments. We’ll handle the magic.”</p>


          {/* CTA */}
          <a className="home__cta" href="/quote">Get a Quote</a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home__why" aria-labelledby="why-title">
        <h2 id="why-title" className="home__section-title">Why Choose Us?</h2>
        <ul className="home__reasons">
          <li className="home__reason">
            <h3 className="home__reason-title">Pro Team</h3>
            <p className="home__reason-text">
              Experienced staff focused on smooth, stress-free events.
            </p>
          </li>
          <li className="home__reason">
            <h3 className="home__reason-title">All-in-One</h3>
            <p className="home__reason-text">
              Services and packages tailored to your budget and style.
            </p>
          </li>
          <li className="home__reason">
            <h3 className="home__reason-title">Photo-Ready</h3>
            <p className="home__reason-text">
              Candid moments, pro lighting, and a gallery you’ll love.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;