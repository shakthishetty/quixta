

import AdvancedMaterial from "@/components/AdvancedMaterial";
import Future from "@/components/Future";
import { LogoSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white px-6">
          <Future/>
      </main>

      <LogoSection />

      <div>
         <AdvancedMaterial/>
      </div>
    </>
  );
}