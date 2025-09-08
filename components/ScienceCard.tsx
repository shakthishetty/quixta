"use client";

import { cards, scienceCardClasses } from "@/lib/constant";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Detail from "./Detail";

const ScienceCard = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gradientBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateGradient = () => {
      gsap.fromTo(gradientBarRef.current, {
        height: 0,
      }, {
        height: "50%",  // Animate up to halfway only
        duration: 1.5,
        ease: "power2.out",
      });
    };

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateGradient();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className={scienceCardClasses.section}>
        {/* Gradient Line on the Right */}
        <div className={scienceCardClasses.gradientLine}>
          <div
            ref={gradientBarRef}
            className={scienceCardClasses.gradientBar}
            style={{
              background: "linear-gradient(180deg, #FF7300 0%, #6B0BEC 100%)",
              height: 0, // Start collapsed
            }}
          />
          <div className={scienceCardClasses.grayLine} />
        </div>

        {/* Content Area */}
        <div className={scienceCardClasses.contentArea}>
          <div className={scienceCardClasses.spacing}>
            {/* Header */}
            <div className={scienceCardClasses.header}>
              <div className={scienceCardClasses.headerFlex}>
                <h2 className={scienceCardClasses.title}>
                  The Science Behind Our <br className="hidden sm:block" /> 
                  Innovative Solutions
                </h2>
                <button className={scienceCardClasses.button}>
                  Learn More
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className={scienceCardClasses.grid}>
              {cards.map((card, index) => (
                <div key={index} className={scienceCardClasses.card}>
                  <div className={scienceCardClasses.imageBg}>
                    <Image
                      src={card.bgImage}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className={scienceCardClasses.image}
                    />
                  </div>
                  <div className={scienceCardClasses.overlay}></div>
                  <div
                    className={scienceCardClasses.pattern}
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <div className={scienceCardClasses.cardContent}>
                    <div className={scienceCardClasses.textSpacing}>
                      <h3 className={scienceCardClasses.cardTitle}>{card.title}</h3>
                      <p className={scienceCardClasses.cardText}>{card.text}</p>
                      <div className={scienceCardClasses.underline}></div>
                    </div>
                  </div>
                  <div className={scienceCardClasses.glow}>
                    <div className={scienceCardClasses.glowEffect}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Detail />
    </>
  );
};

export default ScienceCard;
