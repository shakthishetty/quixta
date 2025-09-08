


export  const newsItems = [
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
 
 
  export const cards = [
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
 
 
 export const footerData = {
    contact: {
      logo: "LOGO",
      email: "info@brand.com",
      phone: "+65 8808 2159"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialMedia: [
      { src: "/facebook.png", alt: "Facebook" },
      { src: "/twitter.png", alt: "Twitter" },
      { src: "/instagram.png", alt: "Instagram" },
    ],
    sections: [
      {
        title: "Solutions",
        links: [
          { name: "Regal", href: "#" },
          { name: "Luminioell", href: "#" },
        ]
      },
      {
        title: "Quick links",
        links: [
          { name: "Get Started", href: "#" },
          { name: "Technology", href: "#" },
          { name: "Newsroom", href: "#" },
          { name: "Careers", href: "#" },
        ]
      },
      {
        title: "Who we Are",
        links: [
          { name: "Brand at a Glance", href: "#" },
          { name: "Mission & Vision", href: "#" },
          { name: "Our Team", href: "#" },
          { name: "Partnerships", href: "#" },
          { name: "Sustainability & Social Impact", href: "#" },
        ]
      }
    ],
    footer: {
      copyright: "© 2023 Brand. All rights reserved.",
      bottomLinks: [
        { name: "Privacy Policy", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Designed and Powered by Cubix.", href: "#" },
      ]
    }
  };

// ScienceCard component class definitions
export const scienceCardClasses = {
  section: "relative w-full bg-black text-white min-h-screen py-8 md:py-16 px-4 md:px-8 lg:px-20",
  gradientLine: "absolute top-0 right-6 md:right-8 lg:right-22 xl:right-32 h-full flex flex-col items-center z-10",
  gradientBar: "w-1 h-150 sm:w-1.5 lg:w-1.5 md:h-72 lg:h-96 xl:h-[500px] rounded-full",
  grayLine: "w-0.5 sm:w-1 lg:w-1.5 flex-1 bg-gray-700 rounded-full",
  contentArea: "relative max-w-7xl mx-auto pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-40",
  spacing: "space-y-6 sm:space-y-8 md:space-y-12",
  header: "mb-8 sm:mb-12 md:mb-16",
  headerFlex: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6",
  title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight",
  button: "bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 whitespace-nowrap self-start sm:self-center",
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8",
  card: "relative rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl group h-64 sm:h-72 md:h-80 lg:h-96 w-full cursor-pointer",
  imageBg: "absolute inset-0",
  image: "opacity-100 group-hover:opacity-100 transition-opacity duration-300",
  overlay: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent transition-all duration-300",
  pattern: "absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300",
  cardContent: "relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8",
  textSpacing: "space-y-2 sm:space-y-3 md:space-y-4",
  cardTitle: "font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-orange-200 transition-colors duration-300",
  cardText: "text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300",
  underline: "w-0 group-hover:w-16 sm:group-hover:w-20 md:group-hover:w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-500 ease-out",
  glow: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
  glowEffect: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
};