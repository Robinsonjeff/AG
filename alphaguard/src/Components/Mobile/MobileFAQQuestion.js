import React, { useState } from "react";
import { colors } from "../Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function MobileFAQQuestion({ question, answer, height }) {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "95vw",
          height: "7vh",
          backgroundColor: colors.smoke,
          color: colors.darkGreen,
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          border: "2px solid #143622",
          boxShadow: "0px 2px 4px 0px black",
        }}
        onClick={handleClicked}
      >
        <h5>{question}</h5>
        {!clicked && <FontAwesomeIcon icon={faChevronDown} />}
        {clicked && <FontAwesomeIcon icon={faChevronUp} />}
      </div>
      <div
        style={{
          width: "98%",
          height: clicked ? height : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 15,
          boxShadow: "0px 2px 4px 0px black",
        }}
      >
        {answer}
      </div>
    </div>
  );
}

export default MobileFAQQuestion;
