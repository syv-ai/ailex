import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="/api/placeholder/200/80"
              alt="Ailex logo"
            />
            <p className="text-gray-400 text-base">
              Revolutionerende AI-drevet juridisk teknologi, der hjælper advokater med at arbejde smartere og hurtigere.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>

            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Løsninger
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Juridisk research
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Dokumentanalyse
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Kontraktgenerering
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Sagsbehandling
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Priser
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Dokumentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Virksomhed
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Om os
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Partnere
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Jura
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Privatlivspolitik
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Vilkår
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Cookie politik
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Licensaftale
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {currentYear} Ailex ApS. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;