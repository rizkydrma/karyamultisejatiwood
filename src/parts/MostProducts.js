import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import Button from 'element/Button';
import SkeletonCard from 'skeletons/SkeletonCard';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

export default function MostProducts({ products }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }

    setTimeout(async () => {
      setData(products);
    }, 1500);
  }, [controls, inView, products]);
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
        <Swiper
          navigation
          pagination
          effect="coverflow"
          loop={true}
          autoplay={true}
        >
          {data &&
            data.map((product, i) => (
              <SwiperSlide key={product.id}>
                <Button
                  type="link"
                  href={`/product/${product.id}`}
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
          {!data &&
            [1].map((data, i) => (
              <SkeletonCard key={i} className="item column-4 row-1" />
            ))}
        </Swiper>
      </div>

      <div className="container-grid most-container">
        {data &&
          data.map((product, i) => (
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

        {!data &&
          [1, 2, 3].map((data, i) => (
            <SkeletonCard key={i} className="item column-4 row-1" />
          ))}
      </div>
    </section>
  );
}
