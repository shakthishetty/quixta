import { footerData } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
 

  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 py-6">
          {/* Left: Logo */}
          <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">{footerData.contact.logo}</h2>

          {/* Center: Email */}
          <span className="text-white text-sm mb-2 md:mb-0">{footerData.contact.email}</span>

          {/* Right: Phone */}
          <span className="text-white text-sm">{footerData.contact.phone}</span>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10 border-b border-gray-700">
          {/* Left Column */}
          <div className="md:col-span-2">
            <p className="text-sm mb-6 max-w-xs">
              {footerData.description}
            </p>
            <div className="flex space-x-4">
              {footerData.socialMedia.map((social) => (
                <Link
                  key={social.alt}
                  href="#"
                  aria-label={social.alt}
                  className="w-9 h-9 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
                >
                  <Image src={social.src} alt={social.alt} width={16} height={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-white font-medium">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 py-4 space-y-4 md:space-y-0">
          <p>{footerData.footer.copyright}</p>
          <div className="flex space-x-6">
            {footerData.footer.bottomLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white">{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
