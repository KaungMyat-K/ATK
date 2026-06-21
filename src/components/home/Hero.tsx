import { homeData } from "@/constants/home-data";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { hero } = homeData;

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center">
      <Image
        src={hero.bgImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left z-10">
        <div className="max-w-full md:max-w-2xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            <span className="text-secondary">{hero.titleAccent}</span>{" "}
            {hero.titleText}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8">
            {hero.description}
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-block bg-secondary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-200 shadow-md text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
