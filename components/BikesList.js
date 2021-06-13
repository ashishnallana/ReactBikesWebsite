import React, { useState } from "react";
import "./BikesList.css";
import BuyBikeCard from "./BuyBikeCard";

function BikesList({ avail_bikes }) {
  const [click, setclick] = useState(false);
  const [shopcard, setshopcard] = useState([]);
  const [close, setclose] = useState(false);

  const closeCard = () => {
    setclose(false);
    setclick(false);
  };

  return (
    <div className="bikes_list">
      {avail_bikes.map((bike) => (
        <div
          className="bike_card"
          onClick={() => {
            setshopcard([
              bike.img,
              bike.bikeName,
              bike.price,
              bike.bikeInfo,
              bike.buy,
            ]);
            setclick(true);
            setclose(true);
          }}
        >
          <img src={bike.img} alt={bike.bikeName} />
          <h3>{bike.bikeName}</h3>
          <p>{bike.price}</p>
        </div>
      ))}
      <div>
        {click ? (
          <BuyBikeCard closeCard={closeCard} shopCardDetails={shopcard} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BikesList;
