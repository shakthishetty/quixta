import Image from "next/image";

const ScienceCard = () => {
  const cards = [
    {
      title: "Synthesis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgImage: "/Synthesis.png",
    },
    {
      title: "Formulations", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgImage: "/Formulations.png",
    },
    {
      title: "Diverse Materials",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgImage: "/DiverseMaterials.png",
    },
    {
      title: "Manipulation of Light",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgImage: "/Manipulation.png",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white min-h-screen py-8 md:py-16 px-4 md:px-8 lg:px-20">
      
      {/* Gradient Line on the Right */}
      <div className="absolute top-0 right-2 sm:right-4 md:right-8 lg:right-16 xl:right-32 h-full flex flex-col items-center z-10">
        <div
          className="w-1 sm:w-1.5 md:w-2 lg:w-3 h-40 sm:h-56 md:h-72 lg:h-96 xl:h-[500px] rounded-full"
          style={{
            background: "linear-gradient(180deg, #FF7300 0%, #6B0BEC 100%)",
          }}
        />
        <div className="w-0.5 sm:w-1 md:w-1.5 lg:w-2 flex-1 bg-gray-700 rounded-full" />
      </div>

      {/* Content Area */}
      <div className="relative max-w-7xl mx-auto pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-40">
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {/* Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                The Science Behind Our <br className="hidden sm:block" /> 
                Innovative Solutions
              </h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 whitespace-nowrap self-start sm:self-center">
                Learn More
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl group h-64 sm:h-72 md:h-80 lg:h-96 w-full cursor-pointer`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={card.bgImage}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent transition-all duration-300"></div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                     style={{
                       backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                       backgroundSize: '20px 20px'
                     }}>
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-orange-200 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {card.text}
                    </p>
                    
                    {/* Animated Underline */}
                    <div className="w-0 group-hover:w-16 sm:group-hover:w-20 md:group-hover:w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-500 ease-out"></div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceCard;