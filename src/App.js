import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Product from './components/Product';
import Features from './components/Features';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Ailex - AI-drevet juridisk assistent | Effektiviser din advokatpraksis</title>
        <meta name="description" content="Ailex er den førende AI-drevne juridiske assistent. Revolutionér din juridiske praksis med avanceret AI-teknologi, omfattende søgning og automatiseret dokumentgenerering." />
        <meta property="og:title" content="Ailex - AI-drevet juridisk assistent | Effektiviser din advokatpraksis" />
        <meta property="og:description" content="Revolutionér din juridiske praksis med Ailex. AI-drevet analyse, omfattende søgning og automatiseret dokumentgenerering." />
        <meta property="og:image" content="https://www.ailexapp.dk/ailex-og-image.jpg" />
        <meta property="og:url" content="https://www.ailexapp.dk" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ailex - AI-drevet juridisk assistent | Effektiviser din advokatpraksis" />
        <meta name="twitter:description" content="Revolutionér din juridiske praksis med Ailex. AI-drevet analyse, omfattende søgning og automatiseret dokumentgenerering." />
        <meta name="twitter:image" content="https://www.ailexapp.dk/ailex-twitter-image.jpg" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Clients />
        <Product />
        <Features />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;