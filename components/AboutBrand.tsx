import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutBrand = () => {
  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/AboutBrand.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Inner Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
        <Image
          src="/innerAbout.png"
          alt="Inner Brand"
          width={1200}
          height={600}
          className="w-[98%] sm:w-[95%] md:w-[90%] h-auto rounded-lg sm:rounded-xl md:rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 space-y-2 sm:space-y-4 md:space-y-5">
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight sm:leading-snug">
          Our Journey Towards <br className="hidden sm:block" /> Innovation and
          Excellence
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed">
          Brand is an advanced luminescent materials company, leveraging
          synergies of cutting-edge chemistries to deliver solutions, not just
          products.
        </p>
        <Button className="mt-2 sm:mt-4 md:mt-6 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-md">
          About Brand
        </Button>
      </div>
    </div>
  );
};

export default AboutBrand;
