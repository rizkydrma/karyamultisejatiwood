import React, { useEffect, useState } from 'react';
import Button from 'element/Button';

export default function ProductBar() {
  const [dropdown, setDropdown] = useState(false);

  const onClick = () => {
    setDropdown(!dropdown);
  };
  useEffect(() => {});
  return (
    <div className="product_bar">
      <Button
        className="product_dropdown btn-green d-block"
        isLarge
        onClick={() => onClick()}
      >
        Categories <i className="fas fa-chevron-down"></i>
      </Button>
      <div className={`product_items ${dropdown ? 'open' : ''}`}>
        <ul>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              All Items
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              Barecore
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              Blockboard
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              Polyester Blockboard
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              Plywood
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              Polyester Plywood
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              Phenolic Film Plywood
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              Medium Density Board (MDB)
            </Button>
          </li>
          <li className="product_item">
            <Button type="link" href="/product">
              <i className="fas fa-tree"></i>
              High Moisture Resistance (HMR)
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
