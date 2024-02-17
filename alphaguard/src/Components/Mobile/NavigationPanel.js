import React from "react";
import { colors } from "../Colors";
import Navigators from "./Navigators";

function NavigationPanel(props) {
  return (
    <div
      style={{
        backgroundColor: colors.darkGreen,
        zIndex: 1000,
        width: "100vw",
      }}
    >
      <Navigators title="AboutUs" />
      <Navigators title="Why Choose Us" />
      <Navigators title="Where We Service" />
      <Navigators title="FAQ" />
    </div>
  );
}

export default NavigationPanel;
