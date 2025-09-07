const AdvancedMaterial = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden min-h-screen pb-10">
      {/* === Gradient Path with Rounded Corner === */}
    
 <svg
  className="absolute top-0 left-0 w-full h-[1200px] sm:h-[1500px] md:h-[1700px] pointer-events-none md:left-40"
  viewBox="0 0 1000 2000"
  preserveAspectRatio="xMinYMin meet"
>
  <defs>
    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#FF7300" />
      <stop offset="50%" stopColor="#FF3D71" />
      <stop offset="75%" stopColor="#8B5CF6" />
      <stop offset="100%" stopColor="#3B82F6" />
    </linearGradient>
  </defs>

  <path
    d="M30 0 
       L30 150 
       Q30 200 80 200 
       L820 200 
       Q870 200 870 250 
       L870 800"
    stroke="url(#gradientLine)"
    strokeWidth="6"
    fill="none"
  />

  <path
    d="M870 800 L870 1900"
    stroke="#3B3B3B"
    strokeWidth="3"
    fill="none"
  />
</svg>



      {/* === Content aligned under horizontal line === */}
      <div className="relative z-10 px-6 sm:px-12 md:px-16 pt-[100px] sm:pt-[260px] md:pt-[300px] md:pl-[140px]">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-light leading-tight max-w-md mb-12">
          Advanced Materials and<br /> Integrative Solutions
        </h1>

        <div className="space-y-20 sm:space-y-24">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="sm:col-span-3">
              <h2 className="text-2xl font-light">idylle</h2>
            </div>
            <div className="sm:col-span-9 space-y-4">
              <h3 className="text-xl sm:text-2xl font-medium leading-snug">
                Securing every physical product<br />
                for counterfeit protection
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Royall™ makes it easy for brand owners and<br />
                governments to effectively identify counterfeits,<br />
                secure revenues and preserve brand integrity.
              </p>
              <button className="bg-[#FF6B00] hover:bg-[#e55a00] text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="sm:col-span-3">
              <h2 className="text-2xl font-light">labscoop</h2>
            </div>
            <div className="sm:col-span-9 space-y-4">
              <h3 className="text-xl sm:text-2xl font-medium leading-snug">
                Accelerating biomedical research<br />
                with next-generation bio-probes
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Luminol empowers researchers to achieve<br />
                breakthroughs at a faster pace by powering<br />
                long live-cell tracking and deep tissue bio-imaging.
              </p>
              <button className="bg-[#FF6B00] hover:bg-[#e55a00] text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMaterial;
