import React from "react";
import { colors } from "../Colors";
import map from "../../Assets/mobileWhereWeServiceimg.png";

function MobileWhereWeService(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "97.6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <h4>Where We Service</h4>
        <div
          style={{
            width: "60vw",
            height: 4,
            backgroundColor: colors.darkGreen,
          }}
        ></div>
        <div
          style={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)", // Box shadow properties
            borderRadius: "8px", // Optional: Add border radius for rounded corners
            overflow: "hidden", // Optional: Hide any overflowing content
            marginTop: 25,
          }}
        >
          <img src={map} alt="where we service map"></img>
        </div>
        <div
          style={{
            paddingLeft: 10,
            width: "95%",
            borderRadius: 10,
            marginTop: 25,
            backgroundColor: colors.darkGreen,
            border: "3px solid black",
            color: "#eaebea",
          }}
        >
          <h6 style={{ lineHeight: 2 }}>
            Discover AlphaGuard Pest Solutions, your top choice for pest control
            in St. Charles and St. Louis. Count on our expert team to tackle
            pests with precision and tailored solutions for your home or
            business. From rodents to insects, trust AlphaGuard for reliable,
            effective protection throughout the St. Charles and St. Louis areas.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default MobileWhereWeService;
