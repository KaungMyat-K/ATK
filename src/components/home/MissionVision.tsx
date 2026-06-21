"use client";

import { homeData } from "@/constants/home-data";
import Image from "next/image";

export default function MissionVision() {
  const { mission, vision } = homeData;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Card */}
        <div className="relative mb-16 sm:mb-24 md:mb-32 lg:mb-40">
          <div className="hidden sm:block absolute sm:-top-6 sm:-left-6 md:-top-0 md:-left-10 z-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rotate-6">
            <Image
              src={mission.image}
              alt="Mission"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative z-10 bg-white rounded-2xl shadow-xl sm:ml-16 md:ml-24 lg:ml-32">
            <div className="p-5 sm:p-8 md:p-12 sm:pl-28 md:pl-40 lg:pl-48">
              <div className="inline-block px-3 sm:px-4 py-1 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {mission.tag}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                {mission.title}{" "}
                <span className="text-secondary">{mission.titleAccent}</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mb-4 sm:mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {mission.description}
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative">
          <div className="hidden sm:block absolute sm:-top-6 sm:-right-6 md:-top-10 md:-right-14 z-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 -rotate-6">
            <Image
              src={vision.image}
              alt="Vision"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative z-10 bg-white rounded-2xl shadow-xl sm:mr-16 md:mr-24 lg:mr-32">
            <div className="p-5 sm:p-8 md:p-12 sm:pr-28 md:pr-40 lg:pr-48 sm:text-right">
              <div className="inline-block px-3 sm:px-4 py-1 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {vision.tag}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                {vision.title}{" "}
                <span className="text-secondary">{vision.titleAccent}</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mb-4 sm:mb-6 sm:mr-0 sm:ml-auto"></div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
