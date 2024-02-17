import React from "react";
import { colors } from "../Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyChooseUsTiles({ icon, bodyText, children }) {
  return (
    <div
      style={{
        backgroundColor: colors.darkGreen,
        borderRadius: 25,
        width: "80vw",
        height: "20%",
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          paddingTop: 10,
        }}
      >
        <FontAwesomeIcon icon={icon} />
        <div
          style={{
            textAlign: "center",
            fontSize: 12,
            paddingTop: 5,
            display: "flex",
            flexDirection: "column",
            paddingBottom: 10,
          }}
        >
          {children}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "90%",
          width: 2,
          marginLeft: 7,
          marginRight: 7,
        }}
      ></div>
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: 13,
            textAlign: "center",
            paddingRight: 8,
          }}
        >
          {bodyText}
        </p>
      </div>
    </div>
  );
}

export default WhyChooseUsTiles;
