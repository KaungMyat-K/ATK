import { AboutPageData } from "@/constants/about-data";

interface AboutStoryProps {
  story: AboutPageData["story"];
}

export default function Story({ story }: AboutStoryProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Our Story Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {story.title}{" "}
              <span className="text-secondary">{story.titleAccent}</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-secondary mb-4 sm:mb-6 mx-auto lg:mx-0"></div>

            {/* Paragraph များကို Data ထဲမှ Dynamic ပတ်ထုတ်ခြင်း */}
            {story.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-600 leading-relaxed text-sm sm:text-base ${
                  index === story.paragraphs.length - 1
                    ? "mb-0"
                    : "mb-3 sm:mb-4"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Side - Two Images (Up and Down) */}
          <div className="order-2 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6 w-full">
            {/* First Image - Starts from Right */}
            <div className="relative flex justify-end">
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-secondary/20 rounded-full blur-xl sm:blur-2xl"></div>
              <img
                src={story.images.image1}
                alt="Rice Fields"
                className="rounded-tr-full rounded-tl-none w-full sm:w-11/12 md:w-10/12 lg:w-5/6 h-48 sm:h-52 md:h-56 lg:h-60 object-cover relative z-10 shadow-lg"
              />
            </div>

            {/* Second Image - Starts from Left */}
            <div className="relative flex justify-start">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-secondary/20 rounded-full blur-xl sm:blur-2xl"></div>
              <img
                src={story.images.image2}
                alt="Farming"
                className="rounded-bl-full rounded-br-none w-full sm:w-11/12 md:w-10/12 lg:w-5/6 h-48 sm:h-52 md:h-56 lg:h-60 object-cover relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
