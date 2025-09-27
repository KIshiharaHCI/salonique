import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const features = [
  {
    title: '24/7 Voice-Agent',
    description: 'Nimmt Anrufe entgegen, erkennt Wünsche und Kundendaten.',
    icon: '/images/faicon-ai.png',
    highlight: 'Nie wieder verpasste Anrufe',
  },
  {
    title: 'Kalender-Sync',
    description: 'Synchronisiert automatisch mit Google, Outlook und Treatwell.',
    icon: '/images/faicon-cloud.png',
    highlight: 'Immer aktuell',
  },
  {
    title: 'Einfach bestätigen & absagen',
    description: 'Per Klick Anfrage annehmen oder ablehnen – Kunde erhält sofort Nachricht.',
    icon: '/images/faicon-message.png',
    highlight: 'Schnelle Reaktion',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Alles in einem Dashboard
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Verwalten Sie alle Kundenanfragen zentral und behalten Sie den Überblick über Ihre Termine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} Icon`}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg shadow-xl overflow-hidden bg-white p-2">
            <Image
              src="/images/dashboard-mockup.png"
              alt="Salonique Dashboard Vorschau"
              width={1200}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Übersichtliches Dashboard – alle Termine auf einen Blick
          </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}