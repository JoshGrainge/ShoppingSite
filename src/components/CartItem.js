import { convertToUsd } from '../CurrencyFormatter';

function CartItem({ cartItem, changeCartItemQuantity, removeItemFromCart }) {
  return (
    <div key={cartItem.item.id} className="item-card">
      <img
        src={cartItem.item.image}
        alt="Clothing-thumbnail"
        className="checkout-thumb"
      />
      <h2 className="auto-margin">{convertToUsd(cartItem.item.price)}</h2>
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
}

export default CartItem;
