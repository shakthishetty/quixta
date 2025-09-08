import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutBrand = () => {
  return (
    <div className="about-brand-container">
      {/* Background Image */}
      <Image
        src="/AboutBrand.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Inner Image Overlay */}
      <div className="about-brand-overlay">
        <Image
          src="/innerAbout.png"
          alt="Inner Brand"
          width={1200}
          height={600}
          className="about-brand-inner-image"
        />
      </div>

      {/* Content */}
      <div className="about-brand-content">
        <h2 className="about-brand-h2">
          Our Journey Towards <br className="hidden sm:block" /> Innovation and
          Excellence
        </h2>
        <p className="about-brand-p">
          Brand is an advanced luminescent materials company, leveraging
          synergies of cutting-edge chemistries to deliver solutions, not just
          products.
        </p>
        <Button className="about-brand-button">
          About Brand
        </Button>
      </div>
    </div>
  );
};

export default AboutBrand;
