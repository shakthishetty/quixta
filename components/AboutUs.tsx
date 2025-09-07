import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black py-8 sm:py-12 md:py-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/partner.png"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl w-full px-4 sm:px-6 relative z-10">
        {/* Left Card */}
        <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/10 shadow-lg max-w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 break-words">
            Have Questions? <br /> Let's Talk!
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className="w-full sm:w-auto px-4 py-2 sm:py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 text-sm sm:text-base">
            Get Started
          </button>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 max-w-full">
          <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/10 flex justify-between items-center shadow-lg max-w-full overflow-hidden">
            <h3 className="text-lg sm:text-xl font-semibold text-white break-words flex-1 pr-2">Partnerships</h3>
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center text-white text-sm sm:text-base flex-shrink-0">
              →
            </button>
          </div>
          <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md bg-white/10 flex justify-between items-center shadow-lg max-w-full overflow-hidden">
            <h3 className="text-lg sm:text-xl font-semibold text-white break-words flex-1 pr-2">Careers</h3>
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center text-white text-sm sm:text-base flex-shrink-0">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
