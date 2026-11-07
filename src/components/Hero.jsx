import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const timeline = gsap.timeline({
            defaults: {
              duration: 1,
              ease: "power3.out",
            },
          });

          timeline
            .from(".hero__eyebrow", {
              autoAlpha: 0,
              y: 16,
            })
            .from(
              ".hero__title-word",
              {
                yPercent: 115,
                rotate: 2,
                stagger: 0.12,
                duration: 1.25,
              },
              "-=0.65",
            )
            .from(
              ".hero__description, .hero__cta",
              {
                autoAlpha: 0,
                y: 24,
                stagger: 0.1,
              },
              "-=0.7",
            )
            .from(
              ".hero__artwork",
              {
                autoAlpha: 0,
                scale: 0.94,
                transformOrigin: "50% 50%",
                duration: 1.35,
              },
              "-=1.1",
            )
            .from(
              ".hero__botanical",
              {
                autoAlpha: 0,
                scale: 0.85,
                stagger: 0.12,
              },
              "-=0.85",
            )
            .from(
              ".hero__caption",
              {
                autoAlpha: 0,
                y: 10,
              },
              "-=0.5",
            );
        },
      );

      return () => motion.revert();
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section
      className="hero"
      id="intro"
      ref={heroRef}
      aria-labelledby="hero-title"
    >
      <div
        className="hero__botanical hero__botanical--top"
        aria-hidden="true"
      >
        <svg viewBox="0 0 260 180" fill="none">
          <path
            className="hero__stem"
            d="M7 169C54 145 31 86 94 70C146 57 163 25 174 6"
          />

          <path
            className="hero__leaf"
            d="M57 126C30 116 23 91 27 74C50 80 66 99 57 126Z"
          />

          <path
            className="hero__leaf"
            d="M91 72C73 52 80 29 92 17C108 35 109 56 91 72Z"
          />

          <path
            className="hero__leaf"
            d="M126 53C112 29 127 10 142 3C152 27 146 45 126 53Z"
          />

          <path
            className="hero__petal"
            d="M174 7C153 23 151 44 168 54C187 38 191 20 174 7Z"
          />

          <path
            className="hero__petal"
            d="M174 7C179 31 197 43 214 33C211 13 194 2 174 7Z"
          />

          <path
            className="hero__petal"
            d="M174 7C171 28 181 46 198 52C209 33 199 12 174 7Z"
          />

          <circle
            className="hero__flower-center"
            cx="176"
            cy="12"
            r="7"
          />
        </svg>
      </div>

      <div
        className="hero__botanical hero__botanical--bottom"
        aria-hidden="true"
      >
        <svg viewBox="0 0 260 180" fill="none">
          <path
            className="hero__stem"
            d="M7 169C54 145 31 86 94 70C146 57 163 25 174 6"
          />

          <path
            className="hero__leaf"
            d="M57 126C30 116 23 91 27 74C50 80 66 99 57 126Z"
          />

          <path
            className="hero__leaf"
            d="M91 72C73 52 80 29 92 17C108 35 109 56 91 72Z"
          />

          <path
            className="hero__petal"
            d="M174 7C153 23 151 44 168 54C187 38 191 20 174 7Z"
          />

          <path
            className="hero__petal"
            d="M174 7C179 31 197 43 214 33C211 13 194 2 174 7Z"
          />

          <circle
            className="hero__flower-center"
            cx="176"
            cy="12"
            r="7"
          />
        </svg>
      </div>

      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="hero__eyebrow eyebrow">
            Harshita’s film &amp; television journal
          </p>

          <h1
            className="hero__title"
            id="hero-title"
            aria-label="For the stories that stay"
          >
            <span className="hero__title-mask" aria-hidden="true">
              <span className="hero__title-word">For the</span>
            </span>

            <span className="hero__title-mask" aria-hidden="true">
              <span className="hero__title-word">stories that</span>
            </span>

            <span className="hero__title-mask" aria-hidden="true">
              <span className="hero__title-word hero__title-word--italic">
                stay.
              </span>
            </span>
          </h1>

          <p className="hero__description">
            A personal collection of films, series, and
            late-night favorites that followed me long after
            the screen went dark.
          </p>

          <a className="hero__cta" href="#collection">
            <span>Explore the collection</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <figure className="hero__visual">
          <div
            className="hero__artwork"
            role="img"
            aria-label="An Art Nouveau night scene outside an old cinema"
          >
            <div className="hero__moon" aria-hidden="true" />

            <div className="hero__stars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="hero__skyline" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="hero__cinema" aria-hidden="true">
              <span className="hero__cinema-roof" />
              <span className="hero__cinema-sign">
                Cinema
              </span>
              <span className="hero__cinema-door" />
              <span className="hero__cinema-light hero__cinema-light--one" />
              <span className="hero__cinema-light hero__cinema-light--two" />
            </div>

            <div className="hero__portrait" aria-hidden="true">
              <span className="hero__portrait-head" />
              <span className="hero__portrait-hair" />
              <span className="hero__portrait-shoulder" />
            </div>
          </div>

          <figcaption className="hero__caption">
            <span>Afterhours archive</span>
            <span>Vol. 01</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;