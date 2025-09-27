import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-background-light rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/images/illustration-friseur.png"
                  alt="Friseursalon Illustration"
                  width={192}
                  height={192}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 7L8 11L12 11L10 7ZM18 7L16 11L20 11L18 7ZM11.1 12.5C11.1 12.5 10.6 15.6 8.2 16.7C5.8 17.8 3.5 16.7 3.5 16.7C3.5 16.7 3.4 18.7 5.5 19.5C7.6 20.3 10.1 19.1 10.8 16.9C11.5 14.7 11.1 12.5 11.1 12.5ZM19.1 12.5C19.1 12.5 18.6 15.6 16.2 16.7C13.8 17.8 11.5 16.7 11.5 16.7C11.5 16.7 11.4 18.7 13.5 19.5C15.6 20.3 18.1 19.1 18.8 16.9C19.5 14.7 19.1 12.5 19.1 12.5Z" />
                </svg>
              </div>
              <blockquote className="text-lg md:text-xl text-gray-800 italic mb-6">
                „Seit wir Salonique nutzen, verpassen wir keine Kundenanfragen mehr. 
                Unser Kalender ist endlich immer aktuell – ohne Stress.&quot;
              </blockquote>
              <div className="text-gray-600">
                <p className="font-semibold">Maria Schmidt</p>
                <p>Inhaberin eines Friseursalons in Düsseldorf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}