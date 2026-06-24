"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navData } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const currentNavData = navData[lang];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={64}
              height={48}
              className="w-16 h-12 object-contain"
              priority
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-secondary">
                <span>{currentNavData.title}</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-600 -mt-0.5 font-medium">
                {currentNavData.subtitle}
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {currentNavData.links.map((link) => {
              const isContact = link.href === "/contact";
              const isActive = pathname === link.href;

              if (isContact) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="border-2 border-secondary text-secondary px-3 py-1 rounded-full font-semibold hover:bg-secondary hover:text-white transition duration-200"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 hover:text-secondary transition duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${
                    isActive
                      ? "text-secondary after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button
              onClick={() => setLang(lang === "en" ? "mm" : "en")}
              className="flex items-center gap-2 "
            >
              <div className="relative w-14 h-7 bg-secondary rounded-full transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-between px-2 text-[11px] font-bold">
                  <span
                    className={`${
                      lang === "en" ? "text-secondary" : "text-primary"
                    } transition-colors duration-300`}
                  >
                    EN
                  </span>
                  <span
                    className={`${
                      lang === "mm" ? "text-secondary" : "text-primary"
                    } transition-colors duration-300 `}
                  >
                    MM
                  </span>
                </div>

                <div
                  className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-300 flex items-center justify-center ${
                    lang === "en" ? "left-0.5" : "left-[30px]"
                  }`}
                >
                  <img
                    src={
                      lang === "en"
                        ? "https://flagcdn.com/w40/gb.png"
                        : "https://flagcdn.com/w40/mm.png"
                    }
                    alt={lang === "en" ? "UK" : "Myanmar"}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                </div>
              </div>
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/30 backdrop-blur-lg border-t border-white/20 py-4 px-4 flex flex-col space-y-3 items-center text-center transition-all duration-300 absolute left-0 right-0 top-16 z-[100] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {currentNavData.links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-secondary transition duration-200 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-0.5 after:bg-secondary after:transition-all after:duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
