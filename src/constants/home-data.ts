export interface HomeSectionData {
  hero: {
    titleAccent: string;
    titleText: string;
    description: string;
    bgImage: string;
  };
  story: {
    titleNormal1: string;
    titleBlock: string;
    titleAccent: string;
    paragraphs: string[];
  };
  products: {
    title: string;
    titleAccent: string;
    description: string;
  };
  mission: {
    tag: string;
    title: string;
    titleAccent: string;
    description: string;
    image: string;
  };
  vision: {
    tag: string;
    title: string;
    titleAccent: string;
    description: string;
    image: string;
  };
  contact: {
    title: string;
    titleAccent: string;
    description: string;
    email: string;
    phone: string;
    address: string;
  };
}

export const homeData: HomeSectionData = {
  hero: {
    titleAccent: "Premium",
    titleText: "Quality Paddy & Black Gram",
    description:
      "Trusted wholesale supplier of premium quality paddy and black gram. Direct from farm to your doorstep.",
    bgImage: "/images/home/bg.avif",
  },
  story: {
    titleNormal1: "Myanmar's Trusted",
    titleBlock: "Supplier of",
    titleAccent: "Agricultural Products",
    paragraphs: [
      "At Aung Takhon, we are committed to delivering high-quality rice, beans, pulses, and a wide range of agricultural products across Myanmar. With a strong focus on quality, reliability, and customer satisfaction, we connect farmers, businesses, and consumers through a trusted supply network.",
      "Our mission is to support Myanmar's agricultural sector by sourcing premium products from local growers and ensuring they reach customers in excellent condition. We take pride in maintaining high standards throughout procurement, processing, and distribution.",
      "Driven by integrity and a passion for excellence, Aung Takhon continues to build long-term relationships with farmers, partners, and customers while contributing to the growth and sustainability of Myanmar's agricultural industry.",
    ],
  },
  products: {
    title: "Our",
    titleAccent: "Premium Products",
    description:
      "Discover our finest selection of high-quality agricultural products, sourced directly from local farmers across Myanmar.",
  },
  mission: {
    tag: "Our Mission",
    title: "What Drives",
    titleAccent: "Us",
    description:
      "We are committed to delivering high-quality agricultural products with honesty, reliability, and care. Our mission is to: Ensure customer satisfaction through trust and quality, Support farmers with guidance, resources, and fair partnerships, Strengthen the agricultural supply chain in Myanmar, Expand opportunities in both local and international markets, Contribute to better livelihoods and sustainable farming growth.",
    image: "/images/home/rice.png",
  },
  vision: {
    tag: "Our Vision",
    title: "Where We're",
    titleAccent: "Heading",
    description:
      "To become a leading contributor to global food security by positioning Myanmar as a trusted source of high-quality rice, beans, pulses, and essential agricultural products, while improving the lives of farming communities. We envision a future where our commitment to quality, sustainability, and customer satisfaction drives positive change across Myanmar's agricultural landscape.",
    image: "/images/home/black_matpae.png",
  },
  contact: {
    title: "Let's Talk About",
    titleAccent: "Your Needs",
    description:
      "Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.",
    email: "aungtakhon@gmail.com",
    phone: "+95 9 123 456 789",
    address: "Yangon, Myanmar",
  },
};
