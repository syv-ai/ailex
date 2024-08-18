import React from 'react';
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