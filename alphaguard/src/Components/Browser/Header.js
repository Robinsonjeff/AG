import React from "react";
import logo from "../../Assets/header.PNG";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#eaeaea",
        height: 210,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" style={{}}></img>
      {/* <h2 style={{ marginLeft: "40%" }}>AlphaGuard</h2> */}
    </div>
  );
};

export default Header;
