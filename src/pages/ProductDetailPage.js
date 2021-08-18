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
      <section className="product_detail mt-3">
        <div className="container-grid container-product-detail">
          <div className="item column-5 row-1">
            <SliderDetail data={Product} />
          </div>
          <div className="item column-7 row-1 px-5">
            <motion.h1
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="title sm-center"
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
                className="description-2 mt-3 text-justify"
              >
                {Product.description}
              </motion.p>
            )}

            {!accordion && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="spec mt-3"
              >
                <div className="description w-600 ">1. Composition</div>
                <div className="ml-1">
                  {spec.compositionCore && (
                    <div>
                      <h5 className="description">Core</h5>
                      <table className="table-specification">
                        <tbody>
                          {spec.compositionCore.woodSpecies && (
                            <tr>
                              <td className="description w-600">
                                Wood Species
                              </td>
                              <td className="description ">
                                : {spec.compositionCore.woodSpecies}
                              </td>
                            </tr>
                          )}

                          {spec.compositionCore.composition && (
                            <tr>
                              <td className="description w-600">Composition</td>
                              <td className="description">
                                : {spec.compositionCore.composition}
                              </td>
                            </tr>
                          )}
                          {spec.compositionCore.sanding && (
                            <tr>
                              <td className="description w-600">Sanding</td>
                              <td className="description">
                                : {spec.compositionCore.sanding}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {spec.compositionFaceBack && (
                    <div>
                      <h5 className="description">Faceback</h5>
                      <table className="table-specification">
                        <tbody>
                          {spec.compositionFaceBack.woodSpecies && (
                            <tr className="description">
                              <td className="w-600">Wood Species</td>
                              <td>: {spec.compositionFaceBack.woodSpecies}</td>
                            </tr>
                          )}

                          {spec.compositionFaceBack.composition && (
                            <tr className="description">
                              <td className="w-600">Composition</td>
                              <td>: {spec.compositionFaceBack.composition}</td>
                            </tr>
                          )}
                          {spec.compositionFaceBack.sanding && (
                            <tr className="description">
                              <td className="w-600">Sanding</td>
                              <td>: {spec.compositionFaceBack.sanding}</td>
                            </tr>
                          )}

                          {spec.compositionFaceBack.totalPly && (
                            <tr className="description">
                              <td className="w-600">Total Ply</td>
                              <td>: {spec.compositionFaceBack.totalPly}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div
                  className="description w-600"
                  style={{ marginTop: '15px' }}
                >
                  <table className="table-specification">
                    <tbody>
                      <tr className="description">
                        <td>2. Weight </td>
                        <td>
                          <span className="w-400 d-flex">
                            :
                            {spec.weight.map((w, i) => (
                              <div key={i}>{` ` + w},</div>
                            ))}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="description" style={{ marginTop: '15px' }}>
                  <span className="w-600">3. Dimension</span>
                </div>
                <div className="ml-1">
                  <div className="d-flex gap">
                    <table className="table-specification">
                      <tbody>
                        <tr className="description">
                          {spec.dimension.length && (
                            <>
                              <td className="w-600">Length</td>
                              <td>: {spec.dimension.length}</td>
                            </>
                          )}
                          {spec.dimension.with && (
                            <>
                              <td className="w-600 pl-1">With</td>
                              <td>: {spec.dimension.with}</td>
                            </>
                          )}
                        </tr>
                        <tr className="description">
                          {spec.dimension.thicknes && (
                            <>
                              <td className="w-600">Thicknes</td>
                              <td>: {spec.dimension.thicknes}</td>
                            </>
                          )}
                          {spec.dimension.tolerance && (
                            <>
                              <td className="w-600 pl-1">Tolerance</td>
                              <td>: {spec.dimension.tolerance}</td>
                            </>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <table className="table-specification">
                  <tbody>
                    <tr className="description">
                      <td className="w-600">4. Glue</td>
                      <td>: {spec.glue}</td>
                    </tr>
                    <tr className="description">
                      <td className="w-600">5. Grade</td>
                      <td>
                        :
                        {spec.grade.map((grade, i) => (
                          <div key={i} className="d-inline">
                            {` ` + grade}
                            <br />
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr className="description">
                      <td className="w-600">6. Payment</td>
                      <td>
                        :
                        {spec.payment.map((payment, i) => (
                          <div key={i} className="d-inline">
                            {` ` + payment} <br />
                          </div>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
