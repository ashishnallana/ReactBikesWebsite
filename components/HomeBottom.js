import React from "react";
import "./HomeBottom.css";
import HomeCard from "./HomeCard";

function HomeBottom() {
  return (
    <div className="home_bottom">
      <h2>Why RIDE on TREK?</h2>
      <div className="home_bottom_cards">
        <HomeCard
          color="white"
          img="https://license.citruslime.com/cs/blogs/team/trek-madone-slr9-1553248873312-cmb4zr5m04w-6f65eae_thumb_0538F019.jpg"
          title="Tuff terain tyres"
          content="We provide your bicycles with tyres made with some special fibre. Which
        gives your bike a smooth grid on any terrain you are riding it on."
        />
        <HomeCard
          color="white"
          img="https://www.sefiles.net/images/library/zoom/trek-madone-slr-7-disc-345256-1.jpg"
          title="Gear system"
          content="We make our gear system so smooth which allows the rider to paddle the bike easily. It is made so that the chain doesn't slips and the rider doesn't feels any discomfort while riding out MTB"
        />
        <HomeCard
          color="white"
          img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/madoneslr6disc-19-24123-a-alt6-1530838779.jpg"
          title="Elegant look"
          content="We design each of our bikes multiple times and compare them for the best so that any customer whoever watches the bike falls in love with it. "
        />
        <HomeCard
          color="white"
          img="https://trek.scene7.com/is/image/TrekBicycleProducts/FeatureAsset_MadoneSLR_FlatMountDiscBrakes?$responsive-pjpg$&cache=on,on&wid=1920&hei=1920&fit=crop,1"
          title="Disk brakes"
          content="We make the type of brake that uses the calipers to squeeze pairs of pads against a disc or a rotor to create friction"
        />
      </div>
    </div>
  );
}

export default HomeBottom;
