import React from "react";
import { colors } from "./Colors";

function Footer({ children }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "7vh",
        backgroundColor: colors.darkGrey,
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        paddingRight: 30,
      }}
    >
      {children}
    </div>
  );
}

export default Footer;
