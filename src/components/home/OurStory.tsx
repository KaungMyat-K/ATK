import { homeData } from "@/constants/home-data";

export default function OurStory() {
  const { story } = homeData;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {story.titleNormal1}
              <span className="block">{story.titleBlock}</span>
              <span className="text-secondary">{story.titleAccent}</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto lg:mx-0"></div>
          </div>
          <div className="text-center lg:text-left space-y-4">
            {story.paragraphs.map((p, index) => (
              <p
                key={index}
                className="text-gray-600 leading-relaxed text-sm sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
