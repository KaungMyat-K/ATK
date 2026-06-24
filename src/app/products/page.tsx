"use client";

import Hero from "@/components/products/Hero";
import ProductGrid from "@/components/products/ProductGrid";
import { productsData } from "@/constants/products-data";
import { useLanguage } from "@/context/LanguageContext";

export default function page() {
  const { lang } = useLanguage();
  const currentProductsData = productsData[lang];
  const isMyanmar = lang === "mm";

  return (
    <div className={isMyanmar ? "myanmar-content" : ""}>
      <Hero hero={currentProductsData.hero} />
      <ProductGrid productsData={currentProductsData.items} />
    </div>
  );
}
