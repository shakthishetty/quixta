"use client";

import { Button } from '@/components/ui/button';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Bubble from "./Bubble";

const AdvancedMaterial = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateSection = () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (svgRef.current) {
        const [gradientPath, greyPath] = svgRef.current.querySelectorAll('path');

        // Animate the gradient path to create a moving line effect
        tl.fromTo(gradientPath, {
          strokeDasharray: gradientPath.getTotalLength(),
          strokeDashoffset: gradientPath.getTotalLength(),
        }, {
          strokeDashoffset: 0,
          duration: 1.5,
        });

        // Grey path appears immediately or slightly delayed
        tl.fromTo(greyPath, {
          strokeDasharray: greyPath.getTotalLength(),
          strokeDashoffset: greyPath.getTotalLength(),
        }, {
          strokeDashoffset: 0,
          duration: 1,
        }, "-=1");
      }

      if (headingRef.current) {
        tl.from(headingRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
        }, "-=1");
      }

      if (gridsRef.current) {
        const grids = gridsRef.current.querySelectorAll('.advanced-grid');
        tl.from(grids, {
          y: 30,
          opacity: 0,
          stagger: 0.3,
          duration: 0.8,
        }, "-=0.8");
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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="advanced-section">
        {/* === Gradient Path with Rounded Corner === */}
        <svg
          ref={svgRef}
          className="advanced-svg"
          viewBox="0 0 1000 2500"
          preserveAspectRatio="xMinYMin meet"
        >
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7300" />
              <stop offset="50%" stopColor="#FF3D71" />
              <stop offset="75%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          <path
            d="M30 0 
               L30 150 
               Q30 200 80 200 
               L820 200 
               Q870 200 870 250 
               L870 800"
            stroke="url(#gradientLine)"
            strokeWidth="6"
            fill="none"
          />

          <path
            d="M870 800 L870 2400"
            stroke="#3B3B3B"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* === Content aligned under horizontal line === */}
        <div className="advanced-content">
          <h1 ref={headingRef} className="advanced-h1">
            Advanced Materials and<br /> Integrative Solutions
          </h1>

          <div ref={gridsRef} className="advanced-sections">
            <div className="advanced-grid">
              <div className="advanced-title-col">
                <h2 className="advanced-h2">idylle</h2>
              </div>
              <div className="advanced-content-col">
                <h3 className="advanced-h3">
                  Securing every physical product<br />
                  for counterfeit protection
                </h3>
                <p className="advanced-p">
                  Royall™ makes it easy for brand owners and<br />
                  governments to effectively identify counterfeits,<br />
                  secure revenues and preserve brand integrity.
                </p>
                <Button className="bg-[#FF6B00] hover:bg-[#e55a00] text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-md">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="advanced-grid">
              <div className="advanced-title-col">
                <h2 className="advanced-h2">labscoop</h2>
              </div>
              <div className="advanced-content-col">
                <h3 className="advanced-h3">
                  Accelerating biomedical research<br />
                  with next-generation bio-probes
                </h3>
                <p className="advanced-p">
                  Luminol empowers researchers to achieve<br />
                  breakthroughs at a faster pace by powering<br />
                  long live-cell tracking and deep tissue bio-imaging.
                </p>
                <Button className="bg-[#FF6B00] hover:bg-[#e55a00] text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-md">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Bubble />
      </section>
    </>
  );
};

export default AdvancedMaterial;
