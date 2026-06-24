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

export const productsData: { en: ProductsPageData; mm: ProductsPageData } = {
  en: {
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
  },
  mm: {
    hero: {
      title: "ကျွန်ုပ်တို့၏",
      titleAccent: "ထုတ်ကုန်များ",
      description:
        "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဒေသခံတောင်သူများထံမှ တိုက်ရိုက်ဝယ်ယူထားသော အရည်အသွေးမြင့် စိုက်ပျိုးရေးထုတ်ကုန်များ။",
      bgImage: "/images/products/hero.jpg",
    },
    items: [
      {
        id: "premium-rice",
        name: "ထိပ်တန်းဆန်ကောင်း",
        description:
          "မြန်မာနိုင်ငံ၏ မြေဆီလွှာကောင်းမွန်သော လွင်ပြင်ဒေသများတွင် စိုက်ပျိုးထားသည့် အရည်အသွေးမြင့် မွှေးပျံ့သောဆန်။",
        imageSrc: "/images/products/rice.jpg",
        desktopHeight: "h-72",
      },
      {
        id: "black-matpe",
        name: "မတ်ပဲ (အဆင့်မြင့်)",
        description:
          "ထူးကဲသော အရည်အသွေးနှင့် အရသာကောင်းမွန်သည့် အဆင့်မြင့် မတ်ပဲများ။",
        imageSrc: "/images/products/rice.jpg",
        desktopHeight: "h-48",
      },
      {
        id: "green-mung-beans",
        name: "ပဲတီစိမ်း",
        description:
          "ရေရှည်တည်တံ့သော စိုက်ပျိုးရေးနည်းစနစ်များဖြင့် စိုက်ပျိုးထားသည့် အာဟာရပြည့် ပဲတီစိမ်း။",
        imageSrc: "/images/products/rice.jpg",
        desktopHeight: "h-96",
      },
      {
        id: "paddy",
        name: "စပါး",
        description:
          "ဒေသခံစိုက်ခင်းများမှ လတ်လတ်ဆတ်ဆတ် ရိတ်သိမ်းထားသော အရည်အသွေးမြင့် စပါးများ။",
        imageSrc: "/images/products/rice.jpg",
        desktopHeight: "",
      },
    ],
  },
};
