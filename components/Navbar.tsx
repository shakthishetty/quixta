"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef(null);
  const navItems = ["Who We Are", "Technology", "Solutions", "Newsroom", "Careers"];
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, { y: 0, opacity: 1 });
    }
    lastScrollY.current = window.scrollY;
    let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }, 50); // debounce for smoothness
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    if (isVisible) {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        overwrite: true,
      });
    } else {
      gsap.to(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        overwrite: true,
      });
    }
  }, [isVisible]);

  // Removed duplicate scroll listener and redundant logic

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="w-full bg-black text-white px-10 py-6 flex items-center justify-between sticky top-0 z-[9999]"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Logo */}
      <div className="text-xl font-bold">LOGO</div>

      {/* Center Navigation Links (Desktop) */}
      <div className="hidden md:flex space-x-8 mx-auto text-sm font-medium">
        {navItems.map((item) => (
          <a key={item} href="#" className="hover:underline">
            {item}
          </a>
        ))}
      </div>

      {/* Get Started Button (Desktop) */}
      <div className="hidden md:flex">
        <Button variant="outline" asChild className="border-[0.5px] border-gray-50">
          <a href="#" className="flex items-center gap-2">
            Get Started 
            <img src="/guidance_up-arrow.png" alt="arrow" className="w-4 h-4" />
          </a>
        </Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)} className="p-2">
          <Menu size={24} />
        </button>

        {isOpen && (
          <div ref={mobileMenuRef} className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col p-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 items-center bg-black text-white">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <Button variant="outline" asChild className="border-[1px] border-gray-200">
                <a href="#" className="flex items-center gap-2">
                  Get Started 
                  <img src="/arrow-up-right.png" alt="arrow" className="w-4 h-4" />
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
