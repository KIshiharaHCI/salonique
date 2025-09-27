"use client";

import { useState } from 'react';

const faqs = [
  {
    question: 'Brauche ich technisches Vorwissen?',
    answer: 'Nein, wir kümmern uns um die technische Umsetzung. Die Software ist sofort einsatzbereit.',
  },
  {
    question: 'Funktioniert Salonique mit Treatwell?',
    answer: 'Ja, wir spiegeln Ihre Treatwell-Buchungen automatisch in Ihr Dashboard. Wenn ein Kunde eine Terminanfrage stellt, blocken wir den Termin. Sie können dann die Buchung bestätigen oder ablehnen, ohne Buchungskonflikte.',
  },
  {
    question: 'Kann ich meinen Google/Outlook Kalender verbinden?',
    answer: 'Ja, wir synchronisieren Ihren Google/Outlook Kalender mit Ihrem Dashboard.',
  },
  {
    question: 'Welche Kosten entstehen?',
    answer: 'Schreiben Sie uns eine E-Mail und wir erstellen Ihnen eine Angebot. Sie können die Software kostenlos testen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Haben Sie Fragen? Hier finden Sie die wichtigsten Antworten.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 transition-all duration-200 ${
                  openIndex === index
                    ? 'py-4 opacity-100'
                    : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}