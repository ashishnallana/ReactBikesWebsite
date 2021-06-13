import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="footer">
      <div className="footer_row">
        <ul>
          <Link to="/" style={linkStyle}>
            <li>Home</li>
          </Link>
          <Link to="/bikes" style={linkStyle}>
            <li>Bikes</li>
          </Link>
          <Link to="/about" style={linkStyle}>
            <li>About Us</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="footer_cols">
        <div className="footer_col">
          <h3>Our recent bikes</h3>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/electric-mountain-bikes/e-caliber/e-caliber-9-9-xx1-axs/p/34710/?colorCode=bluedark_blue">
            E-Caliber 9.9 XX1 AXS
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/supercaliber/supercaliber-9-8-gx-axs/p/35195/?colorCode=red_black">
            Supercaliber 9.8 GX AXS
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/slash/slash-9-8-gx-axs/p/35192/?colorCode=grey">
            Slash 9.8 GX AXS
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/%C3%A9monda/%C3%A9monda-slr/%C3%A9monda-slr-6-etap/p/35022/?colorCode=bluedark_red">
            Émonda SLR 6 eTap
          </a>
        </div>
        <div className="footer_col">
          <h3>Electric bikes</h3>
          <a href="https://www.trekbikes.com/us/en_US/bikes/hybrid-bikes/electric-hybrid-bikes/verve/verve-2/p/28299/?colorCode=blue">
            Verve+ 2
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/electric-mountain-bikes/e-caliber/e-caliber-9-6/p/34353/?colorCode=greydark_black">
            E-Caliber 9.6
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/domane/domane-hp/domane-hp/p/30931/?colorCode=grey_black">
            Domane+ HP
          </a>
        </div>
        <div className="footer_col">
          <h3>Mountain bikes</h3>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/marlin/marlin-5/p/34587/?colorCode=greenvisibility_teal">
            Marlin 5
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/downhill-mountain-bikes/session/session-9-x01/p/34625/?colorCode=bluedark_blue">
            Session 9 X01
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/roscoe/roscoe-8/p/28487/?colorCode=bluedark_grey">
            Roscoe 8
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/remedy/remedy-9-8/p/33067/?colorCode=greendark_black">
            Remedy 9.8
          </a>
        </div>
        <div className="footer_col">
          <h3>Buy equipments</h3>
          <a href="https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-tires/c/E208/">
            Tyres
          </a>
          <a href="https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-wheels/c/E209/">
            Wheels
          </a>
          <a href="https://www.trekbikes.com/us/en_US/helmets/">Helmets</a>
          <a href="https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-brakes-levers/c/E201/">
            Brakes &amp; Levers
          </a>
          <a href="https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-pedals/c/E204/">
            Pedals
          </a>
        </div>
      </div>
      <br />
      <br />
      <p id="footer_cp_text">&copy;rideontrek.com &nbsp; 2021</p>
    </div>
  );
}

export default Footer;
