
import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Industries from '../components/Industries';
import Advantages from '../components/Advantages';
import GlobalReach from '../components/GlobalReach';
import Sustainability from '../components/Sustainability';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <Industries />
      <Advantages />
      <GlobalReach />
      <Sustainability />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
