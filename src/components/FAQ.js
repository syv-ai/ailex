import React, { useState, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = React.memo(({ question, answer, isOpen, toggleOpen, index }) => (
  <div className="border-b border-gray-200">
    <h3>
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => toggleOpen(index)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
        )}
      </button>
    </h3>
    {isOpen && (
      <div className="pb-5">
        <p className="text-base text-gray-500">{answer}</p>
      </div>
    )}
  </div>
));

FAQItem.displayName = 'FAQItem';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = useCallback((index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  const faqs = [
    {
      question: "Hvordan kommer jeg i gang med Ailex?",
      answer: "Det er nemt at komme i gang med Ailex. Først opretter du en konto på vores hjemmeside. Derefter får du adgang til en gratis prøveperiode, hvor du kan udforske alle funktioner. Vores supportteam står klar til at hjælpe dig med at komme i gang og besvare eventuelle spørgsmål du måtte have."
    },
    {
      question: "Er mine data sikre hos Ailex?",
      answer: "Ja, vi tager datasikkerhed meget alvorligt. Vi bruger industristandardkryptering for al dataoverførsel og -lagring. Vores systemer er ISO 27001 certificerede og GDPR-kompatible. Desuden har vi implementeret strenge adgangskontroller og regelmæssige sikkerhedsrevisioner for at sikre, at dine data forbliver beskyttede."
    },
    {
      question: "Kan Ailex integreres med andre juridiske værktøjer?",
      answer: "Ja, Ailex tilbyder API'er og integrationer med mange populære juridiske værktøjer og praksisstyringssystemer. Vi har direkte integrationer med systemer som Clio, LexisNexis og Thomson Reuters. Hvis du har brug for en specifik integration, der ikke allerede er tilgængelig, kan vores udviklingsteam arbejde på at skabe en skræddersyet løsning til dig."
    },
    {
      question: "Hvordan opdateres Ailex's database?",
      answer: "Vores database opdateres dagligt med de nyeste love, domme og afgørelser fra officielle kilder. Vi har automatiserede systemer, der konstant overvåger og indekserer nye juridiske dokumenter. Derudover har vi et team af juridiske eksperter, der gennemgår og validerer opdateringerne for at sikre nøjagtigheden og relevansen af vores data."
    },
    {
      question: "Tilbyder Ailex support og træning?",
      answer: "Absolut! Vi tilbyder omfattende support og træning for at sikre, at du får mest muligt ud af Ailex. Dette inkluderer live online træningssessioner, detaljeret dokumentation, videovejledninger og en dedikeret kundesupportlinje. Vi tilbyder også skræddersyede træningsprogrammer for større organisationer."
    },
    {
      question: "Hvad koster Ailex?",
      answer: "Ailex tilbyder fleksible prisplaner tilpasset forskellige behov og organisationsstørrelser. Vi har planer for enkeltpersoner, små firmaer og store virksomheder. Alle planer starter med en gratis prøveperiode. For detaljerede prisoplysninger anbefaler vi, at du kontakter vores salgsteam, som kan give dig et skræddersyet tilbud baseret på dine specifikke behov."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Ofte stillede spørgsmål
        </h2>
        <dl className="space-y-6 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={toggleQuestion}
              index={index}
            />
          ))}
        </dl>
        <div className="mt-8 text-center">
          <p className="text-base text-gray-600">
            Har du ikke fundet svar på dit spørgsmål?
          </p>
          <a
            href="/contact"
            className="mt-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Kontakt os for flere spørgsmål"
          >
            Kontakt os
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;