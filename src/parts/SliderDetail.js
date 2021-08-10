import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'asset/scss/swiper.scss';
import 'swiper/swiper.scss';

import Image from 'asset/images/hero/barecore_2.jpg';
import Image2 from 'asset/images/hero/barecore_1.jpg';

SwiperCore.use([Navigation]);

export default function SliderDetail() {
  const [image, setImage] = useState(Image);

  const changeImage = (image) => {
    setImage(image);
  };
  return (
    <>
      <div className="big-image">
        <figure className="image-wrapper">
          <img src={image} alt="" className="img-cover" />
        </figure>
      </div>
      <Swiper navigation spaceBetween={10} slidesPerView="3">
        <div className="container-grid small-image">
          <SwiperSlide>
            <div className="item column-4 row-1">
              <figure
                className="image-wrapper"
                onClick={() => changeImage(Image)}
              >
                <img src={Image} alt="" className="img-cover thumbnail" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item column-4 row-1">
              <figure
                className="image-wrapper"
                onClick={() => changeImage(Image2)}
              >
                <img src={Image2} alt="" className="img-cover thumbnail" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item column-4 row-1">
              <figure
                className="image-wrapper"
                onClick={() => changeImage(Image)}
              >
                <img src={Image} alt="" className="img-cover thumbnail" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item column-4 row-1">
              <figure
                className="image-wrapper"
                onClick={() => changeImage(Image2)}
              >
                <img src={Image2} alt="" className="img-cover thumbnail" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item column-4 row-1">
              <figure
                className="image-wrapper"
                onClick={() => changeImage(Image)}
              >
                <img src={Image} alt="" className="img-cover thumbnail" />
              </figure>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
