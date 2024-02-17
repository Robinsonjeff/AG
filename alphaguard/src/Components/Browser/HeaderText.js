import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { colors } from "../Colors";

const HeaderText = () => {
  const [bookNowHover, setBookNowHover] = useState(false);

  const handleBookNowClick = () => {
    window.open(
      "https://book.housecallpro.com/book/AlphaGuard/4aa60453411449049d25a2b4894894b0",
      "_blank"
    );
  };
  return (
    <div style={{}}>
      <Helmet>
        <script
          type="text/javascript"
          src="https://www.housecallpro.com/assets/BookingBar.js?company=4aa60453411449049d25a2b4894894b0&path=AlphaGuard"
        ></script>
      </Helmet>
      <div
        style={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          paddingLeft: 20,
          color: "black",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        {/* HeaderText Div */}
        <div
          style={{
            marginRight: "15%",
            marginTop: "5%",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            height: "100%",
            color: "#143622",
          }}
        >
          <h1
            style={{
              marginTop: 25,
              marginBottom: 20,
              fontWeight: "bold",
              fontSize: 80,
            }}
          >
            AlphaGuard
          </h1>

          <h3 style={{ marginBottom: "20%" }}>Leave your pests in the past</h3>

          {/* Book now button div */}
          <div
            style={{
              backgroundColor: bookNowHover ? colors.smoke : "#6c947c",
              height: "15%",
              width: "60%",
              color: "white",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifySelf: "end",
              cursor: "pointer",
            }}
            onClick={handleBookNowClick}
            onMouseOver={() => setBookNowHover(true)}
            onMouseOut={() => setBookNowHover(false)}
          >
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
