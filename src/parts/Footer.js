import React from 'react';
import ImageLogoGreen from 'asset/images/logo_green.png';
import Button from 'element/Button';
import Barqode from 'asset/images/wa-barqode.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_company">
        <Button href="/" className="brand_logo">
          <img src={ImageLogoGreen} alt="logo hijau" className="image_logo" />
          <div className="brand_name">
            karyamulti<span>sejatiwood.com</span>
          </div>
        </Button>
        <p>with a humble beginning as a furniture subcontract manufacturer.</p>
        <p className="w-600">Scan Me (Whatsapp)</p>
        <img src={Barqode} alt="whatsapp" className="barqode" />
      </div>
      <div className="footer_product">
        <h2 className="w-500 my-1">Products</h2>
        <ul>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/1">
              Barecore
            </Button>
          </li>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/2">
              Blockboard
            </Button>
          </li>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/3">
              Polyester Blockboard
            </Button>
          </li>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/5">
              Plywood
            </Button>
          </li>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/6">
              Polyester Plywood
            </Button>
          </li>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/7">
              Phenolic Film Plywood
            </Button>
          </li>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/8">
              Medium Density Fiberboard (MDF)
            </Button>
          </li>
          <li className="item_product">
            <Button type="link" className="text-white" href="/product/9">
              High Moisture Resistance (HMR)
            </Button>
          </li>
        </ul>
      </div>
      <div className="footer_contact">
        <h2 className="w-500 my-1">Contact</h2>
        <Button
          type="link"
          isExternal
          target="_blank"
          className="text-white map"
          href="https://www.google.com/maps/place/Jl.+Cipedes+Tengah+No.194,+Cipedes,+Kec.+Sukajadi,+Kota+Bandung,+Jawa+Barat+40163/@-6.8796785,107.5904699,20z/data=!4m13!1m7!3m6!1s0x2e68e68e67292699:0x752d2f2ac6e8b407!2sJl.+Cipedes+Tengah+No.194,+Cipedes,+Kec.+Sukajadi,+Kota+Bandung,+Jawa+Barat+40163!3b1!8m2!3d-6.8796972!4d107.5906217!3m4!1s0x2e68e68e67292699:0x752d2f2ac6e8b407!8m2!3d-6.8796972!4d107.5906217"
        >
          <i className="fas fa-map-marker-alt"></i>
          Jalan Cipedes Tengah No. 194 Bandung, Jawa Barat 40162
        </Button>
        <div className="telp my-1">
          <i className="fas fa-phone-alt"></i>
          <a className="text-white" href="tel:+62222006541">
            +62 22 2006541
          </a>
        </div>
        <div className="telp my-1">
          <i className="fas fa-phone-alt"></i>
          <a className="text-white" href="tel:++62222006597">
            +62 22 2006597
          </a>
        </div>
        <div className="telp my-1">
          <i className="fab fa-whatsapp"></i>
          <a className="text-white" href="https://wa.me/6287777116685">
            +62 8777 7116 685
          </a>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          karyamultisejati@gmail.com
        </div>
      </div>
    </footer>
  );
}
