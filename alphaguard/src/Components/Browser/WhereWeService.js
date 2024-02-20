import React from "react";
import locationImage from "../../Assets/whereWeServiceimg.png";
import { colors } from "../Colors";

function WhereWeService(props) {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: colors.darkGreen,
        }}
      >
        <h3>Where We Service</h3>
        <div
          style={{
            width: "70%",
            backgroundColor: colors.darkGreen,
            height: 5,
            marginBottom: 20,
          }}
        ></div>
      </div>
      <div
        style={{
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)", // Box shadow properties
          borderRadius: "8px", // Optional: Add border radius for rounded corners
          overflow: "hidden", // Optional: Hide any overflowing content
        }}
      >
        <img src={locationImage} alt="where we service map"></img>
      </div>
      <div style={{ paddingLeft: 10, width: "70%", marginTop: 25 }}>
        <h6 style={{ lineHeight: 2 }}>
          Discover AlphaGuard Pest Solutions, your top choice for pest control
          in St. Charles and St. Louis. Count on our expert team to tackle pests
          with precision and tailored solutions for your home or business. From
          rodents to insects, trust AlphaGuard for reliable, effective
          protection throughout the St. Charles and St. Louis areas.
        </h6>
      </div>
    </div>
  );
}

export default WhereWeService;
