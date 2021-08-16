import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageHero from 'asset/images/about/labi.png';
import ImageArtistic from 'asset/images/about/artistic3.png';

import ImageIntegritas from 'asset/images/about/integritas.png';
import ImageKualitas from 'asset/images/about/kualitas.png';
import ImageKomitmen from 'asset/images/about/komitmen.png';
import ImageInovasi from 'asset/images/about/inovasi.png';

export default function AboutUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <div className="about_us">
      <div className="container-grid about">
        <motion.div
          className="item column-6 row-1"
          animate={controls}
          ref={ref}
          initial="hidden"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <figure className="img-wrapper">
            <img src={ImageHero} alt="labirint" className="img-cover" />
          </figure>
        </motion.div>

        <motion.div
          className="item item-2 column-6 row-1"
          animate={controls}
          ref={ref}
          initial="hidden"
          transition={{ duration: 1, delay: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <h1 className="title">About Us</h1>
          <p className="description">
            CV Karya Multi Sejati is a factory company for Timber, Barecore,
            Blockboard and Plywood. CV Karya Multi Sejati located in west Java
            Indonesia. Our Company as a wood manufacturer, Was built in 2000.
            The Company mainly produces as Falcata Albasia (sengon Indonesia)
            Wood. Capacity: 3000 M3/Month Bare core, Block board and Plywood.
          </p>
        </motion.div>

        <img src={ImageArtistic} alt="artistic" className="image-artistic" />
      </div>

      <div className="container-grid mission">
        <motion.div
          className="item column-12 row-1"
          animate={controls}
          ref={ref}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <h1 className="title text-center">Our Missions</h1>
        </motion.div>
        <div className="card_mission item column-6 row-1">
          <img
            src={ImageIntegritas}
            alt="gambar integritas"
            className="img-cover"
          />
          <h3 className="subtitle text-center">Integritas</h3>
          <p className="description text-center">
            Integritas berarti mengatakan kebenaran, menepati janji, dan
            memperlakukan orang lain dengan adil dan hormat. Integritas adalah
            salah satu aset kita yang paling berharga. Itu tidak boleh
            dikompromikan
          </p>
        </div>
        <div className="card_mission item column-6 row-1">
          <img
            src={ImageKualitas}
            alt="gambar integritas"
            className="img-cover"
          />
          <h3 className="subtitle text-center">Kualitas</h3>
          <p className="description text-center">
            Kualitas ditunjukan dalam banyak cara dengan menjual dan mendukung
            produk dan layanan yang menyenangkan pelanggan membangun lingkungan
            kerja. memberikan hasil keuangan yang memenuhi harapan investor.
          </p>
        </div>
        <div className="card_mission item column-6 row-1">
          <img
            src={ImageKomitmen}
            alt="gambar integritas"
            className="img-cover"
          />
          <h3 className="subtitle text-center">Komitmen</h3>
          <p className="description text-center">
            Komitmen itu penting dimana kami akan terus memberikan yang terbaik
            kepada pelanggan dan investor kami sepanjang waktu kesempatan kita
            untuk melayani hendaknya dipandang sebagai hak istimewa yang tidak
            boleh diabaikan begitu saja.
          </p>
        </div>
        <div className="card_mission item column-6 row-1">
          <img
            src={ImageInovasi}
            alt="gambar integritas"
            className="img-cover"
          />
          <h3 className="subtitle text-center">Inovasi</h3>
          <p className="description text-center">
            Inovasi berarti menciptakan, merancagan, mengembangkan produk dan
            layanan yang memiliki daya tarik tinggi di pasar dan memperkuat
            preferensi pelanggan untuk proyek Karya Multi Sejati Wood.
          </p>
        </div>

        <img
          src={ImageArtistic}
          alt="gambar artistic"
          className="image-artistic"
        />
      </div>
    </div>
  );
}
