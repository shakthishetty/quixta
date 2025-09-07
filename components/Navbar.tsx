"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Who We Are", "Technology", "Solutions", "Newsroom", "Careers"];

  return (
    <nav className="w-full bg-black text-white px-10 py-6 flex items-center justify-between">
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
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col p-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 items-center">
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

              <Button variant="outline" asChild className="border-[0.5px] border-gray-50">
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
