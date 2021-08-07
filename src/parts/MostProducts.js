import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import Button from 'element/Button';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function MostProducts({ data }) {
  return (
    <section className="most_products">
      <h1 className="text-left">Our Products</h1>

      <div className="slider">
        <Swiper navigation pagination effect="coverflow">
          {data.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="item">
                <figure className="img-wrapper">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href="/products/plywood"
                    className="text-white"
                  >
                    {product.name}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container-grid">
        {data.map((product, i) => (
          <Button
            key={product.id}
            type="link"
            href="/products/plywood"
            className={`card_product item ${
              i === 0 ? 'column-6 row-2' : 'column-3 row-1'
            }`}
            hasShadow
          >
            <figure className="img-wrapper">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper text-white">{product.name}</div>
          </Button>
        ))}
      </div>
    </section>
  );
}
