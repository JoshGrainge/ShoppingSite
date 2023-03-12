import { useEffect, useState } from 'react';
import './App.css';
import Bookmark from './components/Bookmark';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import { getAllData } from './FakeStoreAPI';

function App() {
  const [shopItems, setShopItems] = useState();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getDataOnLoad() {
      const result = await getAllData();
      setShopItems(result);
    }
    getDataOnLoad();
  }, []);

  console.log(shopItems);

  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* {shopItems && <Bookmark bookmarkItems={shopItems} />} */}
      {/* <Products items={shopItems} /> */}
      <Cart cartItems={shopItems} />
    </div>
  );
}

export default App;
