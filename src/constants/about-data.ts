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

export const aboutData: { en: AboutPageData; mm: AboutPageData } = {
  en: {
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
        "Founded in Hinthada in 1992, Aung Ta Khon has over 30 years of experience in agricultural trading.",
        "We specialize in rice, black matpe, green mung beans, and paddy, earning a reputation for quality, integrity, and reliability.",
        "With a strong commitment to exceptional service, we strive to be a trusted and long-term partner for our customers.",
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
  },
  mm: {
    hero: {
      title: "ကျွန်ုပ်တို့",
      titleAccent: "အကြောင်း",
      description:
        "အောင်သပြေ (Aung Takhon) နှင့် မြန်မာ့စိုက်ပျိုးရေးကဏ္ဍအတွင်း ဖြတ်သန်းလာခဲ့သော ကျွန်ုပ်တို့၏ ခရီးစဉ်အကြောင်းကို ပိုမိုလေ့လာကြည့်ရှုပါ။",
      bgImage: "/images/about/hero.jpg",
    },
    story: {
      title: "ကျွန်ုပ်တို့၏",
      titleAccent: "ဖြတ်သန်းမှုသမိုင်း",
      paragraphs: [
        "မြန်မာ့စိုက်ပျိုးရေးကဏ္ဍကို အဆင့်မြှင့်တင်ရန် မျှော်မှန်းချက်ဖြင့် အောင်သပြေကို အိမ်တွင်းမိသားစုစီးပွားရေးလုပ်ငန်းငယ်လေးတစ်ခုအဖြစ် စတင်တည်ထောင်ခဲ့ပါသည်။ နှစ်ရက်လည်လာသည်နှင့်အမျှ ကျွန်ုပ်တို့သည် အရည်အသွေးမြင့် စပါး၊ မတ်ပဲနှင့် အခြားစိုက်ပျိုးရေးထုတ်ကုန်များကို ယုံကြည်စိတ်ချစွာ ဖြန့်ချိရာ အဓိက လက္ကားဗဟိုဌာနကြီးတစ်ခုအဖြစ် တိုးတက်အောင်မြင်လာခဲ့ပါသည်။",
        "ကျွန်ုပ်တို့၏ ဖြတ်သန်းမှုခရီးစဉ်သည် မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဒေသခံတောင်သူများနှင့် ခိုင်မာသော ဆက်ဆံရေးအပေါ် အခြေခံတည်ဆောက်ထားခြင်းဖြစ်ပါသည်။ တောင်သူများနှင့် လက်တွဲလုပ်ဆောင်ကာ နည်းလမ်းကောင်းများ မျှဝေခြင်း၊ မျှတသောဈေးနှုန်းပေးခြင်းနှင့် ခိုင်မာသောဈေးကွက်ရရှိစေခြင်းတို့ကို ဆောင်ရွက်ပေးခြင်းဖြင့် အရည်အသွေးအကောင်းဆုံး ကောက်ပဲသီးနှံများသာ သုံးစွဲသူများထံ ရောက်ရှိစေရန် သေချာစေပါသည်။",
        "ရိုးသားဖြောင့်မတ်မှုနှင့် ထူးချွန်လိုသော စိတ်ဓာတ်ကို အရင်းခံပြီး အောင်သပြေသည် အရည်အသွေး၊ ဂုဏ်သိက္ခာနှင့် ရေရှည်တည်တံ့မှု၏ ပြယုဂ်တစ်ခုအဖြစ် ရပ်တည်နေပါသည်။ ကျွန်ုပ်တို့၏ အခြေခံမူများနှင့် အရည်အသွေးအပေါ် ကတိကဝတ်များကို စွဲစွဲမြဲမြဲ ဆုပ်ကိုင်ထားပြီး မြန်မာ့စိုက်ပျိုးရေးကဏ္ဍ၏ ကြွယ်ဝမှုများကို ပြည်တွင်းပြည်ပဈေးကွက်များနှင့် ဆက်သွယ်ချိတ်ဆက်ပေးနိုင်ရန် အရှိန်အဟုန်ဖြင့် တိုးချဲ့ဆောင်ရွက်နေပါသည်။",
      ],
      images: {
        image1: "/images/about/bg.avif",
        image2: "/images/about/bg.avif",
      },
    },
    stats: [
      {
        id: "employees",
        value: "၅၀+",
        label: "စုစုပေါင်း ဝန်ထမ်းအင်အား",
        subLabel: "ကြိုးစားအားထုတ်နေသော အဖွဲ့ဝင်များ",
      },
      {
        id: "customers",
        value: "၅၀၀+",
        label: "စုစုပေါင်း သုံးစွဲသူဦးရေ",
        subLabel: "စိတ်ကျေနပ်မှုရရှိပြီးသော မိတ်ဖက်များ",
      },
      {
        id: "retention",
        value: "၉၅%",
        label: "သုံးစွဲသူ ရေရှည်လက်တွဲမှု",
        subLabel: "ရေရှည်ယုံကြည် စိတ်ကျေနပ်မှု",
      },
    ],
  },
};
