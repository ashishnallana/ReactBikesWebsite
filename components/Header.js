import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setscroll(true);
      } else setscroll(false);
    });
  }, []);

  const brandHead = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className={`header ${scroll && "nav_black"}`}>
      <div className="fk_div"></div>
      <Link to="/" style={brandHead}>
        <h1>rideontrek</h1>
      </Link>
    </div>
  );
}

export default Header;
