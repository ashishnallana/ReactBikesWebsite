import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import GroupIcon from "@material-ui/icons/Group";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  const openNav = () => {
    navbar ? setNavbar(false) : setNavbar(true);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="nav">
      <button className="menu_btn" onClick={() => openNav()}>
        <MenuIcon fontSize="medium" />
      </button>
      <div
        className={navbar ? "nav_content nav_open" : "nav_content nav_close"}
      >
        <div className="nav_items">
          <ul>
            <Link to="/" style={linkStyle}>
              <HomeIcon />
              <li>Home</li>
            </Link>
            <Link to="/bikes" style={linkStyle}>
              <MotorcycleIcon />
              <li>Bikes</li>
            </Link>
            <Link to="/about" style={linkStyle}>
              <GroupIcon />
              <li>About Us</li>
            </Link>
            <Link to="/contact" style={linkStyle}>
              <ChatBubbleIcon />
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        <div
          className="nav_close_div"
          onClick={() => {
            setNavbar(false);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Nav;
