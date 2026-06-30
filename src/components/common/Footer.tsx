"use client";

import { contactData } from "@/constants/contact-data";
import { navData } from "@/constants/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { lang } = useLanguage();
  const currentNavData = navData[lang];
  const currentContactData = contactData[lang];

  return (
    <footer className="bg-secondary text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-10 lg:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={32}
                className="w-10 h-7 sm:w-12 sm:h-8 object-contain"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  {currentNavData.title}
                </h3>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              {currentNavData.footer.aboutText}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white/90">
              {currentNavData.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {currentNavData.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white/90">
              {currentNavData.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-white/60 text-sm">
              <li className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition duration-200">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-white/40"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="break-all">
                  {currentContactData.info.email}
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition duration-200">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-white/40"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="flex flex-col">
                  <span>{currentContactData.info.phone1}</span>
                  <span>{currentContactData.info.phone2}</span>
                </div>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-3 hover:text-white transition duration-200">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col text-center sm:text-left">
                  <span>{currentContactData.info.addressLine1}</span>
                  <span>{currentContactData.info.addressLine2}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white/90">
              {currentNavData.footer.followTitle}
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs mx-auto sm:mx-0">
              {currentNavData.footer.followDescription}
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a
                href={currentContactData.info.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition duration-200 text-white/60 hover:text-white"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-5 sm:pt-6 text-center">
          <p className="text-white/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Aung Takhon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
