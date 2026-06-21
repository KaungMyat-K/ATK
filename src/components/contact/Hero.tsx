import { contactData, ContactPageData } from "@/constants/contact-data";

interface ContactHeroProps {
  hero: ContactPageData["hero"];
}

export default function Hero({ hero }: ContactHeroProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
            {hero.title}{" "}
            <span className="text-secondary">{hero.titleAccent}</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-secondary mx-auto"></div>
          <p className="text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-xl sm:max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
