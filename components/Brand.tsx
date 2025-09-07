import { Button } from '@/components/ui/button';
import AboutUs from './AboutUs';

const Brand = () => {
  const newsItems = [
    {
      title: "Brand Unveils Breakthrough in Product Authentication Technology",
      date: "March 08, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      hasGradientBg: true
    },
    {
      title: "LumiLab — Exploring the science and innovation behind luminescent materials.",
      date: "March 08, 2025", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      hasGradientBg: false
    },
    {
      title: "The Glow Factor — Trends, discoveries, and applications in photonic materials.",
      date: "March 08, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      hasGradientBg: false
    },
    {
      title: "Brand Unveils Breakthrough in Product Authentication Technology",
      date: "March 08, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.",
      hasGradientBg: false
    }
  ];

  return (
    <>
    <section className="relative w-full bg-black text-white overflow-hidden min-h-screen pb-20">
      
      {/* === Gradient Path with Rounded Corner (Right to Left Bottom) === */}
      <svg 
        className="absolute top-0 right-0 w-full h-[800px] sm:h-[1000px] md:h-[1500px] lg:h-[2000px] pointer-events-none"
        viewBox="0 0 1000 1500"
        preserveAspectRatio="xMaxYMin meet"
      >
        <defs>
          <linearGradient id="gradientLine" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF7300" />
            <stop offset="25%" stopColor="#FF3D71" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        
        {/* Main gradient path: Right top to left bottom */}
        <path
          d="M950 0
             L950 100
             Q950 140 910 140
             L200 140
             Q160 140 160 180
             L160 600"
          stroke="url(#gradientLine)"
          strokeWidth="4"
          fill="none"
        />
        
        {/* Continuation line */}
        <path
          d="M160 600 L160 1400"
          stroke="#3B3B3B"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* === Content === */}
      <div className="relative z-10 px-20 ml-10  md:px-8 lg:px-12 pt-20  md:pt-50 md:ml-40">
        
        {/* Content positioned inside the gradient border */}
        <div className="max-w-6xl mx-auto">
          
          {/* Header - Inside the border */}
          <div className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              What's New at Brand
            </h2>
          </div>

          {/* Cards Grid - 2x2 layout on all devices */}
          <div className="grid grid-cols-2 gap-1 sm:gap-3 md:gap-4 lg:gap-6 max-w-5xl ml-4  md:ml-12 lg:ml-16 xl:ml-20 mr-4  md:mr-12 sm:pl-20">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-lg p-1.5 sm:p-3 md:p-4 lg:p-6 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] ${
                  item.hasGradientBg && index === 0
                    ? 'bg-gradient-to-br from-purple-900/60 via-blue-800/40 to-purple-700/60 border border-purple-400/30' 
                    : 'bg-gray-800/40 border border-gray-600/30'
                }`}
              >
                {/* Decorative gradient orbs for first card */}
                {item.hasGradientBg && index === 0 && (
                  <>
                    <div className="absolute top-0.5 right-0.5 sm:top-2 sm:right-2 w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-sm sm:blur-md lg:blur-lg"></div>
                    <div className="absolute bottom-0.5 left-0.5 sm:bottom-2 sm:left-2 w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-sm"></div>
                  </>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-tight mb-0.5 sm:mb-2">
                    {item.title}
                  </h3>
                  
                  <div className="text-gray-400 text-xs mb-0.5 sm:mb-2 md:mb-3">
                    {item.date}
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-xs md:text-sm leading-relaxed mb-1 sm:mb-3 md:mb-4 line-clamp-1 sm:line-clamp-2 md:line-clamp-3">
                    {item.description}
                  </p>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-500 text-white hover:bg-white/10 hover:border-gray-400 text-xs py-0.5 px-1.5 sm:py-1.5 sm:px-3 md:py-2 md:px-4"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <AboutUs/>
    </>
  );
};

export default Brand;