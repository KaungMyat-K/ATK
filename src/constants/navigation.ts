export interface NavLink {
  name: string;
  href: string;
}

// Footer အတွက် လိုအပ်သော Interface
export interface FooterLabels {
  aboutText: string;
  quickLinksTitle: string;
  contactTitle: string;
  followTitle: string;
  followDescription: string;
  copyrightText: string;
}

export interface NavLabels {
  title: string;
  subtitle: string;
  links: NavLink[];
  footer: FooterLabels;
}

export const navData: { en: NavLabels; mm: NavLabels } = {
  en: {
    title: "Aung Takhon",
    subtitle: "Paddy & Black Gram Wholesale Center",
    links: [
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    footer: {
      aboutText:
        "Premium quality paddy, black gram, and agricultural products wholesale center in Myanmar.",
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact Us",
      followTitle: "Follow Us",
      followDescription: "Stay connected with us for updates and news.",
      copyrightText: "Aung Takhon. All rights reserved.",
    },
  },
  mm: {
    title: "အောင်သပြေ",
    subtitle: "စပါးနှင့် မတ်ပဲ လက္ကားဗဟိုဌာန",
    links: [
      { name: "ပင်မစာမျက်နှာ", href: "/" },
      { name: "ထုတ်ကုန်များ", href: "/products" },
      { name: "ကျွန်ုပ်တို့အကြောင်း", href: "/about" },
      { name: "ဆက်သွယ်ရန်", href: "/contact" },
    ],
    footer: {
      aboutText:
        "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ အရည်အသွေးမြင့် စပါး၊ မတ်ပဲနှင့် စိုက်ပျိုးရေးထုတ်ကုန်များကို ယုံကြည်စိတ်ချစွာ ဖြန့်ချိရာ အဓိက လက္ကားဗဟိုဌာနဖြစ်သည်။",
      quickLinksTitle: "အမြန်လင့်ခ်များ",
      contactTitle: "ဆက်သွယ်ရန်",
      followTitle: "ကျွန်ုပ်တို့နှင့် လက်တွဲရန်",
      followDescription:
        "နောက်ဆုံးရသတင်းများနှင့် အချက်အလက်များကို အမြဲမပြတ် သိရှိနိုင်ရန် ချိတ်ဆက်ထားပါ။",
      copyrightText: "အောင်သပြေ။ မူပိုင်ခွင့် အားလုံးရရှိပြီးဖြစ်သည်။",
    },
  },
};
