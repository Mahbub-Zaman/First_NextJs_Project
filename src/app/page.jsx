import React from 'react';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Products from './components/home/Products';
import Reviews from './components/home/Reviews';
import CTA from './components/home/CTA';
import FAQ from './components/home/FAQ';
import WhyUs from './components/home/WhyUS';
import Blog from './components/home/Blog';

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <WhyUs />
      <Reviews />
      <CTA />
      <FAQ />
      <Blog />
    </div>
  );
};

export default page;