import { productsData } from "@/constants/products-data";
import Image from "next/image";

export default function ProductGrid() {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid (100% Dynamic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {productsData.items.map((product) => (
            <div
              key={product.id}
              className="bg-secondary/30 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-52 md:h-56 lg:h-60 w-full">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 flex-grow">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
