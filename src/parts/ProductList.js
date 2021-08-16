import React, { useState } from 'react';
import ProductBar from './ProductBar';
import Button from 'element/Button';
import { motion } from 'framer-motion';

export default function ProductList({ data }) {
  const [products, setProducts] = useState(data);
  const [param, setParam] = useState('All Item');
  const handleViewProducts = (param) => {
    if (param.slug === 'all') {
      setProducts(data);
    } else {
      setProducts(data.filter((product) => product.category === param.slug));
    }
    setParam(param.name);
  };

  return (
    <section className="container-grid product_list mt-5">
      <div className="item column-3 row-1">
        <ProductBar selectItem={(param) => handleViewProducts(param)} />
      </div>
      <div className="item column-9 row-1">
        <h1 className="bread-crumb border-bottom">{param}</h1>
        <div className="container-grid container-product">
          {products.map((product, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
              className="item column-4 row-1 card card_product"
              key={product.id}
            >
              <figure className="image-wrapper">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="img-cover"
                />
              </figure>
              <div className="meta-wrapper">
                <h2 className="subtitle">{product.name}</h2>
                <p className="description">{product.description}</p>
                <Button
                  type="link"
                  href={`/product/${product.id}`}
                  className="btn btn-green d-block"
                  isSmall
                >
                  <i className="fas fa-info-circle"></i>
                  Detail
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
