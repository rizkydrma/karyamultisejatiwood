import { useEffect } from 'react';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import AboutUs from 'parts/AboutUs';
import React from 'react';

export default function About() {
  useEffect(() => {
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
