interface Address {
  addressLine1: string;
  addressLine2: string;
}

export interface ContactPageData {
  hero: {
    title: string;
    titleAccent: string;
    description: string;
  };
  info: {
    title1: string;
    title2: string;
    phone: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    facebookUrl: string;
  };
  map: {
    title1: string;
    title2: string;
    description: string;
    addressLine1: string;
    addressLine2: string;
    hours: string;
    hoursClosed: string;
    url: string;
  };
  form: {
    labels: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    submitButton: string;
  };
}

const address: { en: Address; mm: Address } = {
  en: {
    addressLine1: "No. 42, Shwe Bon Thar Street",
    addressLine2: "Yangon, Myanmar",
  },
  mm: {
    addressLine1: "အမှတ် (၄၂)၊ ရွှေဘုံသာလမ်း",
    addressLine2: "ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ",
  },
};

export const contactData: { en: ContactPageData; mm: ContactPageData } = {
  en: {
    hero: {
      title: "Contact",
      titleAccent: "Us",
      description:
        "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    },
    info: {
      ...address.en,
      title1: "Get in touch",
      title2: "Follow us",
      phone: "+95 9 123 456 789",
      email: "aungtakhon@gmail.com",
      facebookUrl: "https://facebook.com/yourpage",
    },
    map: {
      ...address.en,
      title1: "Find Us",
      title2: "Visit our location",
      description:
        "We're conveniently located in the heart of Yangon. Come visit us during business hours.",
      hours: "Mon - Sat, 9 AM – 6 PM",
      hoursClosed: "Closed on Sundays",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.947274092686!2d96.1523456!3d16.7793456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec3dfda32b47%3A0x3b2167d3bf8cc2a2!2sShwe%20Bon%20Thar%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1700000000000!5m2!1sen!2smm",
    },
    form: {
      labels: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone",
        message: "Message",
      },
      placeholders: {
        name: "Enter your name",
        email: "Enter your email",
        phone: "Enter Phone number",
        message: "Write your message here...",
      },
      submitButton: "Send Message",
    },
  },
  mm: {
    hero: {
      title: "ကျွန်ုပ်တို့ထံ",
      titleAccent: "ဆက်သွယ်ရန်",
      description:
        "မေးမြန်းလိုသည်များ ရှိပါသလား။ သင် သိရှိလိုသည်များကို စာတိုပေးပို့မေးမြန်းနိုင်ပြီး ကျွန်ုပ်တို့ဘက်မှ အမြန်ဆုံး ပြန်လည်ဖြေကြားပေးပါမည်။",
    },
    info: {
      ...address.mm,
      title1: "အသေးစိတ် မေးမြန်းရန်",
      title2: "ကျွန်ုပ်တို့နှင့် လက်တွဲရန်",
      phone: "+95 9 123 456 789",
      email: "aungtakhon@gmail.com",
      facebookUrl: "https://facebook.com/yourpage",
    },
    map: {
      ...address.mm,
      title1: "တည်နေရာ",
      title2: "ကျွန်ုပ်တို့ ရုံးခန်းသို့ လာရောက်လေ့လာပါ",
      description:
        "ကျွန်ုပ်တို့သည် ရန်ကုန်မြို့၏ ဗဟိုချက်မတွင် တည်ရှိပါသည်။ ရုံးဖွင့်ရက်များအတွင်း မည်သူမဆို လာရောက် ဆွေးနွေးနိုင်ပါသည်။",
      hours: "တနင်္လာ - စနွေ၊ နံနက် ၉ နာရီ – ညနေ ၆ နာရီ",
      hoursClosed: "တနင်္ဂနွေနေ့တိုင်း ပိတ်သည်",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.947274092686!2d96.1523456!3d16.7793456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec3dfda32b47%3A0x3b2167d3bf8cc2a2!2sShwe%20Bon%20Thar%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1700000000000!5m2!1sen!2smm",
    },
    form: {
      labels: {
        name: "အမည်",
        email: "အီးမေးလ် လိပ်စာ",
        phone: "ဖုန်းနံပါတ်",
        message: "ပေးပို့လိုသော မက်ဆေ့ခ်ျ",
      },
      placeholders: {
        name: "သင့်အမည်ကို ရိုက်ထည့်ပါ",
        email: "သင့်အီးမေးလ်ကို ရိုက်ထည့်ပါ",
        phone: "သင့်ဖုန်းနံပါတ်ကို ရိုက်ထည့်ပါ",
        message: "ဤနေရာတွင် အသေးစိတ် ရေးသားနိုင်ပါသည်...",
      },
      submitButton: "မက်ဆေ့ခ်ျ ပို့ရန်",
    },
  },
};
