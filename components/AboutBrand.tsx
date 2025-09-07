import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutBrand = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/AboutBrand.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Inner Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/innerAbout.png"
          alt="Inner Brand"
          width={1200}
          height={600}
          className="w-[95%] md:w-[90%] h-auto rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-4 md:space-y-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
          Our Journey Towards <br className="hidden sm:block" /> Innovation and
          Excellence
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-md md:max-w-2xl">
          Brand is an advanced luminescent materials company, leveraging
          synergies of cutting-edge chemistries to deliver solutions, not just
          products.
        </p>
        <Button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 rounded-md">
          About Brand
        </Button>
      </div>
    </div>
  );
};

export default AboutBrand;
