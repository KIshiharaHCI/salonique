import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function CalendarSyncSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <AnimatedSection className="lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/kalendar-sync.png"
                alt="Kalender Synchronisation mit Treatwell"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:w-1/2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Perfekte Kalender-Synchronisation mit Treatwell Connect
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Unsere Software bietet eine bidirektionale Synchronisation mit Treatwell Connect. 
                Das bedeutet: Ihr Voice-Agent kennt immer Ihre aktuellen Verfügbarkeiten und 
                kann Anrufern sofort die korrekten freien Zeitfenster nennen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-700">
                    <strong>Echtzeit-Updates:</strong> Änderungen in Treatwell werden sofort übernommen
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-700">
                    <strong>Zwei-Wege-Sync:</strong> Neue Buchungen werden automatisch zu Treatwell übertragen
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-700">
                    <strong>Keine Doppelbuchungen:</strong> Der Voice-Agent sieht alle Termine aus allen Kanälen
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}