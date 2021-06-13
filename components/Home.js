import React from "react";
import "./Home.css";
import HomeBottom from "./HomeBottom";
import ImageGallery from "./ImageGallery";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home1">
        <div className="bike_info">
          <p>
            <span className="brand_text">rideontrek</span>
          </p>
          <h1>2019 TREK MADONE SLR</h1>
          <p className="bike_lines">
            Madone is the ultimate superbike—it’s fast, light, smooth, and
            designed to give you every advantage in speed and handling.
          </p>

          <Link to="/bikes">
            <button id="browse_bikes">BROWSE MORE BIKES</button>
          </Link>
        </div>
      </div>

      <div className="empty"></div>
      <ImageGallery />

      <div className="empty"></div>
      <HomeBottom />
    </div>
  );
}

export default Home;
