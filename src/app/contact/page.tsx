"use client";

import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/contact/Hero";
import Map from "@/components/contact/Map";
import { contactData } from "@/constants/contact-data";
import { useLanguage } from "@/context/LanguageContext";

export default function page() {
  const { lang } = useLanguage();
  const currentContactData = contactData[lang];
  const isMyanmar = lang === "mm";

  return (
    <div className={isMyanmar ? "myanmar-content" : ""}>
      <Hero hero={currentContactData.hero} />
      <ContactForm
        info={currentContactData.info}
        form={currentContactData.form}
      />
      <Map map={currentContactData.map} />
    </div>
  );
}
