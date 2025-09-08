"use client"

import gsap from "gsap";
import { useEffect, useRef } from "react";
import AboutBrand from "./AboutBrand";

export const LogoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasAnimated = false;
    const animateSection = () => {
      if (hasAnimated) return;
      hasAnimated = true;
      const tl = gsap.timeline();
      if (lineRef.current) {
        tl.from(lineRef.current, {
          height: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }
      if (textRef.current) {
        tl.from(textRef.current.children, {
          y: 60,
          opacity: 0,
          stagger: 0.25,
          duration: 1,
          ease: "power3.out",
        }, "-=0.5");
      }
      if (logosRef.current) {
        const logoImgs = logosRef.current.querySelectorAll("img");
        tl.from(logoImgs, {
          y: 40,
          opacity: 0,
          scale: 0.7,
          stagger: 0.18,
          duration: 0.7,
          ease: "back.out(1.7)",
        }, "+=0.2");
      }
    };

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSection();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-black text-white pt-0 md:pt-10 overflow-x-hidden">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="flex flex-row flex-wrap items-start w-full">
            {/* LEFT LINE (always vertical, responsive height) */}
            <div className="hero-line-container">
              {/* Gradient Line */}
              <div
                ref={lineRef}
                className="hero-gradient-line"
                style={{
                  background: "linear-gradient(180deg, #FF7300 0%, #6B0BEC 100%)",
                }}
              />
              {/* Grey Line */}
              <div className="hero-grey-line" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="hero-content-container w-full md:w-3/4 lg:w-4/5 xl:w-4/5 min-w-0">
              {/* Text Column */}
              <div ref={textRef} className="hero-text-column">
                <p className="hero-p-main">
                  Lorem ipsum dolor sit amet,
                </p>
                <p className="hero-p-main">
                  consectetur adipiscing elit. Sed do{" "}
                  <span className="font-semibold text-white">eiusmod</span>
                </p>
                <p className="hero-p-secondary">
                  Sectetur adipiscing elit.
                </p>
                <p className="hero-p-secondary">
                  Sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet.
                </p>
              </div>

              {/* Logos Row */}
              <div ref={logosRef} className="hero-logos-grid grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full">
                {[
                  { src: "/logos/labscoop.png", alt: "labscoop" },
                  { src: "/logos/idylle1.png", alt: "idylle1" },
                  { src: "/logos/m.png", alt: "M" },
                  { src: "/logos/idylle2.png", alt: "idylle2" },
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="hero-logo-container"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 md:h-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <AboutBrand />
      </div>
    </>
  );
};
