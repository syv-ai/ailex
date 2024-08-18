import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-blue-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Klar til at revolutionere din juridiske praksis?</span>
          <span className="block text-blue-200">Start din gratis prøveperiode i dag.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              Prøv Ailex gratis
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500"
            >
              Book en demo
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center">
        <p className="mt-4 text-lg leading-6 text-blue-200">
          Tilslut dig de førende advokatfirmaer, der allerede bruger Ailex til at effektivisere deres arbejde og levere bedre resultater for deres klienter.
        </p>
        <div className="mt-5 flex justify-center space-x-6">
          <p className="flex items-center text-blue-200">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            14 dages gratis prøveperiode
          </p>
          <p className="flex items-center text-blue-200">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Ingen kreditkort påkrævet
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;