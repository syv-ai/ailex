import React from 'react';
import { Shield, Lock, Key, FileCheck, Eye, Server } from 'lucide-react';

const SecurityFeature = ({ icon: Icon, title, description }) => (
  <div className="relative">
    <dt>
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">{description}</dd>
  </div>
);

const CertificationBadge = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
    <Icon className="h-12 w-12 text-blue-500 mb-4" />
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
  </div>
);

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-end kryptering",
      description: "Al data krypteres både under overførsel og i hvile, ved hjælp af de nyeste krypteringsalgoritmer."
    },
    {
      icon: Key,
      title: "Multifaktor-autentificering",
      description: "Obligatorisk multifaktor-autentificering for alle brugerkonti for at forhindre uautoriseret adgang."
    },
    {
      icon: Eye,
      title: "Avanceret adgangskontrol",
      description: "Detaljerede adgangskontroller giver dig mulighed for at styre præcist, hvem der har adgang til hvilke data og funktioner."
    },
    {
      icon: Server,
      title: "Sikker dataopbevaring",
      description: "Alle data opbevares i sikre, redundante datacentre i EU, der overholder GDPR og andre relevante databeskyttelseslove."
    }
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sikkerhed i verdensklasse
            </h2>
            <p className="mt-3 mx-auto text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Vi tager datasikkerhed meget alvorligt. Ailex er bygget fra grunden med sikkerhed som topprioritet for at beskytte dine og dine klienters følsomme oplysninger.
            </p>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {securityFeatures.map((feature, index) => (
              <SecurityFeature key={index} {...feature} />
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl text-center mb-8">
            Certificeringer og compliance
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            <CertificationBadge title="ISO 27001" icon={FileCheck} />
            <CertificationBadge title="GDPR Compliant" icon={Shield} />
            <CertificationBadge title="SOC 2 Type II" icon={FileCheck} />
            <CertificationBadge title="HIPAA Compliant" icon={Shield} />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl mb-4">
            Vores forpligtelse til din sikkerhed
          </h3>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">
            Vi gennemgår og opdaterer konstant vores sikkerhedsforanstaltninger for at sikre, at vi altid er på forkant med de nyeste trusler. Din tillid er vores højeste prioritet.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Læs vores sikkerhedshvidbog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;