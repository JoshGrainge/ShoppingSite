import { useEffect, useState } from 'react';
import './App.css';
import Bookmark from './components/Bookmark';
import Header from './components/Header';
import Home from './components/Home';
import { getAllData } from './FakeStoreAPI';

function App() {
  const [shopItems, setShopItems] = useState();

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
    </div>
  );
}

export default App;
