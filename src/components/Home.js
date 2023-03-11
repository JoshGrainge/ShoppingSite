import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="center">
      <div className="hero">
        <img
          src="https://images.pexels.com/photos/1252982/pexels-photo-1252982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="fashionable_girl"
          id="hero-image"
        />
        <div className="hero-text">
          <h2 className="left-align ">Summer Sun Deals</h2>
          <p className="left-align ">
            Tons of hot sales for the hot weather. Get tops, bikinis, and shades
            for over 80% off
          </p>
          <button className="">Shop now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
