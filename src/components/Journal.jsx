import { useMemo, useRef, useState } from "react";
import {
  archiveItems,
  comfortItems,
} from "../data/collection";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
} from "../lib/gsap";
import "./Journal.css";

const filters = ["All", "Film", "Series"];

function PosterArtwork({ item, className = "" }) {
  return (
    <div
      className={`poster-art poster-art--${item.tone} ${className}`}
      aria-hidden="true"
    >
      <span className="poster-art__sun" />
      <span className="poster-art__horizon" />
      <span className="poster-art__figure" />

      <span className="poster-art__corner poster-art__corner--one" />
      <span className="poster-art__corner poster-art__corner--two" />

      <span className="poster-art__title">
        {item.title}
      </span>

      <span className="poster-art__rating">
        {item.rating}
      </span>
    </div>
  );
}

function Journal() {
  const journalRef = useRef(null);
  const collectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredItems = archiveItems.filter(
    (item) => item.featured,
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return archiveItems;
    }

    return archiveItems.filter(
      (item) => item.type === activeFilter,
    );
  }, [activeFilter]);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const revealElements =
            gsap.utils.toArray(".journal-reveal");

          revealElements.forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 60,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                once: true,
              },
            });
          });

          const panels =
            gsap.utils.toArray(".featured-panel");

          const posters =
            gsap.utils.toArray(".featured-poster");

          const activatePoster = (activeIndex) => {
            posters.forEach((poster, index) => {
              gsap.to(poster, {
                autoAlpha: index === activeIndex ? 1 : 0,
                scale: index === activeIndex ? 1 : 0.96,
                duration: 0.65,
                ease: "power3.out",
                overwrite: true,
              });
            });
          };

          activatePoster(0);

          panels.forEach((panel, index) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top center",
              end: "bottom center",
              onEnter: () => activatePoster(index),
              onEnterBack: () => activatePoster(index),
            });
          });

          gsap.to(".featured__vine-path", {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".featured",
              start: "top 70%",
              end: "bottom 70%",
              scrub: 1,
            },
          });
        },
      );

      return () => motion.revert();
    },
    {
      scope: journalRef,
    },
  );

  useGSAP(
    () => {
      if (window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches) {
        return;
      }

      gsap.fromTo(
        ".collection-card",
        {
          autoAlpha: 0,
          y: 28,
        },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.65,
          ease: "power3.out",
        },
      );
    },
    {
      scope: collectionRef,
      dependencies: [activeFilter],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={journalRef}>
      <section
        className="featured"
        id="featured"
        aria-labelledby="featured-title"
      >
        <div className="featured__vine" aria-hidden="true">
          <svg viewBox="0 0 160 900" fill="none">
            <path
              className="featured__vine-path"
              d="M72 0C155 98 8 178 81 274C149 364 12 449 78 546C143 640 14 724 92 900"
            />

            <path d="M77 151C36 143 22 111 29 83C62 95 82 120 77 151Z" />
            <path d="M75 328C116 317 137 283 130 254C99 265 77 294 75 328Z" />
            <path d="M76 516C31 505 17 470 26 440C61 453 80 483 76 516Z" />
            <path d="M85 713C124 700 142 667 133 639C103 651 82 680 85 713Z" />
          </svg>
        </div>

        <div className="container">
          <header className="section-heading journal-reveal">
            <p className="eyebrow">
              01 / Beautifully unsettling
            </p>

            <h2 id="featured-title">
              The ones that{" "}
              <em>stayed.</em>
            </h2>

            <p>
              Three stories with permanent residence in
              my head.
            </p>
          </header>

          <div className="featured__layout">
            <div className="featured__visual">
              <div className="featured__poster-stack">
                {featuredItems.map((item) => (
                  <PosterArtwork
                    key={item.id}
                    item={item}
                    className="featured-poster"
                  />
                ))}
              </div>

              <p className="featured__visual-caption">
                Selected stories · Afterhours archive
              </p>
            </div>

            <div className="featured__panels">
              {featuredItems.map((item, index) => (
                <article
                  className="featured-panel"
                  key={item.id}
                >
                  <p className="featured-panel__number">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="eyebrow">
                    {item.type} · {item.year} ·{" "}
                    {item.rating}
                  </p>

                  <h3>{item.title}</h3>

                  <p className="featured-panel__tagline">
                    {item.tagline}
                  </p>

                  <p className="featured-panel__note">
                    {item.note}
                  </p>

                  <a href={`#archive-${item.id}`}>
                    Find it in the archive
                    <span aria-hidden="true">↘</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="collection section"
        id="collection"
        ref={collectionRef}
        aria-labelledby="collection-title"
      >
        <div className="container">
          <header className="collection__header journal-reveal">
            <div>
              <p className="eyebrow">
                02 / The permanent collection
              </p>

              <h2 id="collection-title">
                Films, series &amp;
                <em> strange worlds.</em>
              </h2>
            </div>

            <div
              className="collection__filters"
              aria-label="Filter the collection"
            >
              {filters.map((filter) => (
                <button
                  className={
                    activeFilter === filter
                      ? "collection__filter collection__filter--active"
                      : "collection__filter"
                  }
                  type="button"
                  key={filter}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </header>

          <div
            className="collection__grid"
            aria-live="polite"
          >
            {filteredItems.map((item, index) => (
              <article
                className="collection-card"
                id={`archive-${item.id}`}
                key={item.id}
              >
                <PosterArtwork item={item} />

                <div className="collection-card__meta">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {item.type} · {item.year}
                  </span>
                </div>

                <div className="collection-card__heading">
                  <h3>{item.title}</h3>
                  <span>{item.rating}</span>
                </div>

                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="comfort"
        id="comfort"
        aria-labelledby="comfort-title"
      >
        <div className="container">
          <header className="comfort__header journal-reveal">
            <p className="eyebrow">
              03 / Familiar voices
            </p>

            <h2 id="comfort-title">
              The comfort corner
            </h2>

            <p>
              For the nights when I don’t need a new world.
              I just want to return to one I know.
            </p>
          </header>

          <div className="comfort__grid">
            {comfortItems.map((item, index) => (
              <article
                className={`comfort-card comfort-card--${item.tone} journal-reveal`}
                key={item.id}
              >
                <div
                  className="comfort-card__scene"
                  aria-hidden="true"
                >
                  <span className="comfort-card__lamp" />
                  <span className="comfort-card__sofa" />
                  <span className="comfort-card__window" />
                  <span className="comfort-card__table" />
                </div>

                <div className="comfort-card__copy">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__ornament" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="site-footer__inner container">
          <div>
            <p className="eyebrow">
              After the credits
            </p>

            <p className="site-footer__title">
              Some stories end.
              <br />
              Some stories stay.
            </p>
          </div>

          <div className="site-footer__details">
            <p>Curated by Harshita</p>
            <p>Best enjoyed after dark.</p>

            <a href="#intro">
              Return to the beginning
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Journal;