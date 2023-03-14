import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { convertToUsd } from '../CurrencyFormatter';

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
                <CartItem
                  cartItem={cartItem}
                  changeCartItemQuantity={changeCartItemQuantity}
                  removeItemFromCart={removeItemFromCart}
                />
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
