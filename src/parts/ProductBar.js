import React, { useState } from 'react';
import Button from 'element/Button';
import categories from 'asset/data/categories.json';

export default function ProductBar({ selectItem }) {
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState('all');

  const onClick = () => {
    setDropdown(!dropdown);
  };

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
          {categories.map((category, i) => (
            <li
              className={`product_item ${
                category.slug === active ? 'active' : ''
              }`}
              key={i}
            >
              <Button
                onClick={() => {
                  selectItem(category);
                  setActive(category.slug);
                  setDropdown(false);
                }}
                className="product_link"
              >
                <i className="fas fa-tree"></i>
                {category.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
