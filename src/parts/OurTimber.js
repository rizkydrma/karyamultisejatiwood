import React from 'react';
import ImageAlbasia from 'asset/images/hero/albasia.png';
import ImageMeranti from 'asset/images/hero/meranti.png';

export default function OurTimber() {
  return (
    <section className="our_timber">
      <h1 className="text-center">Our Timber</h1>
      <div className="timber_container">
        <div className="timber">
          <img src={ImageAlbasia} alt="albasia" className="image-timber" />
          <div className="timber_desc">
            <h3>Albasia</h3>
            <p>
              Albasia wood is also known by another name Latin name Albizia
              Falcata. Albasia wood has been a constructor’s choice due to its
              excellent properties. It is a very light yellowish timber, lighter
              than most pine species. This wood can be ready to harvest in about
              3 to 4 years because it a fast-growing tree in the legume family.
            </p>
          </div>
        </div>
        <div className="timber">
          <img src={ImageMeranti} alt="meranti" className="image-timber" />
          <div className="timber_desc">
            <h3>Meranti</h3>
            <p>
              Meranti is found in all types of panel products such as core
              stock, sub flooring, and decorative panels. Solid wood is commonly
              used in cabinetry, trim, and millwork. It is also used as a face
              veneer and is very popular as the visible surface of interior
              doors. Dark red meranti is sometimes used as a decking material.
              All told, Meranti is a very important species in the industrial
              and commercial woodworking industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
