import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import OurTimber from 'parts/OurTimber';
import MostProducts from 'parts/MostProducts';
import Footer from 'parts/Footer';

import landingPage from 'asset/data/landingPage.json';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <OurTimber />
      <MostProducts data={landingPage.products} />
      <Footer />
    </>
  );
}
