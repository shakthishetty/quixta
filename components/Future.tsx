"use client"

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const Future = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current || !buttonRef.current) return;
    const chars = headingRef.current.querySelectorAll('.char');
    const tl = gsap.timeline();
    tl.from(chars, {
      y: 60,
      opacity: 0,
      stagger: 0.05,
      duration: 0.7,
      ease: "power3.out",
    })
    .from(paragraphRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    }, "+=0.2")
    .from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      clearProps: "all"
    }, "+=0.1");
  }, []);

  // GSAP hover effect for button
  useEffect(() => {
    if (!buttonRef.current) return;
    const btn = buttonRef.current;
    const handleEnter = () => {
      gsap.to(btn, { scale: 1.08, duration: 0.2, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
    };
    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);
    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Helper to split text into spans
  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
    ));

  return (
    <div className="max-w-2xl pb-10 mx-auto text-center space-y-8 pt-16 md:pt-10 md:flex md:flex-col md:items-center md:justify-center min-h-[55vh] md:min-h-[calc(100vh-64px)]">
      <h1 ref={headingRef} className="text-4xl md:text-7xl font-bold leading-snug">
        {splitText("Future of Advanced")}
        <br />
        <span className="mt-2 block">{splitText("Materials")}</span>
      </h1>

      <p ref={paragraphRef} className="text-base text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et.
      </p>

      <Button ref={buttonRef} variant="default">Get Started</Button>
    </div>
  );
}

export default Future