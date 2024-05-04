import React from "react";

function MobileHomeScreen(handleHomeScreenClick) {
  return (
    <div>
      <h1>Hello World from homescreen</h1>
      <button onClick={handleHomeScreenClick}> Click me</button>
    </div>
  );
}

export default MobileHomeScreen;
