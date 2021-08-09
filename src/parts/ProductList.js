import React from 'react';
import ProductBar from './ProductBar';

export default function ProductList() {
  return (
    <section className="container-grid product_list">
      <div className="item column-3 row-1">
        <ProductBar />
      </div>
      <div className="item column-9 row-1">
        <h1>hai</h1>
      </div>
    </section>
  );
}
