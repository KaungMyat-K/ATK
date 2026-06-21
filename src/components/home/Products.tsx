"use client";

import { homeData } from "@/constants/home-data";
import { productsData } from "@/constants/products-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Products() {
  const { products } = homeData;
  const featuredProducts = productsData.items.slice(0, 3);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateDots = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth =
        container.querySelector(".snap-start")?.getBoundingClientRect().width ||
        0;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));

      // Dots Ref ထဲက data-dot ပါတဲ့ element တွေကို ရှာခြင်း
      if (dotsRef.current) {
        const dots = dotsRef.current.querySelectorAll("[data-dot]");
        dots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.remove("bg-gray-300");
            dot.classList.add("bg-secondary", "w-4");
          } else {
            dot.classList.remove("bg-secondary", "w-4");
            dot.classList.add("bg-gray-300");
          }
        });
      }
    };

    container.addEventListener("scroll", updateDots);
    updateDots();

    return () => container.removeEventListener("scroll", updateDots);
  }, [featuredProducts.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative">
      <div className="absolute bottom-0 right-0 flex items-center justify-center opacity-10 pointer-events-none">
        <Image
          src="/images/home/wheat.png"
          alt=""
          width={900}
          height={900}
          className="w-[500px] h-[500px] md:w-[900px] md:h-[900px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile View - Snap Scroll (One card at a time) */}
        <div className="block lg:hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {products.title}
              <span className="text-secondary">{products.titleAccent}</span>
            </h2>
            <div className="w-16 h-1 bg-secondary mb-4 mx-auto"></div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              {products.description}
            </p>
          </div>

          {/* Snap Scroll Container */}
          <div className="relative">
            <div
              ref={scrollContainerRef} // id="scrollContainer" အစား ref ကို ချိတ်ပေးလိုက်ပါတယ်
              className="overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth flex gap-4 class-hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-[calc(100vw-2rem)] flex-shrink-0 snap-start bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Dots Indicator */}
            <div ref={dotsRef} className="flex justify-center gap-2 mt-4">
              {featuredProducts.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                  data-dot={index}
                ></div>
              ))}
            </div>

            {/* See More Products Button */}
            <div className="text-center mt-6">
              <Link
                href="/product"
                className="inline-block bg-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition duration-200 shadow-md text-sm"
              >
                See More Products
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop View - Sticky Masonry */}
        <div className="hidden lg:block">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Side - Masonry Layout (ပထမဆုံး ၃ ခုပဲ ပြရန် ပြင်ဆင်ပြီး) */}
            <div className="md:col-span-2 columns-1 md:columns-2 gap-4">
              {featuredProducts.map((product) => (
                <div
                  key={`desktop-${product.id}`}
                  className="break-inside-avoid mb-4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className={`w-full ${
                      product.desktopHeight || "h-64"
                    } object-cover`}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Sticky Panel */}
            <div className="sticky top-24 self-start">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {products.title}{" "}
                <span className="text-secondary">{products.titleAccent}</span>
              </h2>
              <div className="w-16 h-1 bg-secondary mb-4"></div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {products.description}
              </p>
              <Link
                href="/product"
                className="inline-block bg-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition duration-200 shadow-md text-sm"
              >
                See More Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
