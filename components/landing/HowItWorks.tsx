import Image from 'next/image';

const steps = [
  {
    number: '1',
    title: 'Kunde ruft an',
    description: 'Voice-Agent nimmt auf',
    icon: '/images/faicon-phone.png',
    illustration: '/images/illustration-hero.jpg',
  },
  {
    number: '2',
    title: 'Anfrage erscheint im Dashboard',
    description: 'Salon bestätigt',
    icon: '/images/faicon-dashboard.png',
    illustration: '/images/illustration-payment.png',
  },
  {
    number: '3',
    title: 'Kunde erhält Bestätigung',
    description: 'SMS/E-Mail mit Details',
    icon: '/images/faicon-message.png',
    illustration: '/images/illustration-massage.png',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            So funktioniert&apos;s
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            In nur drei einfachen Schritten verwandeln Sie verpasste Anrufe in bestätigte Termine.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                <div className="bg-background-light rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <Image
                      src={step.icon}
                      alt={`${step.title} Icon`}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={step.illustration}
                    alt={`Schritt ${step.number} Illustration`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}