import AboutBrand from "./AboutBrand";

export const LogoSection = () => {
  return (
    <>
    <section className="bg-black text-white pt-0 md:pt-10">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="flex flex-row items-start">
          {/* LEFT LINE (always vertical, responsive height) */}
         <div className="flex flex-col items-center mr-4 md:mr-8">
  {/* Gradient Line */}
  <div
    className="w-[6px] h-70 md:h-70 rounded-full"
    style={{
      background: "linear-gradient(180deg, #FF7300 0%, #6B0BEC 100%)",
    }}
  />

  {/* Grey Line */}
  <div className="w-[3px] h-70 md:h-80 bg-[#3B3B3B]" />
</div>


          {/* RIGHT CONTENT */}
          <div className="flex-1 p-4 md:pl-12">
            {/* Text Column */}
            <div className="space-y-4 md:space-y-6 md:max-w-[70%]">
              <p className="text-lg md:text-4xl font-light text-gray-200 leading-snug">
                Lorem ipsum dolor sit amet,
              </p>
              <p className="text-lg md:text-4xl font-light text-gray-200 leading-snug">
                consectetur adipiscing elit. Sed do{" "}
                <span className="font-semibold text-white">eiusmod</span>
              </p>
              <p className="text-sm md:text-2xl font-light text-gray-400 leading-relaxed">
                Sectetur adipiscing elit.
              </p>
              <p className="text-sm md:text-2xl font-light text-gray-400 leading-relaxed">
                Sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                sit amet.
              </p>
            </div>

            {/* Logos Row */}
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
              {[
                { src: "/logos/labscoop.png", alt: "labscoop" },
                { src: "/logos/idylle1.png", alt: "idylle1" },
                { src: "/logos/m.png", alt: "M" },
                { src: "/logos/idylle2.png", alt: "idylle2" },
              ].map((logo, i) => (
                <div
                  key={i}
                  className="w-40 md:w-full aspect-square bg-[#1A1A1A] rounded-xl md:rounded-2xl flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 md:h-12 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

     <div>
       
           <AboutBrand />
      </div>
    </>
  );
};
