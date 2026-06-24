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

export const homeData: { en: HomeSectionData; mm: HomeSectionData } = {
  en: {
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
  },
  mm: {
    hero: {
      titleAccent: "အဆင့်မြင့်",
      titleText: "အရည်အသွေးမီ စပါးနှင့် မတ်ပဲ",
      description:
        "ယုံကြည်စိတ်ချရသော အဆင့်မြင့် စပါးနှင့် မတ်ပဲ လက္ကားဖြန့်ချိရေး လုပ်ငန်း။ စိုက်ခင်းများမှ သင့်အိမ်တံခါးဝအထိ တိုက်ရိုက် ပို့ဆောင်ပေးပါသည်။",
      bgImage: "/images/home/bg.avif",
    },
    story: {
      titleNormal1: "မြန်မာနိုင်ငံ၏ ယုံကြည်စိတ်ချရဆုံးသော",
      titleBlock: "စိုက်ပျိုးရေးထုတ်ကုန်",
      titleAccent: "ဖြန့်ချိရေးလုပ်ငန်း",
      paragraphs: [
        "အောင်သပြေ (Aung Takhon) တွင် ကျွန်ုပ်တို့သည် အရည်အသွေးမြင့် ဆန်၊ ပဲမျိုးစုံနှင့် အခြားသော စိုက်ပျိုးရေးထုတ်ကုန်များကို မြန်မာနိုင်ငံတစ်ဝှမ်းလုံးသို့ စနစ်တကျ ဖြန့်ချိပေးနေပါသည်။ အရည်အသွေး၊ ယုံကြည်စိတ်ချရမှုနှင့် သုံးစွဲသူ စိတ်ကျေနပ်မှုတို့ကို အဓိကထားပြီး တောင်သူများ၊ စီးပွားရေးလုပ်ငန်းများနှင့် စားသုံးသူများကို ခိုင်မာသော ကွန်ရက်ဖြင့် ချိတ်ဆက်ပေးနေပါသည်။",
        "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်မှာ ဒေသခံတောင်သူများထံမှ အဆင့်မြင့် ထုတ်ကုန်များကို ဝယ်ယူပြီး သုံးစွဲသူများထံသို့ အကောင်းဆုံး အခြေအနေဖြင့် ရောက်ရှိစေရန် ဖြစ်ပြီး မြန်မာ့စိုက်ပျိုးရေးကဏ္ဍကို ပံ့ပိုးကူညီပေးရန် ဖြစ်ပါသည်။ ထုတ်ကုန်များကို ဝယ်ယူခြင်း၊ ပြုပြင်ခြင်းနှင့် ဖြန့်ဖြူးခြင်း လုပ်ငန်းစဉ်တစ်လျှောက်လုံးတွင် မြင့်မားသော စံချိန်စံညွှန်းများကို ထိန်းသိမ်းထားပါသည်။",
        "ရိုးသားဖြောင့်မတ်မှုနှင့် ထူးချွန်လိုသော စိတ်ဓာတ်ကို အခြေခံပြီး၊ အောင်သပြေသည် တောင်သူလယ်သမားများ၊ မိတ်ဖက်များနှင့် သုံးစွဲသူများနှင့် ရေရှည်ခိုင်မာသော ဆက်ဆံရေးကို တည်ဆောက်ကာ မြန်မာ့စိုက်ပျိုးရေးလုပ်ငန်း ရေရှည်ဖွံ့ဖြိုးတိုးတက်စေရန် ပါဝင်ဆောင်ရွက်နေပါသည်။",
      ],
    },
    products: {
      title: "ကျွန်ုပ်တို့၏",
      titleAccent: "ပရီမီယံ ထုတ်ကုန်များ",
      description:
        "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဒေသခံတောင်သူများထံမှ တိုက်ရိုက်ဝယ်ယူထားသော ကျွန်ုပ်တို့၏ အကောင်းဆုံး အရည်အသွေးမြင့် စိုက်ပျိုးရေးထုတ်ကုန်များကို လေ့လာကြည့်ရှုလိုက်ပါ။",
    },
    mission: {
      tag: "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်",
      title: "ဘယ်အရာက ကျွန်ုပ်တို့ကို",
      titleAccent: "တွန်းအားပေးနေသလဲ",
      description:
        "ကျွန်ုပ်တို့သည် ရိုးသားမှု၊ ယုံကြည်စိတ်ချရမှုနှင့် ဂရုစိုက်မှုတို့ဖြင့် အရည်အသွေးမြင့် စိုက်ပျိုးရေးထုတ်ကုန်များကို ပေးပို့ရန် သန္နိဋ္ဌာန်ချထားပါသည်။ ကျွန်ုပ်တို့၏ ရည်မှန်းချက်များမှာ- ယုံကြည်မှုနှင့် အရည်အသွေးဖြင့် သုံးစွဲသူ စိတ်ကျေနပ်မှု ရရှိစေရန်၊ နည်းလမ်းကောင်းများ၊ အရင်းအမြစ်များနှင့် မျှတသော မိတ်ဖက်ပြုမှုများဖြင့် တောင်သူများကို ပံ့ပိုးပေးရန်၊ မြန်မာနိုင်ငံ၏ စိုက်ပျိုးရေး ကွင်းဆက်ကို ပိုမိုခိုင်မာစေရန်၊ ပြည်တွင်းနှင့် ပြည်ပဈေးကွက်များတွင် အခွင့်အလမ်းများ တိုးချဲ့ရန်၊ ပိုမိုကောင်းမွန်သော လူမှုစီးပွားဘဝနှင့် ရေရှည်တည်တံ့သော စိုက်ပျိုးရေးဖွံ့ဖြိုးတိုးတက်မှုကို အထောက်အကူပြုရန်။",
      image: "/images/home/rice.png",
    },
    vision: {
      tag: "ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်",
      title: "ဘယ်ကို ဦးတည်",
      titleAccent: "သွားနေသလဲ",
      description:
        "မြန်မာနိုင်ငံကို အရည်အသွေးမြင့် ဆန်၊ ပဲမျိုးစုံနှင့် မရှိမဖြစ်လိုအပ်သော စိုက်ပျိုးရေးထုတ်ကုန်များ၏ ယုံကြည်စိတ်ချရသော အရင်းအမြစ်တစ်ခုအဖြစ် ကမ္ဘာ့ဈေးကွက်တွင် နေရာရစေပြီး၊ စိုက်ပျိုးရေးအသိုင်းအဝိုင်း၏ ဘဝများကို မြှင့်တင်ပေးခြင်းဖြင့် ကမ္ဘာ့စားနပ်ရိက္ခာ ဖူလုံမှုကဏ္ဍတွင် ထိပ်တန်းမှ ပါဝင်ဆောင်ရွက်သူ ဖြစ်လာစေရန်။ အရည်အသွေး၊ ရေရှည်တည်တံ့မှုနှင့် သုံးစွဲသူ စိတ်ကျေနပ်မှုအပေါ် ထားရှိသော ကျွန်ုပ်တို့၏ ကတိကဝတ်များဖြင့် မြန်မာ့စိုက်ပျိုးရေးကဏ္ဍတွင် ကောင်းမွန်သော အပြောင်းအလဲများကို ဆောင်ကြဉ်းပေးနိုင်ရန် မျှော်မှန်းပါသည်။",
      image: "/images/home/black_matpae.png",
    },
    contact: {
      title: "သင့်လိုအပ်ချက်များကို",
      titleAccent: "ဆွေးနွေးတိုင်ပင်ပါ",
      description:
        "ကျွန်ုပ်တို့၏ ထုတ်ကုန်များ၊ ဈေးနှုန်းများ သို့မဟုတ် အခြားမေးမြန်းလိုသည်များ ရှိပါက ကျွန်ုပ်တို့အဖွဲ့မှ အမြဲတမ်း အဆင်သင့် ဖြေကြားပေးပါမည်။",
      email: "aungtakhon@gmail.com",
      phone: "+95 9 123 456 789",
      address: "ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ",
    },
  },
};
