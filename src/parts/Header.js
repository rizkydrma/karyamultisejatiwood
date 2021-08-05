import React from 'react';
import Button from 'element/Button';
import ImageLogoGreen from 'assets/images/logo_green.png';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar_expand">
        <div className="brand_logo">
          <img src={ImageLogoGreen} alt="logo hijau" className="image_logo" />
        </div>
        <ul className="navbar_nav">
          <li className="nav_item">
            <Button type="link" href="/about" className="nav_link">
              About Us
            </Button>
          </li>
          <li className="nav-item">
            <Button type="link" href="/products" className="nav_link">
              Products
            </Button>
          </li>
          <li className="nav-item">
            <Button type="link" href="/contact" className="nav_link">
              Contact Us
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
