import React from "react";
import "./BuyBikeCard.css";
import CancelIcon from "@material-ui/icons/Cancel";

const style = {
  position: "fixed",
  padding: "15px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "white",
};

const margin = {
  margin: "10px 0",
};

const BuyBikeCard = ({ shopCardDetails, closeCard }) => {
  return (
    <div className="shopping_card" style={style}>
      <CancelIcon
        onClick={() => {
          closeCard();
        }}
        className="close_btn"
        fontSize="medium"
      />
      <img src={shopCardDetails[0]} alt={shopCardDetails[1]} />
      <h2>{shopCardDetails[1]}</h2>
      <h4 style={margin}>{shopCardDetails[2]}</h4>
      <p style={margin}>{shopCardDetails[3]}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href={shopCardDetails[4]}
        className="buy_btn"
      >
        BUY
      </a>
      <div className="emt_crd"></div>
    </div>
  );
};

export default BuyBikeCard;
