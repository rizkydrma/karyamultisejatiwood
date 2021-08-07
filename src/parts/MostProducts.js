import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import Button from 'element/Button';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function MostProducts({ data }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <section className="most_products">
      <motion.h1
        className="text-left"
        animate={controls}
        ref={ref}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        Our Products
      </motion.h1>

      <div className="slider">
        <Swiper navigation pagination effect="coverflow">
          {data.map((product, i) => (
            <SwiperSlide key={product.id}>
              <Button
                type="link"
                href="/products/plywood"
                className="text-white"
              >
                <figure className="img-wrapper">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">{product.name}</div>
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container-grid">
        {data.map((product, i) => (
          <Button
            key={product.id}
            type="link"
            href={`/product/${product.id}`}
            className={`card_product item ${
              i === 0 ? 'column-6 row-2' : 'column-3 row-1'
            }`}
            hasShadow
          >
            <motion.figure
              className="img-wrapper"
              animate={controls}
              ref={ref}
              initial="hidden"
              transition={{ duration: 1, delay: i * 0.2 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="img-cover"
              />
            </motion.figure>
            <div className="meta-wrapper text-white">{product.name}</div>
          </Button>
        ))}
      </div>
    </section>
  );
}
