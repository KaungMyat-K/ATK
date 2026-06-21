import { AboutPageData } from "@/constants/about-data";

interface AboutStatsProps {
  stats: AboutPageData["stats"];
}

export default function Stats({ stats }: AboutStatsProps) {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-primary">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Single Card with All Information - Full Width */}
        <div className="w-full bg-white rounded-2xl overflow-hidden bg-gradient-to-r from-secondary/30 to-secondary/5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`p-5 sm:p-6 md:p-8 lg:p-10 text-center ${
                  index !== stats.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-gray-100"
                    : ""
                }`}
              >
                <div className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-700 font-semibold text-xl sm:text-sm md:text-base lg:text-lg">
                  {stat.label}
                </p>
                <p className="text-gray-400 text-base sm:text-xs md:text-sm mt-1 sm:mt-2">
                  {stat.subLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
