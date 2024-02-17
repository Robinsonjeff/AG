import React from "react";
import aboutUsimg1 from "../../Assets/AGGuy.JPG";
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
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1 style={{ marginTop: 25, fontWeight: "bold", color: "#143622" }}>
          About AlphaGuard
        </h1>
      </div>
      {/* End Heading Div */}

      <div
        style={{
          // backgroundColor: "red",
          display: "flex",
        }}
      >
        {/* Text div */}
        <div
          style={{
            width: "70%",
            marginTop: 10,
            color: "#747e74",
            display: "flex",
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
            by a shared passion for providing top-tier pest control services as
            well as prior experience working with their uncle who also has his
            own pest control business.
          </h6>
        </div>
        <div
          style={{
            width: "30%",
            marginTop: 10,
            color: "#747e74",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
            // backgroundColor: "green",
          }}
        >
          <img
            style={{ height: "100%", width: "100%", borderRadius: 10 }}
            src={aboutUsimg1}
            alt="aboutUsImage1"
          ></img>
        </div>
      </div>
      <div
        style={{
          // backgroundColor: "red",
          display: "flex",
        }}
      >
        {/* Text div */}

        <div
          style={{
            width: "30%",
            marginTop: 10,
            color: "#747e74",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
            paddingRight: 20,
            paddingLeft: 20,
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
            width: "70%",
            marginTop: 10,
            color: "#747e74",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 20,
            paddingLeft: 20,
            // backgroundColor: "blue",
          }}
        >
          <h6>
            What drives us? A commitment to integrity, reliability, and
            personalized care. We take immense pride in our work, infusing every
            treatment with precision, attentiveness, and the relentless pursuit
            of excellence. Our ethos revolves around fostering lasting
            relationships with our customers, understanding their unique needs,
            and delivering tailored solutions that guarantee peace of mind.
          </h6>
        </div>
      </div>
      <div
        style={{
          // backgroundColor: "red",
          display: "flex",
        }}
      >
        {/* Text div */}

        <div
          style={{
            width: "70%",
            marginTop: 10,
            color: "#747e74",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 20,
            paddingLeft: 20,
            // backgroundColor: "blue",
          }}
        >
          <h6>
            At AlphaGuard Pest Solutions, we don't just eliminate pests; we
            safeguard your environment, ensuring a safe, healthy, and pest-free
            space for your family, pets, or employees. With a blend of
            expertise, cutting-edge techniques, and a genuine dedication to
            customer satisfaction, we stand as the shield between your property
            and unwanted intruders. Trust us to protect what matters most to
            you.
          </h6>
        </div>

        <div
          style={{
            width: "30%",
            marginTop: 10,
            color: "#747e74",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
            // backgroundColor: "green",
          }}
        >
          <img
            style={{ height: "100%", width: "100%", borderRadius: 10 }}
            src={aboutUsimg1}
            alt="aboutUsImage1"
          ></img>
        </div>
      </div>

      {/* <div style={{ height: 400, width: "50%" }}>
        <h2 style={{ marginTop: 15, marginLeft: 15 }}>What We Do</h2>
      </div> */}
    </div>
  );
};

export default AboutUs;
