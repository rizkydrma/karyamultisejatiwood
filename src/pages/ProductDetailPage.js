import Footer from 'parts/Footer';
import Header from 'parts/Header';
import SliderDetail from 'parts/SliderDetail';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from 'asset/data/products.json';
import { motion } from 'framer-motion';

export default function ProductDetailPage() {
  const [accordion, setAccordion] = useState(true);
  const { id } = useParams();
  const dataProducts = products.products;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);

  const onClick = () => {
    setAccordion(!accordion);
  };

  const Product = dataProducts.find(
    (product) => Number(product.id) === Number(id),
  );
  const spec = Product.spec;
  return (
    <>
      <Header />
      <section className="product_detail">
        <div className="container-grid container-product-detail">
          <div className="item column-5 row-1">
            <SliderDetail data={Product} />
          </div>
          <div className="item column-7 row-1 px-5">
            <motion.h1
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="title sm-center mt-3"
            >
              {Product.name}
            </motion.h1>
            <div className="accordion mt-3 sm-center">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className={`btn-accordion ${accordion ? 'active' : ''}`}
                onClick={() => onClick()}
              >
                Description
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
                className={`btn-accordion ${!accordion ? 'active' : ''}`}
                onClick={() => onClick()}
              >
                Spesification
              </motion.button>
            </div>
            {accordion && (
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="description"
              >
                {Product.description}
              </motion.p>
            )}

            {!accordion && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="spec"
              >
                <div className="description w-600 ">1. Composition</div>
                <div className="ml-1">
                  {spec.compositionCore && (
                    <div>
                      <h5 className="description">Core</h5>
                      <ul>
                        {spec.compositionCore.woodSpecies && (
                          <li className="description">
                            <span className="w-500">Wood Species :</span>
                            {spec.compositionCore.woodSpecies}
                          </li>
                        )}
                        {spec.compositionCore.composition && (
                          <li className="description">
                            <span className="w-500">Composition :</span>
                            {spec.compositionCore.composition}
                          </li>
                        )}
                        {spec.compositionCore.sanding && (
                          <li className="description">
                            <span className="w-500">Sanding :</span>
                            {spec.compositionCore.sanding}
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {spec.compositionFaceBack && (
                    <div>
                      <h5 className="description">Faceback</h5>
                      <ul>
                        {spec.compositionFaceBack.woodSpecies && (
                          <li className="description">
                            <span className="w-500">Wood Species :</span>
                            {spec.compositionFaceBack.woodSpecies}
                          </li>
                        )}
                        {spec.compositionFaceBack.composition && (
                          <li className="description">
                            <span className="w-500">Composition :</span>
                            {spec.compositionFaceBack.composition}
                          </li>
                        )}
                        {spec.compositionFaceBack.sanding && (
                          <li className="description">
                            <span className="w-500">Sanding :</span>
                            {spec.compositionFaceBack.sanding}
                          </li>
                        )}
                        {spec.compositionFaceBack.totalPly && (
                          <li className="description">
                            <span className="w-500">Total Ply :</span>
                            {spec.compositionFaceBack.totalPly}
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                <div
                  className="description w-600"
                  style={{ marginTop: '15px' }}
                >
                  2. Weight : <span className="w-400">{spec.weight}</span>
                </div>
                <div className="description" style={{ marginTop: '15px' }}>
                  <span className="w-600">3. Dimension</span>
                </div>
                <div className="ml-1">
                  <div className="d-flex gap">
                    <div>
                      {spec.dimension.length && (
                        <div className="description">
                          <span className="w-600">Length : </span>
                          {spec.dimension.length}
                        </div>
                      )}
                      {spec.dimension.with && (
                        <div className="description">
                          <span className="w-600">With : </span>
                          {spec.dimension.with}
                        </div>
                      )}
                    </div>
                    <div>
                      {spec.dimension.thicknes && (
                        <div className="description">
                          <span className="w-600">Thicknes : </span>
                          {spec.dimension.thicknes}
                        </div>
                      )}
                      {spec.dimension.tolerance && (
                        <div className="description">
                          <span className="w-600">Tolerance : </span>
                          {spec.dimension.tolerance}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="description w-600 "
                  style={{ marginTop: '15px' }}
                >
                  4. Glue : <span className="w-400"> {spec.glue}</span>
                </div>
                <div
                  className="description w-600 "
                  style={{ marginTop: '15px' }}
                >
                  5. Grade :
                  {spec.grade.map((grade, i) => (
                    <ul className="ml-1" key={i}>
                      <li className="w-400">{grade}</li>
                    </ul>
                  ))}
                </div>
                <div
                  className="description w-600 "
                  style={{ marginTop: '15px' }}
                >
                  6. Payment :
                  {spec.payment.map((payment, i) => (
                    <ul className="ml-1" key={i}>
                      <li className="w-400">{payment}</li>
                    </ul>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
