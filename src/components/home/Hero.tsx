import { HomeSectionData } from "@/constants/home-data";
import Image from "next/image";

interface HeroProps {
  hero: HomeSectionData["hero"];
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[45vh] lg:min-h-[40vh] xl:min-h-[70vh] flex items-center">
      <Image
        src={hero.bgImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center xl:text-left z-10">
        <div className="max-w-full md:max-w-2xl mx-auto xl:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-3 lg:mb-4 ">
            <span className="text-secondary">{hero.titleAccent}</span>{" "}
            {hero.titleText}
          </h1>
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 lg:mb-8">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
