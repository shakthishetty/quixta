

import { LogoSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8 pt-16 md:pt-0 md:flex md:flex-col md:items-center md:justify-center min-h-[60vh] md:min-h-[calc(100vh-64px)]">
          <h1 className="text-4xl md:text-7xl font-bold leading-snug">
            Future of Advanced <br />
            <span className="mt-2 block">Materials</span>
          </h1>

          <p className="text-base text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et.
          </p>

          <Button variant="default">Get Started</Button>
        </div>
      </main>

      <LogoSection />
    </>
  );

}