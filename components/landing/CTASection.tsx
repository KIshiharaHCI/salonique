export default function CTASection() {
  return (
    <section id="kontakt" className="py-20 bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Nie wieder Anrufe oder Termine verpassen.
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Starten Sie noch heute mit Salonique und verwandeln Sie jeden Anruf in einen zufriedenen Kunden.
        </p>
        <a
          href="mailto:info@salonique.de"
          className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-accent hover:text-white hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        >
          Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}