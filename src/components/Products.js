import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductCard from './ProductCard';

function Products({ category, addToCart, addToBookmark }) {
  const [items, setItems] = useState([]);
  const [searchSettings, setSearchSettings] = useState({
    minPrice: 0,
    maxPrice: 0,
    minStars: 1,
  });

  useEffect(() => {
    getItems();
  }, [category]);

  // Get min item value and max item value when new items are displayed
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    let min = items[0].price,
      max = items[0].price;

    for (let i = 0; i < items.length; i++) {
      if (items[i].price < min) min = items[i].price;
      if (items[i].price > max) max = items[i].price;
    }

    setSearchSettings((prev) => {
      return {
        ...prev,
        minPrice: min,
        maxPrice: max,
      };
    });
  }, [items]);

  // Don't let min and max go out of bounds
  useEffect(() => {
    let newMinPrice = searchSettings.minPrice;
    let newMaxPrice = searchSettings.maxPrice;

    if (newMaxPrice < newMinPrice) newMaxPrice = newMinPrice;
    if (newMinPrice > newMaxPrice) newMinPrice = newMaxPrice;

    setSearchSettings((prev) => {
      return { ...prev, minPrice: newMinPrice, maxPrice: newMaxPrice };
    });
  }, [searchSettings.minPrice, searchSettings.maxPrice]);

  const getItems = async () => {
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products';
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
  };

  const filteredItems = items.filter((item) => {
    return (
      item.price >= searchSettings.minPrice &&
      item.price <= searchSettings.maxPrice &&
      Math.ceil(item.rating.rate) >= searchSettings.minStars
    );
  });

  const ratingRadios = [];
  for (let i = 1; i <= 5; i++) {
    ratingRadios.push(
      <label className="search-radio-item">
        <input
          type="radio"
          name="star-rating-min"
          value={i}
          onChange={(e) => {
            setSearchSettings((prev) => {
              return { ...prev, minStars: e.target.value };
            });
          }}
          className="search-radio"
        />
        {i}
      </label>
    );
  }

  return (
    <main className="products-layout">
      <div className="search-tab">
        <div className="options-container">
          <label>
            Price Min
            <input
              type="number"
              value={searchSettings.minPrice}
              onChange={(e) => {
                setSearchSettings((prev) => {
                  return {
                    ...prev,
                    minPrice: Math.max(
                      Math.min(e.target.value, prev.maxPrice),
                      0
                    ),
                  };
                });
              }}
              className="search-query-input"
            />
          </label>
          <label>
            Price Max
            <input
              type="number"
              value={searchSettings.maxPrice}
              onChange={(e) => {
                setSearchSettings((prev) => {
                  return {
                    ...prev,
                    maxPrice: Math.max(e.target.value, prev.minPrice),
                  };
                });
              }}
              className="search-query-input"
            />
          </label>

          <p>Min Star Rating:</p>
          <div className="star-rating">{ratingRadios}</div>
        </div>
      </div>
      <div className="products-container">
        {items &&
          filteredItems.map((item) => {
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
        {filteredItems.length === 0 && (
          <div className="no-items">
            <p>
              No items found
              <br />
              Try broadening search parameters or refreshing page
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Products;
