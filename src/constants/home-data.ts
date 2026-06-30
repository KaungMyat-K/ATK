import { contactData } from "./contact-data";

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
    phone1: string;
    phone2: string;
    address1: string;
    address2: string;
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
        "Aung Tha Khon is a trusted agricultural trading company in Myanmar, specializing in rice, beans, pulses, and other agricultural products.",
        "We are committed to providing high-quality products, fair pricing, and reliable service while building long-term partnerships with farmers, suppliers, and customers.",
        "Our mission is to support the growth of Myanmar's agricultural sector through integrity, professionalism, and customer satisfaction.",
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
        "We are committed to ensuring customer satisfaction through trust and quality while supporting farmers with expert guidance, valuable resources, and fair partnerships. By strengthening Myanmar's agricultural supply chain, we aim to create greater opportunities in both local and international markets, contributing to improved livelihoods and the sustainable growth of the agricultural sector.",
      image: "/images/home/rice.png",
    },
    vision: {
      tag: "Our Vision",
      title: "Where We're",
      titleAccent: "Heading",
      description:
        "To become a leading contributor to global food security by positioning Myanmar as a trusted source of high-quality rice, beans, pulses, and essential agricultural products, while improving the lives of farming communities.",
      image: "/images/home/black_matpae.png",
    },
    contact: {
      title: "Let's Talk About",
      titleAccent: "Your Needs",
      description:
        "Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.",
      email: "aungtakhon@gmail.com",
      phone1: contactData.en.info.phone1,
      phone2: contactData.en.info.phone2,
      address1: "No. 42, Shwe Bon Thar Street",
      address2: "Yangon, Myanmar",
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
        "အောင်တံခွန် (Aung Takhon) သည် မြန်မာနိုင်ငံ၏ ယုံကြည်စိတ်ချရသော စိုက်ပျိုးရေးထွက်ကုန် ရောင်းဝယ်ရေးကုမ္ပဏီတစ်ခုဖြစ်ပြီး ဆန်၊ ပဲမျိုးစုံနှင့် အခြားစိုက်ပျိုးရေးထွက်ကုန်များကို အရည်အသွေးမြင့်စွာ ဖြန့်ဖြူးရောင်းချလျက်ရှိပါသည်။",
        "အရည်အသွေးကောင်းမွန်သော ထုတ်ကုန်များ၊ သင့်တင့်မျှတသောဈေးနှုန်းများနှင့် ယုံကြည်စိတ်ချရသော ဝန်ဆောင်မှုများကို ပေးအပ်ကာ တောင်သူလယ်သမားများ၊ ပေးသွင်းသူများနှင့် ဖောက်သည်များနှင့် ရေရှည်လက်တွဲဆောင်ရွက်နိုင်သော မိတ်ဖက်ဆက်ဆံရေးကို တည်ဆောက်ရန် ရည်ရွယ်ပါသည်။",
        "ကျွန်ုပ်တိုသည် ရိုးသားမှု၊ ကျွမ်းကျင်မှုနှင့် ဖောက်သည်စိတ်ကျေနပ်မှုကို အခြေခံ၍ မြန်မာ့စိုက်ပျိုးရေးကဏ္ဍ ဖွံဖြိုးတိုးတက်ရေးကို အားပေးကူညီလျက်ရှိပါသည်။",
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
        "ကျွန်ုပ်တို့သည် ယုံကြည်စိတ်ချရမှုနှင့် အရည်အသွေးတို့ဖြင့် ဝယ်ယူသူတို့၏ စိတ်ကျေနပ်မှုကို အာမခံချက်ပေးရန် ကတိကဝတ်ပြုထားသကဲ့သို့ တောင်သူလယ်သမားများအတွက်လည်း ကျွမ်းကျင်သောလမ်းညွှန်မှုများ၊ တန်ဖိုးရှိသော အရင်းအမြစ်များနှင့် တရားမျှတသည့် ပူးပေါင်းဆောင်ရွက်မှုများဖြင့် အထောက်အပံ့ပေးလျက်ရှိသည်။ မြန်မာနိုင်ငံ၏ စိုက်ပျိုးရေး ထောက်ပံ့ပို့ဆောင်ရေးကွင်းဆက် (Agricultural Supply Chain) ကို ခိုင်မာအားကောင်းစေခြင်းအားဖြင့် ပြည်တွင်းနှင့် ပြည်ပဈေးကွက်များတွင် အခွင့်အလမ်းသစ်များ ဖန်တီးပေးရန်နှင့် တောင်သူတို့၏ လူမှုစီးပွားဘဝ မြှင့်တင်ရေးအပြင် စိုက်ပျိုးရေးကဏ္ဍ၏ ရေရှည်တည်တံ့သော ဖွံ့ဖြိုးတိုးတက်မှုကို အထောက်အကူပြုရန် ကျွန်ုပ်တို့ ရည်မှန်းထားပါသည်။",
      image: "/images/home/rice.png",
    },
    vision: {
      tag: "ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်",
      title: "ဘယ်ကို ဦးတည်",
      titleAccent: "သွားနေသလဲ",
      description:
        "မြန်မာနိုင်ငံကို အရည်အသွေးမြင့် ဆန်၊ ပဲမျိုးစုံနှင့် အခြေခံစားသောက်ကုန် စိုက်ပျိုးရေးထွက်ကုန်များ၏ ယုံကြည်စိတ်ချရသော အရင်းအမြစ်တစ်ခုအဖြစ် ကမ္ဘာ့ဈေးကွက်တွင် ရပ်တည်နိုင်စေရန်နှင့် ကမ္ဘာလုံးဆိုင်ရာ အစားအစာဖူလုံရေးကို အထောက်အကူပြုနိုင်ရန် ရည်ရွယ်ပါသည်။ တစ်ချိန်တည်းတွင် တောင်သူလယ်သမားများနှင့် ကျေးလက်လူမှုအသိုင်းအဝိုင်းများ၏ ဘဝအရည်အသွေးကို မြှင့်တင်ပေးရန်လည်း ကျွန်ုပ်တို့ အစဉ်ကြိုးပမ်းလျက်ရှိပါသည်။",
      image: "/images/home/black_matpae.png",
    },
    contact: {
      title: "သင့်လိုအပ်ချက်များကို",
      titleAccent: "ဆွေးနွေးတိုင်ပင်ပါ",
      description:
        "ကျွန်ုပ်တို့၏ ထုတ်ကုန်များ၊ ဈေးနှုန်းများ သို့မဟုတ် အခြားမေးမြန်းလိုသည်များ ရှိပါက ကျွန်ုပ်တို့အဖွဲ့မှ အမြဲတမ်း အဆင်သင့် ဖြေကြားပေးပါမည်။",
      email: contactData.mm.info.email,
      phone1: contactData.mm.info.phone1,
      phone2: contactData.mm.info.phone2,
      address1: "အမှတ် (၄၂)၊ ရွှေဘုံသာလမ်း",
      address2: "ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ",
    },
  },
};
