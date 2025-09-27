import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function MissedCallsSection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <AnimatedSection className="lg:w-1/2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Salonique hilft Beauty-Salons dabei, durchschnittlich 5-stellige Beträge pro Jahr an verlorenem Umsatz zurückzugewinnen
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Indem sichergestellt wird, dass jeder Anruf beantwortet wird. Keine verpassten Chancen mehr – jeder Anruf wird zu einer potenziellen Buchung.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md inline-block">
                <p className="text-2xl font-bold text-primary mb-2">Ø €15.000+</p>
                <p className="text-gray-600">Zusätzlicher Jahresumsatz durch Salonique</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/missed-calls.png"
                alt="Verpasste Anrufe auf einem Smartphone"
                width={400}
                height={600}
                className="w-full max-w-xs mx-auto h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}