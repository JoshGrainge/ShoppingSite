import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';

function Products({ items, addToCart, addToBookmark }) {
  return (
    <main className="products-layout">
      <div className="search-tab">
        <div className="options-container">
          <label>
            Name:
            <input />
          </label>
          <label>
            Name:
            <input />
          </label>
          <label>
            Name:
            <input />
          </label>
          <input type="range"></input>
        </div>
      </div>
      <div className="products-container">
        {items &&
          items.map((item) => {
            return (
              <ProductCard
                key={item.id}
                name={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating.rate}
                ratingCount={item.rating.count}
                addToCart={() => addToCart(item)}
                addToBookmark={() => addToBookmark(item)}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Products;
