import React, { useState } from "react";
import { colors } from "../Colors";
import navImage from "../../Assets/IMG_4123BBB33F61-1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationPanel from "./NavigationPanel";

function NavigationBar(props) {
  const [navClick, setNavClick] = useState(false);

  const handleNavClick = () => {
    setNavClick(!navClick);
    console.log(navClick);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",

        // backgroundColor: "red",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "7vh",
          backgroundColor: colors.lightGrey,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* <h1>Hi Mobile</h1> */}
        <div
          style={{
            position: "absolute",
            left: 10,
            //   backgroundColor: " red",
            height: "100%",
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer", // added cursor style
            transition: "left 0.5s ease", // added transition property
          }}
          onClick={handleNavClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <img
          src={navImage}
          alt="headerImage"
          style={{ maxHeight: "100%" }}
        ></img>
      </div>
      <div
        style={{
          maxHeight: navClick ? 200 : "0", // Adjust the maximum height as needed
          overflow: "hidden",
          transition: "max-height .5s ease-in-out", // added transition property
          width: "100vw",
        }}
      >
        <NavigationPanel />
      </div>
    </div>
  );
}

export default NavigationBar;
