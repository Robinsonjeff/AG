import React from "react";

function Navigators({ title, onClick }) {
  return (
    <div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "2px solid white",
          marginTop: 3,
          paddingTop: 3,
          borderCollapse: "collapse",
          width: "100vw",
        }}
        onClick={onClick}
      >
        <h6>{title}</h6>
      </div>
    </div>
  );
}

export default Navigators;
