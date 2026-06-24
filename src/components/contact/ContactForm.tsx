"use client";

import { contactData, ContactPageData } from "@/constants/contact-data";
import { useContactForm } from "@/hooks/useContactForm";

interface ContactInfoProps {
  info: ContactPageData["info"];
  form: ContactPageData["form"];
}

export default function ContactForm({ info, form }: ContactInfoProps) {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="bg-primary pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-0 justify-center">
          {/* LEFT SIDE: Contact Information Card  */}
          <div className="md:w-1/3 lg:w-[32%] flex items-center">
            <div className="bg-gray-100 rounded-2xl md:rounded-l-2xl md:rounded-r-none shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-100 w-full">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {info.title1}
                </h3>
                <div className="w-16 h-0.5 bg-secondary mt-3 sm:mt-4"></div>
              </div>

              <div className="space-y-6 sm:space-y-7 md:space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="mt-1">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 text-base sm:text-lg font-medium">
                      {info.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="mt-1">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm sm:text-base">
                      {info.addressLine1}
                    </p>
                    <p className="text-gray-800 text-sm sm:text-base">
                      {info.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="mt-1">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm sm:text-base">
                      {info.email}
                    </p>
                  </div>
                </div>

                <div className="pt-4 sm:pt-5 md:pt-6">
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                    {info.title2}
                  </p>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={info.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary  hover:text-secondary hover:scale-110 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form  */}
          <div className="md:w-2/3 lg:w-[58%]">
            <div className="bg-secondary rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-32 border border-gray-100 min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] h-auto flex flex-col">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 md:space-y-6 flex-grow"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm"
                  >
                    {form.labels.name}
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 text-sm sm:text-base"
                    placeholder={form.placeholders.name}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm"
                  >
                    {form.labels.email}
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 text-sm sm:text-base"
                    placeholder={form.placeholders.email}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm"
                  >
                    {form.labels.subject}
                  </label>
                  <input
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 text-sm sm:text-base"
                    placeholder={form.placeholders.subject}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm"
                  >
                    {form.labels.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-200 resize-y text-sm sm:text-base"
                    placeholder={form.placeholders.message}
                  ></textarea>
                </div>

                <div className="pt-1 sm:pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-primary text-secondary py-2 sm:py-2.5 md:py-3 px-6 sm:px-8 md:px-10 rounded-full font-semibold hover:bg-opacity-90 transition duration-200 text-sm sm:text-base"
                  >
                    {form.submitButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
