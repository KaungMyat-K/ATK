export interface StatItem {
  id: string;
  value: string;
  label: string;
  subLabel: string;
}

export interface AboutPageData {
  hero: {
    title: string;
    titleAccent: string;
    description: string;
    bgImage: string;
  };
  story: {
    title: string;
    titleAccent: string;
    paragraphs: string[];
    images: {
      image1: string;
      image2: string;
    };
  };
  stats: StatItem[];
}

export const aboutData: AboutPageData = {
  hero: {
    title: "About",
    titleAccent: "Us",
    description:
      "Learn more about Aung Takhon and our journey in Myanmar's agricultural industry.",
    bgImage: "/images/about/hero.jpg",
  },
  story: {
    title: "Our",
    titleAccent: "Story",
    paragraphs: [
      "Founded with a vision to transform Myanmar's agricultural landscape, Aung Takhon began as a small family-owned business with a big dream. Over the years, we have grown into a trusted wholesale center for premium quality paddy, black gram, and various agricultural products.",
      "Our journey is built on strong relationships with local farmers across Myanmar. We work hand-in-hand with them, providing guidance, fair pricing, and reliable market access. This partnership ensures that only the finest quality grains reach our customers.",
      "Today, Aung Takhon stands as a symbol of quality, integrity, and sustainability. We continue to expand our reach, connecting Myanmar's agricultural wealth to both local and international markets, while staying true to our roots and commitment to excellence.",
    ],
    images: {
      image1: "/images/about/bg.avif",
      image2: "/images/about/bg.avif",
    },
  },
  stats: [
    {
      id: "employees",
      value: "50+",
      label: "Total Employees",
      subLabel: "Dedicated team members",
    },
    {
      id: "customers",
      value: "500+",
      label: "Total Customers",
      subLabel: "Happy clients served",
    },
    {
      id: "retention",
      value: "95%",
      label: "Customer Retention",
      subLabel: "Long-term satisfaction",
    },
  ],
};
