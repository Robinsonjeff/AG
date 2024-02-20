import React from "react";

import aboutUsimg2 from "../../Assets/AboutUsImage.jpg";

const AboutUs = () => {
  return (
    // Container div
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading Div */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginTop: 25, fontWeight: "bold", color: "#143622" }}>
          About AlphaGuard
        </h1>
        <div
          style={{
            width: "40vw",
            height: 5,
            backgroundColor: "#143622",
            marginBottom: 20,
          }}
        ></div>
      </div>
      {/* End Heading Div */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Text div */}

          <div
            style={{
              width: "30%",
              marginTop: 10,
              color: "#747e74",
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
              marginBottom: 20,
              // backgroundColor: "green",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", borderRadius: 10 }}
              src={aboutUsimg2}
              alt="aboutUsImage2"
            ></img>
          </div>
          <div
            style={{
              width: "40%",
              marginTop: 10,
              marginBottom: 20,
              color: "#747e74",
              display: "flex",
              flexDirection: "column",

              justifyContent: "center",
              alignItems: "center",
              paddingRight: 20,
              paddingLeft: 20,
              // backgroundColor: "blue",
            }}
          >
            <h6>
              Welcome to AlphaGuard Pest Solutions, where excellence meets
              dedication in safeguarding your home and business against unwanted
              invaders. As a family-founded enterprise, rooted in the heart of
              O’Fallon, Missouri, our journey commenced with two cousins unified
              by a shared passion for providing top-tier pest control services
              as well as prior experience working with their uncle who also has
              his own pest control business. What drives us? A commitment to
              integrity, reliability, and personalized care. We take immense
              pride in our work, infusing every treatment with precision,
              attentiveness, and the relentless pursuit of excellence. Our ethos
              revolves around fostering lasting relationships with our
              customers, understanding their unique needs, and delivering
              tailored solutions that guarantee peace of mind. At AlphaGuard
              Pest Solutions, we don't just eliminate pests; we safeguard your
              environment, ensuring a safe, healthy, and pest-free space for
              your family, pets, or employees. With a blend of expertise,
              cutting-edge techniques, and a genuine dedication to customer
              satisfaction, we stand as the shield between your property and
              unwanted intruders. Trust us to protect what matters most to you.
            </h6>
          </div>
        </div>
        {/* <div
          style={{
            width: "90vw",
            height: 5,
            backgroundColor: "#143622",
            marginTop: 10,
            marginBottom: 10,
          }}
        ></div> */}
      </div>

      <div
        style={{
          // backgroundColor: "red",
          display: "flex",
        }}
      >
        {/* Text div */}
      </div>

      {/* <div style={{ height: 400, width: "50%" }}>
        <h2 style={{ marginTop: 15, marginLeft: 15 }}>What We Do</h2>
      </div> */}
    </div>
  );
};

export default AboutUs;
