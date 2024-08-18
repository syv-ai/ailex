import React, { useState } from 'react';
import { Search, Book, Scale, Zap, Users, Clock } from 'lucide-react';

const FeatureTab = ({ icon: Icon, title, description, isActive, onClick }) => (
  <div
    className={`cursor-pointer p-4 ${
      isActive ? 'bg-blue-100 border-l-4 border-blue-500' : 'hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center">
      <Icon className={`h-6 w-6 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
      <h3 className={`ml-3 text-lg font-medium ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>{title}</h3>
    </div>
    {isActive && <p className="mt-2 text-sm text-gray-500">{description}</p>}
  </div>
);

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Search,
      title: "Avanceret søgning",
      description: "Søg i Danmarks største database af love, domme og afgørelser med intelligent kontekstforståelse.",
      detail: "Vores avancerede søgefunktion bruger naturlig sprogbehandling til at forstå konteksten af din søgning. Dette betyder, at du kan stille komplekse juridiske spørgsmål i naturligt sprog og få relevante resultater fra vores omfattende database."
    },
    {
      icon: Book,
      title: "Automatiseret dokumentgenerering",
      description: "Generer juridiske dokumenter og kontrakter med høj præcision baseret på din input og gældende lovgivning.",
      detail: "Med vores automatiserede dokumentgenerering kan du oprette skræddersyede juridiske dokumenter på brøkdele af den tid, det normalt tager. Systemet tager højde for den seneste lovgivning og retspraksis for at sikre, at dine dokumenter altid er up-to-date og juridisk korrekte."
    },
    {
      icon: Scale,
      title: "Præcedens analyse",
      description: "Få indsigt i juridiske trends og mønstre baseret på historiske domme og afgørelser.",
      detail: "Vores præcedens analyse-værktøj giver dig mulighed for at se mønstre og tendenser i retspraksis over tid. Dette kan hjælpe dig med at forudsige sandsynlige udfald af sager og udvikle mere effektive juridiske strategier."
    },
    {
      icon: Zap,
      title: "AI-drevet juridisk analyse",
      description: "Ailex bruger avanceret AI til at analysere komplekse juridiske dokumenter og give indsigtsfulde anbefalinger.",
      detail: "Vores AI kan hurtigt gennemgå og analysere store mængder juridiske dokumenter, identificere nøglekoncepter og relationer, og give dig actionable insights. Dette sparer ikke kun tid, men kan også afdække nuancer og forbindelser, som ellers kunne være overset."
    },
    {
      icon: Users,
      title: "Samarbejdsværktøjer",
      description: "Forbedrer teamwork og videndeling inden for din juridiske praksis.",
      detail: "Ailex's samarbejdsværktøjer gør det nemt for teams at arbejde sammen på sager, dele indsigter og holde styr på projekter. Med realtids-opdateringer og versionskontrol kan du sikre, at alle altid arbejder med den seneste information."
    },
    {
      icon: Clock,
      title: "Tidsstyring og fakturering",
      description: "Automatiser tidssporing og faktureringprocesser for øget effektivitet.",
      detail: "Vores integrerede tidsstyrings- og faktureringssystem hjælper dig med at holde styr på den tid, du bruger på forskellige sager, og automatiserer fakturagenereringen. Dette sikrer nøjagtig fakturering og hjælper dig med at maksimere din produktivitet."
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Funktioner</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Alt hvad du behøver for at revolutionere din juridiske praksis
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Ailex tilbyder en suite af avancerede værktøjer designet til at øge effektiviteten og præcisionen i dit juridiske arbejde.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              {features.map((feature, index) => (
                <FeatureTab
                  key={index}
                  {...feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
            <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {features[activeFeature].title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {features[activeFeature].description}
                  </p>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Detaljer
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {features[activeFeature].detail}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;