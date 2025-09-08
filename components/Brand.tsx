"use client";

import { Button } from '@/components/ui/button';
import { newsItems } from '@/lib/constant';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import AboutUs from './AboutUs';

const Brand = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateSection = () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Animate SVG Gradient Path
      if (svgRef.current) {
        const [gradientPath, grayPath] = svgRef.current.querySelectorAll('path');

        tl.fromTo(gradientPath, {
          strokeDasharray: gradientPath.getTotalLength(),
          strokeDashoffset: gradientPath.getTotalLength(),
        }, {
          strokeDashoffset: 0,
          duration: 1.5,
        });

        tl.fromTo(grayPath, {
          strokeDasharray: grayPath.getTotalLength(),
          strokeDashoffset: grayPath.getTotalLength(),
        }, {
          strokeDashoffset: 0,
          duration: 1,
        }, "-=1");
      }

      // Animate Header (fade + slight slide up)
      if (headerRef.current) {
        tl.from(headerRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
        }, "-=1");
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
      <section ref={sectionRef} className="relative w-full bg-black text-white overflow-hidden pb-20">

        {/* === Gradient Path with Rounded Corner === */}
        <svg 
          ref={svgRef}
          className="absolute top-0 right-10 w-full h-[800px] sm:h-[2000px] md:h-[3000px] lg:h-[3000px] pointer-events-none"
          viewBox="0 0 1000 1500"
          preserveAspectRatio="xMaxYMin meet"
        >
          <defs>
            <linearGradient id="gradientLine" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF7300" />
              <stop offset="25%" stopColor="#FF3D71" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {/* Gradient Path */}
          <path
            d="M950 0
               L950 100
               Q950 140 910 140
               L200 140
               Q160 140 160 180
               L160 600"
            stroke="url(#gradientLine)"
            strokeWidth="4"
            fill="none"
          />

          {/* Gray Continuation Line */}
          <path
            d="M160 600 L160 1400"
            stroke="#3B3B3B"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 px-8 ml-2 md:px-8 lg:px-12 pt-20 md:pt-50 md:ml-40">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div ref={headerRef} className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12 ml-2 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20">
              <h2 className="text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                What&apos;s New at Brand
              </h2>
            </div>

           
            <div className="grid grid-cols-2 gap-1.5 sm:gap-3 md:gap-4 lg:gap-6 max-w-5xl ml-2 md:ml-12 lg:ml-16 xl:ml-20 mr-2 md:mr-12">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-md sm:rounded-lg overflow-hidden p-2 sm:p-3 md:p-4 lg:p-6 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] h-44 sm:h-52 md:h-60 lg:h-72 flex flex-col ${
                    item.hasGradientBg && index === 0
                      ? "bg-[url('/shinnyBackground.jpg')] bg-cover bg-center"
                      : 'bg-gray-800/40 border border-gray-600/30'
                  }`}
                >
                  {item.hasGradientBg && index === 0 && (
                    <>
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-sm sm:blur-md lg:blur-lg"></div>
                      <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-sm"></div>
                    </>
                  )}
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-tight mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-3">
                        {item.title}
                      </h3>
                      
                      <div className="text-gray-400 text-xs mb-1 sm:mb-2 md:mb-3">
                        {item.date}
                      </div>
                      
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-4 line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-500 text-white hover:bg-white/10 hover:border-gray-400 text-xs py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 w-full sm:w-auto"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <AboutUs />
    </>
  );
};

export default Brand;
