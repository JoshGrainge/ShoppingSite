import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="center">
      <div className="hero">
        <div className="hero-text">
          <h1>SUMMER SUN DEALS</h1>
          <p className="left-align ">
            Tons of hot sales for the hot weather. Get tops, bikinis, and shades
            for over 80% off
          </p>
          <Link to="ShoppingSite/products">
            <button className="">Shop now</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
