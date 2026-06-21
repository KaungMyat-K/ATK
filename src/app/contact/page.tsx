import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/contact/Hero";
import Map from "@/components/contact/Map";
import { contactData } from "@/constants/contact-data";

export default function page() {
  return (
    <>
      <Hero hero={contactData.hero} />
      <ContactForm info={contactData.info} />
      <Map map={contactData.map} />
    </>
  );
}
