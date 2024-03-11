import React from "react";
import { colors } from "../Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyChooseUsTiles({ icon, bodyText, children }) {
  return (
    <div
      style={{
        backgroundColor: colors.smoke,
        borderRadius: 25,
        // border: "3px solid #747474",
        boxShadow: " 0px 5px 5px 0px black",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: colors.darkGreen,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
          }}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 12,
            paddingTop: 5,
            display: "flex",
            flexDirection: "column",
            paddingBottom: 10,
            color: colors.darkGreen,
          }}
        >
          {children}
        </div>
      </div>

      <div
        style={{
          backgroundColor: colors.darkGreen,
          height: "90%",
          width: 2,
          marginLeft: 7,
          marginRight: 7,
        }}
      ></div>
      <div
        style={{
          color: colors.darkGreen,
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
