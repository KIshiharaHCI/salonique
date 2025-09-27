import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function Hero() {
  return (
    <section className="relative">
      <AnimatedSection>
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src="/images/illustration-hero.jpg"
            alt="Salonique Hero Illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href="mailto:info@salonique.de" 
              className="btn-primary inline-block text-2xl px-10 py-5 z-10 shadow-xl"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}