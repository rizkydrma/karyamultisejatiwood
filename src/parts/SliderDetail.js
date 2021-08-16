import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { motion } from 'framer-motion';

import 'asset/scss/swiper.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation]);

export default function SliderDetail({ data }) {
  const [image, setImage] = useState(data.images[1]);

  const changeImage = (image) => {
    setImage(image);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="big-image"
      >
        <figure className="image-wrapper">
          <img src={image} alt="" className="img-cover" />
        </figure>
      </motion.div>
      <Swiper navigation spaceBetween={10} slidesPerView="3">
        <div className="container-grid ">
          {data.images.map((picture, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.5 }}
                className="item column-4 row-1 small-image"
              >
                <figure
                  className="image-wrapper"
                  onClick={() => changeImage(picture)}
                >
                  <img src={picture} alt="" className="img-cover thumbnail" />
                </figure>
              </motion.div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
