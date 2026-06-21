import { navLinks } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const productLinks = [
    { name: "Premium Rice", href: "/product#premium-rice" },
    { name: "Black Matpe", href: "/product#black-matpe" },
    { name: "Yellow Corn", href: "/product#yellow-corn" },
    { name: "Paddy Rice", href: "/product#paddy-rice" },
  ];

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={32}
                className="w-12 h-8  object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Aung Takhon</h3>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Premium quality paddy, black gram, and agricultural products
              wholesale center in Myanmar.
            </p>
          </div>

          {/* Quick Links (Reused from Navigation Config) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-white/80 hover:text-white transition duration-200 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>aungtakhon@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+95 9 123 456 789</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Yangon, Myanmar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Aung Takhon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
