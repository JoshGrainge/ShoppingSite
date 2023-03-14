import { useEffect, useState, useMemo } from 'react';
import './App.css';
import Bookmark from './components/Bookmark';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import { getAllData, getAllCategories } from './FakeStoreAPI';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  // TODO make these an object instead of using multiple states
  const [cartItems, setCartItems] = useState([]);
  const [bookmarkItems, setBookmarkItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getDataOnLoad() {
      const categoriesResult = await getAllCategories();
      setCategories(categoriesResult);
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

  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <div className="App">
      <Header categories={categories} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              category={query.get('category')}
              addToCart={addItemToCart}
              addToBookmark={addItemToBookmark}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              changeCartItemQuantity={changeCartItemQuantity}
              removeItemFromCart={removeItemFromCart}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmark
              bookmarkItems={bookmarkItems}
              addToCart={addItemToCart}
              removeFromBookmark={removeFromBookmark}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
