export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  desktopHeight: string;
}

export interface ProductsPageData {
  hero: {
    title: string;
    titleAccent: string;
    description: string;
    bgImage: string;
  };
  items: Product[];
}

export const productsData: ProductsPageData = {
  hero: {
    title: "Our",
    titleAccent: "Products",
    description:
      "Premium quality agricultural products sourced directly from local farmers across Myanmar.",
    bgImage: "/images/products/hero.jpg",
  },

  items: [
    {
      id: "premium-rice",
      name: "Premium Rice",
      description:
        "High-quality fragrant rice grown in the fertile plains of Myanmar.",
      imageSrc: "/images/products/rice.jpg",
      desktopHeight: "h-72",
    },
    {
      id: "black-matpe",
      name: "Black Matpe",
      description:
        "Premium black matpe beans with excellent quality and rich flavor.",
      imageSrc: "/images/products/rice.jpg",
      desktopHeight: "h-48",
    },
    {
      id: "green-mung-beans",
      name: "Green Mung Beans",
      description:
        "Nutritious green mung beans grown using sustainable farming practices.",
      imageSrc: "/images/products/rice.jpg",
      desktopHeight: "h-96",
    },
    {
      id: "paddy",
      name: "Paddy",
      description:
        "Premium quality paddy rice, freshly harvested from local farms.",
      imageSrc: "/images/products/rice.jpg",
      desktopHeight: "",
    },
  ],
};
