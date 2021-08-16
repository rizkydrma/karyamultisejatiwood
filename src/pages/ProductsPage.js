import React, { useEffect } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import ProductList from 'parts/ProductList';

import products from 'asset/data/products.json';

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);
  return (
    <>
      <Header />
      <ProductList data={products.products} />
      <Footer />
    </>
  );
}
