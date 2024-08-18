import React from 'react';
import { Zap, Search, Book, Scale } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative p-6 bg-white rounded-lg shadow-md">
    <dt>
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">{description}</dd>
  </div>
);

const Product = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-drevet juridisk analyse",
      description: "Ailex bruger avanceret AI til at analysere komplekse juridiske dokumenter og give indsigtsfulde anbefalinger."
    },
    {
      icon: Search,
      title: "Omfattende søgning",
      description: "Søg i Danmarks største database af love, domme og afgørelser med intelligent kontekstforståelse."
    },
    {
      icon: Book,
      title: "Automatiseret dokumentgenerering",
      description: "Generer juridiske dokumenter og kontrakter med høj præcision baseret på din input og gældende lovgivning."
    },
    {
      icon: Scale,
      title: "Præcedens analyse",
      description: "Få indsigt i juridiske trends og mønstre baseret på historiske domme og afgørelser."
    }
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* SVG and other content remain the same */}
        
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Revolutionerende juridisk teknologi
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </dl>
        </div>
      </div>
      
      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-0">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Få mere ud af din juridiske praksis
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Med Ailex kan du fokusere på det, der virkelig betyder noget - at yde den bedste service til dine klienter. 
              Lad vores AI håndtere de tidskrævende researchtasks og dokumentforberedelser.
            </p>
            
            <dl className="mt-10 space-y-10">
              {[
                {
                  name: 'Tidsbesparelse',
                  description: 'Reducer tiden brugt på research og dokumentforberedelse med op til 70%.',
                },
                {
                  name: 'Øget præcision',
                  description: 'Minimer menneskelige fejl og øg nøjagtigheden af dit juridiske arbejde.',
                },
                {
                  name: 'Konkurrencefordel',
                  description: 'Stå stærkere i markedet med cutting-edge AI-teknologi i din værktøjskasse.',
                },
              ].map((item) => (
                <div key={item.name} className="relative">
                  <dt>
                    <div className="absolute h-5 w-5 flex items-center justify-center rounded-md bg-blue-500 text-white">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            {/* SVG and image content remain the same */}
            <img
              className="relative mx-auto"
              width="490"
              src="/api/placeholder/490/350"
              alt="Ailex interface mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;