import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Brand from './Brand';

const Detail = () => {
  return (
      <>
    <section className="bg-black py-16 text-white md:py-12 lg:py-16 px-4 sm:px-6 md:px-4 lg:px-8 overflow-hidden border border-solid border-gray-100/20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
              Sustainability at the heart <br />
              of Innovation
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
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
          <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
            
            {/* Water Drop - Base layer */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[250px] md:w-[280px] md:h-[350px] lg:w-[320px] lg:h-[400px]">
              <Image
                src="/WaterDrop.png"
                alt="Water Drop"
                fill
                style={{ objectFit: "contain" }}
                className="drop-shadow-xl"
              />
            </div>

            {/* Glass Effect - Overlay layer on top */}
            <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-[180px] h-[250px] md:w-[250px] md:h-[500px] lg:w-[350px] lg:h-[700px] z-10 max-w-[calc(100%-20px)]">
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
    <Brand/>
  </>
  );
};

export default Detail;