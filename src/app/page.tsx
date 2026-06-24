"use client";

import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import MissionVision from "@/components/home/MissionVision";
import OurStory from "@/components/home/OurStory";
import Products from "@/components/home/Products";
import { contactData } from "@/constants/contact-data";
import { homeData } from "@/constants/home-data";
import { productsData } from "@/constants/products-data";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();
  const currentHomeData = homeData[lang];
  const featuredProducts = productsData[lang].items.slice(0, 3);
  const currentContactData = contactData[lang];
  const isMyanmar = lang === "mm";

  return (
    <div className={isMyanmar ? "myanmar-content" : ""}>
      <Hero hero={currentHomeData.hero} />
      <OurStory story={currentHomeData.story} />
      <Products
        products={currentHomeData.products}
        featuredProducts={featuredProducts}
      />
      <MissionVision
        mission={currentHomeData.mission}
        vision={currentHomeData.vision}
      />
      <Contact
        contact={currentHomeData.contact}
        form={currentContactData.form}
      />
    </div>
  );
}
