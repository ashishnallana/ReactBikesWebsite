import React from "react";
import "./HomeCard.css";

function HomeCard({ title, content, img, color }) {
  const cardStyle = {
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: `${color}`,
    backgroundPosition: "center",
  };

  return (
    <div className="home_card" style={cardStyle}>
      <div className="card_ext_bg"></div>
      <div className="card_content">
        <h3>{title}</h3>
        <br />
        <p>{content}</p>
      </div>
    </div>
  );
}

export default HomeCard;
