import React from "react";

const InfoContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 3,
        minHeight: "94vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#eaebea",
          // display: "flex", // Add this property
          //   width: "98vw",
          flexDirection: "column",
          alignItems: "center",
          border: "5px solid #8d9491",
          // minHeight: ,
        }}
      >
        <div
          style={{
            flexGrow: 1,
            // width: "100%",
            // height: 5,
            // backgroundColor: "#8d9491",
          }}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default InfoContainer;
