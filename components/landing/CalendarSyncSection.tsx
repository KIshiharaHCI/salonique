import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function CalendarSyncSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Perfekte Kalender-Synchronisation mit Treatwell Connect
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Unsere Software bietet eine bidirektionale Synchronisation mit Treatwell Connect. 
                Das bedeutet: Ihr Voice-Agent kennt immer Ihre aktuellen Verfügbarkeiten und 
                kann Anrufern sofort die korrekten freien Zeitfenster nennen.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative mb-12">
              <Image
                src="/images/kalendar-sync.png"
                alt="Kalender Synchronisation mit Treatwell"
                width={1200}
                height={600}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Echtzeit-Updates</h3>
                <p className="text-gray-700">Änderungen in Treatwell werden sofort übernommen</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zwei-Wege-Sync</h3>
                <p className="text-gray-700">Neue Buchungen werden automatisch zu Treatwell übertragen</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Keine Doppelbuchungen</h3>
                <p className="text-gray-700">Der Voice-Agent sieht alle Termine aus allen Kanälen</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}