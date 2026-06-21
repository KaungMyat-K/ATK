import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import MissionVision from "@/components/home/MissionVision";
import OurStory from "@/components/home/OurStory";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Products />
      <MissionVision />
      <Contact />
    </>
  );
}
