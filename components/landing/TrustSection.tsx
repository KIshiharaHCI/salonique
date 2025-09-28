import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const serviceTypes = [
  { icon: '/images/icon-friseur.png', label: 'Friseur' },
  { icon: '/images/icon-barber.png', label: 'Barber' },
  { icon: '/images/icon-nagelstudio.png', label: 'Nagelstudio' },
  { icon: '/images/icon-massagen.png', label: 'Massagen' },
  { icon: '/images/icon-haarentfernung.png', label: 'Haarentfernung' },
  { icon: '/images/icon-wellnessspa.png', label: 'Wellness- & Spa' },
  { icon: '/images/icon-hautpflege.png', label: 'Hautpflege' },
  { icon: '/images/icon-aesthetischebehandlung.png', label: 'Ästhetische Behandlungen' },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
            Kompatibel mit allen gängigen Beauty- & Wellness-Branchen, die Treatwell verwenden.
          </h2>
          <Image
            src="/images/treatwell-logo.svg"
            alt="Treatwell Logo"
            width={120}
            height={40}
            className="h-10 w-auto mx-auto"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {serviceTypes.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className="flex flex-col sm:flex-row items-center gap-3 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 hover:shadow-md transform hover:scale-[1.02] transition-all duration-200"
              >
              <Image
                src={service.icon}
                alt={`${service.label} Icon`}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <span className="text-gray-800 font-medium text-center sm:text-left text-sm sm:text-base">{service.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-lg">
            Exzellentes Feedback unserer Pilotkunden
          </p>
        </div>
      </div>
    </section>
  );
}