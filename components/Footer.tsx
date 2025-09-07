import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 py-6">
          {/* Left: Logo */}
          <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">LOGO</h2>

          {/* Center: Email */}
          <span className="text-white text-sm mb-2 md:mb-0">info@brand.com</span>

          {/* Right: Phone */}
          <span className="text-white text-sm">+65 8808 2159</span>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10 border-b border-gray-700">
          {/* Left Column */}
          <div className="md:col-span-2">
            <p className="text-sm mb-6 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex space-x-4">
              {[
                { src: "/facebook.svg", alt: "Facebook" },
                { src: "/twitter.svg", alt: "Twitter" },
                { src: "/instagram.svg", alt: "Instagram" },
              ].map((s) => (
                <Link
                  key={s.alt}
                  href="#"
                  aria-label={s.alt}
                  className="w-9 h-9 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
                >
                  <Image src={s.src} alt={s.alt} width={16} height={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-white font-medium">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">Regal</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Luminioell</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white font-medium">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">Get Started</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Technology</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Newsroom</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Who we Are */}
          <div>
            <h4 className="mb-4 text-white font-medium">Who we Are</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">Brand at a Glance</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Mission & Vision</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Our Team</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Partnerships</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Sustainability & Social Impact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 py-4 space-y-4 md:space-y-0">
          <p>© 2023 Brand. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
            <Link href="#" className="hover:text-white">Designed and Powered by Cubix.</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
