import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* Background */}
      <Image
        src="/partner.png"
        alt="Background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full px-6">
        {/* Left Card */}
        <div className="p-8 rounded-2xl backdrop-blur-md bg-white/10 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions? <br /> Let’s Talk!
          </h2>
          <p className="text-gray-200 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200">
            Get Started
          </button>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 flex justify-between items-center shadow-lg">
            <h3 className="text-xl font-semibold text-white">Partnerships</h3>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white">
              →
            </button>
          </div>
          <div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 flex justify-between items-center shadow-lg">
            <h3 className="text-xl font-semibold text-white">Careers</h3>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
