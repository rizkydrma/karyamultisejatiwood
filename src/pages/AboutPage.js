import { useEffect } from 'react';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import AboutUs from 'parts/AboutUs';
import React from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
}
