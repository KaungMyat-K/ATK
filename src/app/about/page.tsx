import Hero from "@/components/about/Hero";
import Stats from "@/components/about/Stats";
import Story from "@/components/about/Story";
import { aboutData } from "@/constants/about-data";

export default function page() {
  return (
    <>
      <Hero hero={aboutData.hero} />
      <Story story={aboutData.story} />
      <Stats stats={aboutData.stats} />
    </>
  );
}
