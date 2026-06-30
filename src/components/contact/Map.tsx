import { ContactPageData } from "@/constants/contact-data";

interface ContactMapProps {
  map: ContactPageData["map"];
}

export default function Map({ map }: ContactMapProps) {
  return (
    <section className="bg-primary py-12 sm:py-16 md:py-20">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="md:w-1/2 flex items-center order-1 md:order-2">
          <div className="bg-white p-6 sm:p-8 w-full rounded-2xl md:rounded-l-2xl md:rounded-r-none">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {map.title2}
            </h3>
            <div className="w-16 h-1 bg-secondary rounded-full mb-5"></div>

            <div className="space-y-4">
              <p className="text-gray-600 text-sm">{map.description}</p>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    {map.addressLine1}, {map.addressLine2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    {map.hours}
                  </p>
                  <p className="text-gray-500 text-sm">{map.hoursClosed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 order-2 md:order-1">
          <div className="w-full h-64 md:h-[340px] lg:h-[380px] rounded-2xl md:rounded-r-2xl md:rounded-l-none border border-gray-100 overflow-hidden bg-gray-200 relative">
            <iframe
              src={map.url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aung Takhon Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
