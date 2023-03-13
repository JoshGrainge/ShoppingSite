import { useEffect, useState } from 'react';
import './App.css';
import Bookmark from './components/Bookmark';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import { getAllData } from './FakeStoreAPI';

function App() {
  // TODO make these an object instead of using multiple states
  const [shopItems, setShopItems] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [bookmarkItems, setBookmarkItems] = useState([]);

  useEffect(() => {
    async function getDataOnLoad() {
      const result = await getAllData();
      setShopItems(result);
    }
    getDataOnLoad();
  }, []);

  function addItemToCart(newItem) {
    setCartItems((prev) => {
      let hasItem = false;
      // Add to quantity when item already in card
      const mappedItems = prev.map((cartItem) => {
        if (cartItem.item.id === newItem.id) {
          hasItem = true;
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });

      if (hasItem) {
        return mappedItems;
        // Add new item to cart
      } else {
        return [
          ...prev,
          {
            item: newItem,
            quantity: 1,
          },
        ];
      }
    });
  }

  function changeCartItemQuantity(item, quantityChange) {
    setCartItems((prev) => {
      return prev.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantityChange,
          };
        }

        return cartItem;
      });
    });
  }

  function removeItemFromCart(item) {
    setCartItems((prev) =>
      prev.filter((cartItem) => cartItem.item.id !== item.id)
    );
  }

  function addItemToBookmark(item) {
    // Only bookmark an item once
    setBookmarkItems((prev) => {
      return prev.indexOf(item) === -1 ? [...prev, item] : prev;
    });
  }

  function removeFromBookmark(item) {
    setBookmarkItems((prev) =>
      prev.filter((bookmarkItem) => bookmarkItem !== item)
    );
  }

  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Products
        items={shopItems}
        addToCart={addItemToCart}
        addToBookmark={addItemToBookmark}
      />
      <Cart
        cartItems={cartItems}
        changeCartItemQuantity={changeCartItemQuantity}
        removeItemFromCart={removeItemFromCart}
      />
      <Bookmark
        bookmarkItems={bookmarkItems}
        addToCart={addItemToCart}
        removeFromBookmark={removeFromBookmark}
      /> */}
    </div>
  );
}

export default App;
