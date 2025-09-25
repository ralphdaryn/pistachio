import { useEffect, useState, useRef } from "react";
import "./Home.scss";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    alt: "Smiling family enjoying an event outdoors",
    caption: "Memories that last forever",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
    alt: "Balloon decorations at a birthday party",
    caption: "We bring the vibes",
  },
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
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
              className={`home__slide ${
                i === index ? "home__slide--active" : ""
              }`}
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
                className={`home__dot ${
                  i === index ? "home__dot--active" : ""
                }`}
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
          <h1 className="home__title">Capture joy. Keep the moment.</h1>
          <p className="home__tagline">
            “Celebrate the day — we’ll handle the magic.”
          </p>

          {/* CTA */}
          <a className="home__cta" href="/quote">
            Get a Quote
          </a>
        </div>
      </section>

      {/* SIMPLE CARDS FOR YOUR SECTIONS */}
      <section
        id="services"
        className="home__section"
        aria-labelledby="services-title"
      >
        <h2 id="services-title" className="home__section-title">
          Services
        </h2>
        <ul className="home__list">
          <li className="home__item">Photobooth Rental Packages</li>
          <li className="home__item">Backdrops</li>
          <li className="home__item">Props</li>
          <li className="home__item">Layout Designs</li>
          <li className="home__item">What to Expect</li>
        </ul>
      </section>

      <section
        id="packages"
        className="home__section"
        aria-labelledby="packages-title"
      >
        <h2 id="packages-title" className="home__section-title">
          Packages
        </h2>
        <div className="home__grid">
          <article className="home__card">
            <h3 className="home__card-title">Our Packages</h3>
            <p className="home__card-text">Basic • Advanced • Luxury</p>
          </article>
          <article className="home__card">
            <h3 className="home__card-title">Backdrops</h3>
            <p className="home__card-text">Standard • Premium</p>
          </article>
          <article className="home__card">
            <h3 className="home__card-title">Layout Design</h3>
            <p className="home__card-text">Browse example templates</p>
          </article>
          <article className="home__card">
            <h3 className="home__card-title">Add‑Ons</h3>
            <p className="home__card-text">Props, prints, sharing & more</p>
          </article>
        </div>
      </section>

      <section
        id="gallery"
        className="home__section"
        aria-labelledby="gallery-title"
      >
        <h2 id="gallery-title" className="home__section-title">
          Gallery
        </h2>
        <p className="home__muted">Peek at moments we’ve captured.</p>
        <div className="home__actions">
          <a className="home__button" href="/gallery">
            Sample Gallery
          </a>
          <a
            className="home__button home__button--ghost"
            href="https://your-online-gallery.example"
            target="_blank"
            rel="noreferrer"
          >
            Find Your Event
          </a>
        </div>
      </section>

      <section id="faq" className="home__section" aria-labelledby="faq-title">
        <h2 id="faq-title" className="home__section-title">
          FAQ
        </h2>
        <p className="home__muted">TBA — coming soon.</p>
      </section>

      <section
        id="contact"
        className="home__section"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="home__section-title">
          Contact
        </h2>
        <div className="home__contact">
          <a className="home__button" href="/quote">
            Get a Quote
          </a>
          <div className="home__contact-info">
            <p className="home__muted">
              <strong>Phone:</strong> (555) 123‑4567
            </p>
            <p className="home__muted">
              <strong>Email:</strong> hello@example.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
