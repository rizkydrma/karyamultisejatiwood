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
          <p className="description-2">
            CV Karya Multi Sejati is a factory company for Timber, Barecore,
            Blockboard and Plywood. CV Karya Multi Sejati located in west Java
            Indonesia. Our Company as a wood manufacturer, Was built in 2000.
            The Company mainly produces as Falcata Albasia (sengon Indonesia)
            Wood. Capacity: 3000 M3/Month Barecore, Block board and Plywood.
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
          <h3 className="subtitle text-center">Integrity</h3>
          <p className="description text-center">
            Integrity means telling the truth, keeping promises, and treating
            others with fairness and respect. Integrity is one of our most
            valuable assets. It cannot be compromised.
          </p>
        </div>
        <div className="card_mission item column-6 row-1">
          <img
            src={ImageKualitas}
            alt="gambar integritas"
            className="img-cover"
          />
          <h3 className="subtitle text-center">Quality</h3>
          <p className="description text-center">
            Quality is demonstrated in many ways by selling and supporting
            products and services that delight customers build the environment
            work. provide financial results that meet investors' expectations.
          </p>
        </div>
        <div className="card_mission item column-6 row-1">
          <img
            src={ImageKomitmen}
            alt="gambar integritas"
            className="img-cover"
          />
          <h3 className="subtitle text-center">Commitment</h3>
          <p className="description text-center">
            Commitment is important where we will continue to provide the best
            to our customers and investors all the time our opportunity to serve
            should be viewed as a privilege that does not can simply be ignored.
          </p>
        </div>
        <div className="card_mission item column-6 row-1">
          <img
            src={ImageInovasi}
            alt="gambar integritas"
            className="img-cover"
          />
          <h3 className="subtitle text-center">Innovation</h3>
          <p className="description text-center">
            Innovation means creating, designing, developing products and
            services that have high attractiveness in the market and strengthen
            customer preferences for the Karya Multi Sejati Wood project.
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
