"use client";

import Hero from "@/components/about/Hero";
import Stats from "@/components/about/Stats";
import Story from "@/components/about/Story";
import { aboutData } from "@/constants/about-data";
import { useLanguage } from "@/context/LanguageContext";

export default function page() {
  const { lang } = useLanguage();
  const currentAboutData = aboutData[lang];
  const isMyanmar = lang === "mm";

  return (
    <div className={isMyanmar ? "myanmar-content" : ""}>
      <Hero hero={currentAboutData.hero} />
      <Story story={currentAboutData.story} />
      <Stats stats={currentAboutData.stats} />
    </div>
  );
}
