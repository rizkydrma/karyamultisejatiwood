import Header from 'parts/Header';
import React from 'react';
import Button from 'element/Button';
import { motion } from 'framer-motion';
import ImageBarqode from 'asset/images/wa-barqode.png';

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="contact">
        <motion.div
          className="container-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="item column-4 row-1">
            <div className="card_contact">
              <i className="fas fa-map-marker-alt"></i>
              <div className="subtitle">
                Jalan Cipedes Tengah No. 194 Bandung, Jawa Barat 40162
              </div>
            </div>
          </div>
          <div className="item column-4 row-1">
            <div className="card_contact">
              <i className="fas fa-phone-alt"></i>
              <div className="subtitle">+62 22 2006541</div>
              <div className="subtitle">+62 22 2006597</div>
            </div>
          </div>
          <div className="item column-4 row-1">
            <div className="card_contact">
              <i className="fas fa-envelope"></i>
              <div className="subtitle">karyamultisejati @gmail.com</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="container-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="card item column-3 row-1 mt-10 d-flex justify-content-center align-items-center flex-column">
            <h2 className="subtitle">
              <i className="fab fa-whatsapp"></i> Scan Me (Whatsapp)
            </h2>
            <figure className="image-wrapper">
              <img
                src={ImageBarqode}
                alt="barqode whatsapp"
                className="img-cover"
              />
            </figure>
          </div>
          <div className="item column-9 row-1 mt-10 form">
            <div className="form_container">
              <div className="form-input">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="input" />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" className="input" />
              </div>
              <div className="form-input">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="input" />
              </div>
              <Button isLarge className="btn-green d-block">
                Send
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
