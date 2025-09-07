import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Detail = () => {
  return (
    <section className="bg-black text-white min-h-screen px-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10 max-w-lg">
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight">
              Sustainability at the heart <br />
              of Innovation
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <Button 
              variant="secondary" 
              className="bg-gray-200 hover:bg-gray-300 text-black px-8 py-3 text-base font-medium rounded-lg"
            >
              Get Info Details
            </Button>
          </div>

          {/* Right Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            
            {/* Water Drop - Base layer */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[350px] lg:w-[320px] lg:h-[400px]">
              <Image
                src="/WaterDrop.png"
                alt="Water Drop"
                fill
                style={{ objectFit: "contain" }}
                className="drop-shadow-xl"
              />
            </div>

            {/* Glass Effect - Overlay layer on top */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[350px] h-[450px] lg:w-[400px] lg:h-[500px] z-10">
              <Image
                src="/Glasseffect.png"
                alt="Glass Effect"
                fill
                style={{ objectFit: "contain" }}
                className="opacity-70 blur-[1px]"
              />
            </div>

            {/* Vertical light beams - Right side */}
            <div className="absolute right-4 top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent z-20"></div>
            <div className="absolute right-8 top-1/3 w-[1px] h-1/3 bg-gradient-to-b from-transparent via-gray-300/40 to-transparent z-20"></div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Detail;