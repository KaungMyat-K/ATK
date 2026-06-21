import { productsData } from "@/constants/products-data";
import Image from "next/image";

export default function Hero() {
  const { hero } = productsData;
  return (
    <section className="relative min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh] flex items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      {/* Background Image Container (Next.js Optimized Image) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={hero.bgImage}
          alt="Products Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Overlay Line */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {hero.title}{" "}
            <span className="text-secondary">{hero.titleAccent}</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-gray-200 mt-3 sm:mt-4 max-w-[90%] sm:max-w-2xl mx-auto text-sm sm:text-base">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
