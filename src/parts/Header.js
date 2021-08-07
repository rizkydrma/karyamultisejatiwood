import React, { useState } from 'react';
import Button from 'element/Button';
import ImageLogoGreen from 'asset/images/logo_green.png';

export default function Header() {
  const [drawer, setDrawer] = useState(false);

  const onClick = () => {
    document.body.classList.toggle('hidden');
    setDrawer(!drawer);
  };

  return (
    <nav className="navbar">
      <div className="navbar_expand">
        <Button href="/" className={`brand_logo ${drawer ? 'open' : 'close'}`}>
          <img src={ImageLogoGreen} alt="logo hijau" className="image_logo" />
          <div className="brand_name">
            karyamulti<span>sejatiwood.com</span>
          </div>
        </Button>
        <div className="navbar_toggler" id="drawer" onClick={() => onClick()}>
          <div className={`bar ${drawer ? 'close' : ''}`}></div>
        </div>
      </div>
      <ul className={`navbar_nav ${drawer ? 'collapse' : ''}`}>
        <li className="nav_item">
          <Button type="link" href="/about" className="nav_link">
            About Us
          </Button>
        </li>
        <li className="nav_item">
          <Button type="link" href="/products" className="nav_link">
            Products
          </Button>
        </li>
        <li className="nav_item">
          <Button type="link" href="/contact" className="nav_link">
            Contact Us
          </Button>
        </li>
      </ul>
      <div className="animate"></div>
    </nav>
  );
}
