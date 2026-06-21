export interface ContactPageData {
  hero: {
    title: string;
    titleAccent: string;
    description: string;
  };
  info: {
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
}

export const contactData: ContactPageData = {
  hero: {
    title: "Contact",
    titleAccent: "Us",
    description:
      "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  },

  info: {
    phone: "+95 9 123 456 789",
    email: "aungtakhon@gmail.com",
    addressLine1: "No. 42, Shwe Bon Thar Street",
    addressLine2: "Yangon, Myanmar",
    facebookUrl: "https://facebook.com/yourpage",
  },

  map: {
    title1: "Find Us",
    title2: "Visit our location",
    description:
      "We're conveniently located in the heart of Yangon. Come visit us during business hours.",
    addressLine1: "No. 42, Shwe Bon Thar Street",
    addressLine2: "Yangon, Myanmar",
    hours: "Mon - Sat, 9 AM – 6 PM",
    hoursClosed: "Closed on Sundays",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.947274092686!2d96.1523456!3d16.7793456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec3dfda32b47%3A0x3b2167d3bf8cc2a2!2sShwe%20Bon%20Thar%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1700000000000!5m2!1sen!2smm",
  },
};
