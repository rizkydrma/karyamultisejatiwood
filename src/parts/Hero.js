import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import ImageBareCore1 from 'asset/images/hero/barecore_1.jpg';
import ImageBareCore2 from 'asset/images/hero/barecore_2.jpg';
import Artistic from 'asset/images/artistic.png';
import Artistic2 from 'asset/images/artistic2.png';
import Button from 'element/Button';
import BrandName from 'element/BrandName';

SwiperCore.use([Navigation, Pagination]);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_left_content">
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
      </div>

      <div className="hero_right_content">
        <Swiper navigation pagination>
          <SwiperSlide>
            <img src={ImageBareCore1} alt="" className="hero_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageBareCore2} alt="" className="hero_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageBareCore1} alt="" className="hero_image" />
          </SwiperSlide>
        </Swiper>
        <div className="rectangle-border"></div>
      </div>
    </section>
  );
}
