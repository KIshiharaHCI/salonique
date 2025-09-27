import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const benefits = [
  {
    icon: '/images/faicon-phone.png',
    title: 'Bessere Erreichbarkeit',
    description: 'Ihr Voice-Agent geht immer ran – auch wenn niemand im Salon Zeit hat.',
  },
  {
    icon: '/images/faicon-calendar.png',
    title: 'Mehr Umsatz durch Termine',
    description: 'Kein Kunde geht verloren – jede Anfrage wird erfasst und in Buchungen verwandelt.',
  },
  {
    icon: '/images/faicon-dashboard.png',
    title: 'Stressfreie Terminverwaltung',
    description: 'Alles in einem Dashboard: Bestätigen oder ablehnen mit nur einem Klick.',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-background-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div
              key={index}
              className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-primary/10 rounded-full p-4">
                  <Image
                    src={benefit.icon}
                    alt={`${benefit.title} Icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}