import React, { useState } from "react";
import "./Bikes.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import BikesList from "./BikesList";
import NoResults from "./NoResults";
import CancelIcon from "@material-ui/icons/Cancel";

const avail_bikes = [];
avail_bikes[0] = {
  bikeName: "E-Caliber 9.9 XTR",
  price: "$11,999.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/ECaliber99XTRUS_21_34708_D_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "E-Caliber 9.9 XTR is a light, fun, and fast carbon e-MTB. It’s built to ride like a traditional cross country bike, and it even has the same race-worthy suspension tech as Supercaliber. The sleek and subtle Fazua drive system provides a boost without adding bulk, and you get a spec loaded with high-end parts.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/electric-mountain-bikes/e-caliber/e-caliber-9-9-xtr/p/34708/?colorCode=orange_red",
};

avail_bikes[1] = {
  bikeName: "Slash 9.8 GX AXS",
  price: "$7,199.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/Slash98GXAXS_21_35192_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "Slash 9.8 is a carbon enduro mountain bike built to handle big hits, rail corners, and rip down the mountain faster than you ever thought possible. Ultra stiff and ultra tough carbon frame, carbon wheels, a wireless electronic drivetrain, and the most refined suspension tech from RockShox make this long-travel 29er a worthy contender for any dedicated rider and enduro podium.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/slash/slash-9-8-gx-axs/p/35192/?colorCode=grey",
};

avail_bikes[2] = {
  bikeName: "Madone SLR 6 eTap",
  price: "$7,499.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/MadoneSLR6Disc_21_33347_A_Portrait?wid=1200",
  bikeInfo:
    "Madone SLR 6 eTap brings the ultimate race bike platform to the next level of performance with road-smoothing Adjustable Top Tube IsoSpeed. An all-new 800 Series OCLV Carbon aero frame, race-worthy parts like an ultra smart and smooth SRAM Rival eTap wireless electronic drivetrain, and endless adjustment options make it the right choice for anyone who wants to add more trophies and medals to their collection.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/madone/madone-slr/madone-slr-6-etap/p/35023/?colorCode=bluedark_red",
};

avail_bikes[3] = {
  bikeName: "Session 8 29 GX",
  price: "$4,999.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/Session829GX_22_34624_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted, and blazing fast on even the most punishing runs.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/downhill-mountain-bikes/session/session-8-29-gx/p/34624/?colorCode=black",
};

avail_bikes[4] = {
  bikeName: "Roscoe 8",
  price: "$1,879.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/Roscoe8_21_28487_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "Roscoe 8 is a trail hardtail for anyone looking to have some serious fun out in the dirt. Its 27.5+ mid-fat tires, a wide-range 1x12 drivetrain, and 120mm suspension fork make it a blast on every trail, from packed singletrack to the loose stuff. It's a laid-back trail mountain bike dressed in a high-quality spec that's ready to party.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/roscoe/roscoe-8/p/28487/?colorCode=bluedark_grey",
};

avail_bikes[5] = {
  bikeName: "X-Caliber 9",
  price: "$1,649.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber9_20_29760_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "X-Caliber 9 is the top-end model in the X-Caliber family. It's a fully race-ready cross country mountain bike built with parts designed to compete. A RockShox Judy Silver fork with remote lockout, a 1x12 Shimano XT/SLX drivetrain, and a wide-range cassette make it a great choice for fast singletrack riders who want a great bike that's ready to race right out of the box.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/x-caliber/x-caliber-9/p/29760/?colorCode=greenvisibility_tealdark",
};

avail_bikes[6] = {
  bikeName: "Fuel EX 8 XT",
  price: "$3,799.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/FuelEX8XT_21_29457_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "Fuel EX 8 is the ideal trail bike for riders who want a versatile full suspension ripper that makes soul-crushing climbs less painful, but can also huck rowdy trails. It hits the sweet spot of value and performance in our mountain bike lineup by combining high-end parts with a stout but light alloy frame.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/fuel-ex/fuel-ex-8-xt/p/33000/?colorCode=reddark_black",
};

avail_bikes[7] = {
  bikeName: "Powerfly 4",
  price: "$3,699.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/Powerfly4_21_32844_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "Powerfly 4 is our most affordable electric mountain bike. It's built with parts that hold up, like a smooth-shifting Shimano drivetrain, and a powerful Bosch motor. Plus, it features our user-friendly Removable Integrated Battery (RIB) system that's fully encased in the frame yet doesn't require tools for removal. This bike expands your boundaries and lets you travel to destinations you never thought you'd reach on a mountain bike.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/electric-mountain-bikes/powerfly/powerfly-hardtail/powerfly-4/p/32844/?colorCode=grey_black",
};

avail_bikes[8] = {
  bikeName: "Procaliber 9.7",
  price: "$4,199.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/Procaliber97_21_33265_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "Procaliber 9.7 is a cross country hardtail that’s built for blistering speed in every XC race. The carbon frame’s IsoSpeed decoupler helps you feel stronger longer and a lighter parts spec keeps you spry up climbs and hammering on flats.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/procaliber/procaliber-9-7/p/33265/?colorCode=grey_black",
};

avail_bikes[9] = {
  bikeName: "Marlin 5",
  price: "$639.99",
  img: "https://trek.scene7.com/is/image/TrekBicycleProducts/Marlin5_22_34587_D_Portrait?$responsive-pjpg$&cache=on,on&wid=1024&hei=768",
  bikeInfo:
    "Marlin 5 is a trail-worthy daily rider that's perfectly suited for everyday adventures, on and off the trail. A suspension fork, 2x8 drivetrain, and mounts for a rack and kickstand make it an ideal choice for new trail riders or anyone looking for a comfortable, stable commuter with the ruggedness of a real mountain bike.",
  buy: "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/marlin/marlin-5/p/34587/?colorCode=greenvisibility_teal",
};

function Bikes() {
  const [search, setsearch] = useState("");
  const [results, setresults] = useState(false);
  const [resultsArray, setresultsarray] = useState([]);
  const [noresultpage, setnoresultpage] = useState(false);

  const bikeResults = (name) => {
    let arr = [];
    if (name === "") {
      setresults(false);
      return alert("Enter some text to start your search!");
    }
    setresultsarray([]);
    avail_bikes.map((e, i) => {
      let str = e.bikeName.toLowerCase();
      name = name.toLowerCase();
      arr.push(str.match(name));
      if (str.match(name) !== null) {
        setresultsarray((previousResults) => [...previousResults, e]);
        if (i === avail_bikes.length - 1) {
          if (arr.every((element) => element === null)) {
            return setnoresultpage(true);
          } else return setnoresultpage(false);
        }

        return setresults(true);
      } else {
        if (i === avail_bikes.length - 1) {
          if (arr.every((element) => element === null)) {
            return setnoresultpage(true);
          } else return setnoresultpage(false);
        } else {
          return "";
        }
      }
    });
  };

  return (
    <div className="bikes">
      <div className="search_sect">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          placeholder="Search for the bikes you ❤️"
        />
        <SearchRoundedIcon
          onClick={() => {
            bikeResults(search);
          }}
          className="search_icon"
        />
        {results ? (
          <CancelIcon
            className="cancel_icon"
            onClick={() => {
              setsearch("");
              setresults(false);
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="bikes_sect">
        {noresultpage ? <NoResults /> : ""}
        {results ? (
          <BikesList avail_bikes={resultsArray} />
        ) : (
          <BikesList avail_bikes={avail_bikes} />
        )}
      </div>
    </div>
  );
}

export default Bikes;
