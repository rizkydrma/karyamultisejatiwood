import Footer from 'parts/Footer';
import Header from 'parts/Header';
import SliderDetail from 'parts/SliderDetail';
import React from 'react';
import { useParams } from 'react-router-dom';
import products from 'asset/data/products.json';

export default function ProductDetailPage() {
  const { id } = useParams();
  const dataProducts = products.products;

  const Product = dataProducts.find(
    (product) => Number(product.id) === Number(id),
  );
  return (
    <>
      <Header />
      <section className="product_detail">
        <div className="container-grid container-product-detail">
          <div className="item column-5 row-1">
            <SliderDetail />
          </div>
          <div className="item column-7 row-1">
            <h1 className="title">{Product.name}</h1>
            <p className="description">{Product.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
