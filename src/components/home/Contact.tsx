"use client";

import { ContactPageData } from "@/constants/contact-data";
import { HomeSectionData } from "@/constants/home-data";
import { useContactForm } from "@/hooks/useContactForm";

interface ContactProps {
  contact: HomeSectionData["contact"];
  form: ContactPageData["form"];
}

export default function Contact({ contact, form }: ContactProps) {
  const { formData, loading, status, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary/10 to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {contact.title}{" "}
              <span className="text-secondary">{contact.titleAccent}</span>
            </h2>
            <p className="text-gray-600 mb-6">{contact.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{contact.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="flex flex-col">
                  <span>{contact.phone1} ,</span>
                  <span>{contact.phone1}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5  mt-0.5 flex-shrink-0 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                <div className="flex flex-col">
                  <span>{contact.address1}</span>
                  <span>{contact.address2}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder={form.placeholders.name}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary outline-none transition bg-transparent"
                />
                <input
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  type="text"
                  placeholder={form.placeholders.phone}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary outline-none transition bg-transparent"
                />
              </div>
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder={form.placeholders.email}
                className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary outline-none transition bg-transparent"
              />
              <textarea
                value={formData.message}
                onChange={handleChange}
                name="message"
                rows={4}
                placeholder={form.placeholders.message}
                className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-secondary outline-none transition resize-none bg-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition shadow-md"
              >
                {form.submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
