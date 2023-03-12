import React, { useState } from 'react';
import { convertToUsd } from '../CurrencyFormatter';
import Rating from './Rating';

function ProductCard({ name, price, image, rating, ratingCount }) {
  const [showButtons, setShowButton] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setShowButton(false);
      }}
    >
      <img src={image} alt="product-preview" className="product-thumb" />
      {showButtons && (
        <button className="black add-cart-btn">Add to Cart</button>
      )}
      {showButtons && (
        <button className="black circle-btn bookmark-btn">
          <i className="fa-solid fa-bookmark"></i>
        </button>
      )}
      <div className="product-text">
        <p className="no-margin">{name}</p>
        <h2 className="no-margin">{convertToUsd(price)}</h2>
        <Rating rating={rating} ratingCount={ratingCount} />
      </div>
    </div>
  );
}

export default ProductCard;
