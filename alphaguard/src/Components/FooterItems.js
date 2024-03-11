import React from "react";
import { colors } from "./Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterItems({ icon }) {
  return (
    <div
      style={{
        height: 30,
        width: 30,
        backgroundColor: colors.darkGreen,
        borderRadius: 5,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default FooterItems;
