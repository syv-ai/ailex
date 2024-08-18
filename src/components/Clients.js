import React from 'react';
import { Users } from 'lucide-react';

const ClientLogo = ({ name }) => (
  <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50">
    <img
      className="max-h-12"
      src={`/api/placeholder/200/80`}
      alt={`${name} logo`}
    />
  </div>
);

const ClientTestimonial = ({ name, role, quote }) => (
  <div className="relative">
    <dt>
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        <Users className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{name}</p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">
      {quote}
      <p className="mt-1 text-sm text-gray-400">{role}</p>
    </dd>
  </div>
);

const Clients = () => {
  const clients = [
    { name: 'Advokatfirma A' },
    { name: 'Advokatfirma B' },
    { name: 'Advokatfirma C' },
    { name: 'Advokatfirma D' },
  ];

  const testimonials = [
    { 
      name: 'Mette Jensen', 
      role: 'Partner, Advokatfirma A',
      quote: 'Ailex har revolutioneret vores arbejdsgang og sparet os utallige timer.'
    },
    { 
      name: 'Lars Nielsen', 
      role: 'Senioradvokatfuldmægtig, Advokatfirma B',
      quote: 'Med Ailex kan vi tilbyde vores klienter hurtigere og mere præcise svar.'
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Betroet af førende advokatfirmaer
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          {clients.map((client, index) => (
            <ClientLogo key={index} name={client.name} />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Hvad vores klienter siger
          </h2>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            {testimonials.map((testimonial, index) => (
              <ClientTestimonial key={index} {...testimonial} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Clients;