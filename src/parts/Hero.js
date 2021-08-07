import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import { motion } from 'framer-motion';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/swiper.scss';

import ImageBareCore1 from 'asset/images/hero/barecore_1.jpg';
import ImageBareCore2 from 'asset/images/hero/barecore_2.jpg';
import ImageBareCore3 from 'asset/images/hero/barecore_3.jpg';
import Artistic from 'asset/images/artistic.png';
import Artistic2 from 'asset/images/artistic2.png';
import Button from 'element/Button';
import BrandName from 'element/BrandName';

SwiperCore.use([Navigation, Pagination, EffectFade]);

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero_left_content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="tagline">
          <BrandName />, Wood Products and Outdoor Furniture Manufacturer
        </h2>
        <h5 className="slug">
          Barecore, Blockboard, Polyester Blockboard, Film Polywood and many
          more. We are based in Jl Cipedes Tengah No. 194 Bandung, West Java.
        </h5>
        <Button
          href="/products"
          className="btn-green"
          hasShadow
          isLarge
          type="link"
        >
          Discover
        </Button>
        <img src={Artistic} alt="artistic" className="image-artistic" />
        <img src={Artistic2} alt="artistic" className="image-artistic2" />
      </motion.div>

      <motion.div
        className="hero_right_content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Swiper navigation pagination effect="fade" speed={500}>
          <SwiperSlide>
            <img src={ImageBareCore1} alt="" className="hero_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageBareCore2} alt="" className="hero_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageBareCore3} alt="" className="hero_image" />
          </SwiperSlide>
        </Swiper>
        <div className="rectangle-border"></div>
      </motion.div>
    </section>
  );
}