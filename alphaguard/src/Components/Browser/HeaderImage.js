import React from "react";
import headerImage from "../../Assets/newHeader.jpg";

const HeaderImage = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "400px", // Set a specific height or adjust as needed
        position: "relative", // Necessary for positioning text
      }}
    >
      {children}
    </div>
  );
};

export default HeaderImage;
