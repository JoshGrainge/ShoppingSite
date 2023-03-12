import React, { useEffect, useState } from 'react';
import './Cart.css';
import { convertToUsd } from '../CurrencyFormatter';

// TODO make cart items be actual cart items not just all items

function Cart({ cartItems }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems == null) return;

    let tempTotal = 0;
    cartItems.forEach((item) => {
      console.log('Cart item price: ' + item.price);
      tempTotal += item.price;
    });

    setTotal(tempTotal);
  }, [cartItems]);

  return (
    <main>
      <div className="cart-layout-container">
        <div className="cart-container">
          <div className="item-heading">
            <h3 className="auto-margin">Items</h3>
            <h3 className="auto-margin">Price</h3>
            <h3 className="auto-margin">Qty</h3>
            <h3 className="auto-margin">Total</h3>
          </div>
          {cartItems &&
            cartItems.map((item) => {
              return (
                <div key={item.id} className="item-card">
                  <img
                    src={item.image}
                    alt="Clothing-thumbnail"
                    className="checkout-thumb"
                  />
                  <h2 className="auto-margin">{convertToUsd(item.price)}</h2>
                  <div className="increment-container">
                    <button className="circle-btn black bold big-font count-btn">
                      -
                    </button>
                    <h2 className="quantity-text">0</h2>
                    <button className="circle-btn black bold big-font count-btn">
                      +
                    </button>
                  </div>
                  <h2 className="auto-margin">{convertToUsd(item.price)}</h2>
                  <p className="item-title">{item.title}</p>
                </div>
              );
            })}
        </div>
        <div className="payment-container">
          <div className="payment-text">
            <p>Order Summary</p>
            <h3>Total:</h3>
            <h2 className="inline">{convertToUsd(total)}</h2>
            <small> USD</small>
          </div>
          <button className="black checkout-btn">Checkout</button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
