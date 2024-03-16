import React from "react";
import { colors } from "./Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterItems({ icon, navItem }) {
  return (
    <div
      style={{
        height: 25,
        width: 25,
        backgroundColor: colors.darkGreen,
        borderRadius: 5,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginLeft: 10,
      }}
    >
      <a href={navItem} style={{ textDecoration: "none", color: "white" }}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </div>
  );
}

export default FooterItems;
