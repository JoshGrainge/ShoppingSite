import React, { useEffect, useState } from 'react';
import './Cart.css';
import { convertToUsd } from '../CurrencyFormatter';

// TODO make cart items be component not just all items

function Cart({ cartItems, changeCartItemQuantity, removeItemFromCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems == null) return;

    let tempTotal = 0;
    cartItems.forEach((cartItem) => {
      tempTotal += cartItem.item.price * cartItem.quantity;
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
            cartItems.map((cartItem) => {
              return (
                <div key={cartItem.item.id} className="item-card">
                  <img
                    src={cartItem.item.image}
                    alt="Clothing-thumbnail"
                    className="checkout-thumb"
                  />
                  <h2 className="auto-margin">
                    {convertToUsd(cartItem.item.price)}
                  </h2>
                  <div className="increment-container">
                    <button
                      className="circle-btn black bold big-font count-btn"
                      onClick={() => changeCartItemQuantity(cartItem.item, -1)}
                      disabled={cartItem.quantity <= 1}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <h2 className="quantity-text">{cartItem.quantity}</h2>
                    <button
                      className="circle-btn black bold big-font count-btn"
                      onClick={() => changeCartItemQuantity(cartItem.item, 1)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <h2 className="auto-margin">
                    {convertToUsd(cartItem.item.price * cartItem.quantity)}
                  </h2>
                  <p className="item-title">{cartItem.item.title}</p>
                  <button
                    className="circle-btn black close-btn"
                    onClick={() => removeItemFromCart(cartItem.item)}
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
              );
            })}
          {cartItems.length === 0 && (
            <div className="fixed-center cart-empty-message">
              <p>No items in cart</p>
            </div>
          )}
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
