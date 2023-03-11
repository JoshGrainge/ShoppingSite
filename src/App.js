import './App.css';
import Bookmark from './components/Bookmark';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Bookmark />
    </div>
  );
}

export default App;
