import { AboutPageData } from "@/constants/about-data";

interface AboutHeroProps {
  hero: AboutPageData["hero"];
}

export default function Hero({ hero }: AboutHeroProps) {
  return (
    <section className="relative min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh] flex items-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${hero.bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {hero.title}{" "}
            <span className="text-primary">{hero.titleAccent}</span>
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
