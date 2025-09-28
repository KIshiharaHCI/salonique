import AnimatedSection from '@/components/AnimatedSection';

const missedMoments = [
  "Während einer Behandlung mit Kund:innen",
  "Während einer Beratung oder beim Empfang",
  "In der Mittagspause oder unterwegs",
  "Beim Reinigen und Desinfizieren nach Terminen",
  "Während der Vorbereitung von Geräten oder Produkten",
  "Bei der Abrechnung oder an der Kasse",
  "Während Team-Meetings oder Schulungen",
  "In Ruhezeiten, in denen Kund:innen nicht gestört werden sollen"
];

export default function MissedMomentsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Im Salon gibt es viele Momente, in denen das Telefon nicht beantwortet werden kann, und genau dann gehen potenzielle Buchungen verloren:
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {missedMoments.map((moment, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-start gap-2 sm:gap-3 bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-700 text-sm sm:text-base">{moment}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8}>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900">
              👉 Jeder dieser Momente bedeutet: ein verpasster Anruf, eine verpasste Chance auf Umsatz.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}