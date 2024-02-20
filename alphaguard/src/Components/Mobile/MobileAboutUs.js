import React from "react";
import aboutUsHeaderImage from "../../Assets/NoBGIconGuy.PNG";
import { colors } from "../Colors";

function MobileAboutUs(props) {
  return (
    <div
      style={{
        backgrondColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {/* <h1>AboutUS</h1> */}
      {/* image div */}
      <div style={{ marginBottom: 20 }}>
        <img
          src={aboutUsHeaderImage}
          alt="About Us header"
          style={{ borderRadius: 50 }}
        ></img>
      </div>
      {/* Text div */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.darkGreen,
          color: "#dcdcde",
          border: "3px solid #747474",
          paddingTop: 5,
          paddingLeft: 5,
          borderRadius: 10,
        }}
      >
        <h6>
          Welcome to AlphaGuard Pest Solutions, where excellence meets
          dedication in safeguarding your home and business against unwanted
          invaders. As a family-founded enterprise, rooted in the heart of
          O’Fallon, Missouri, our journey commenced with two cousins unified by
          a shared passion for providing top-tier pest control services as well
          as prior experience working with their uncle who also has his own pest
          control business.
        </h6>
        <br />
        <h6>
          What drives us? A commitment to integrity, reliability, and
          personalized care. We take immense pride in our work, infusing every
          treatment with precision, attentiveness, and the relentless pursuit of
          excellence. Our ethos revolves around fostering lasting relationships
          with our customers, understanding their unique needs, and delivering
          tailored solutions that guarantee peace of mind.
        </h6>
        <br />
        <h6>
          At AlphaGuard Pest Solutions, we don't just eliminate pests; we
          safeguard your environment, ensuring a safe, healthy, and pest-free
          space for your family, pets, or employees. With a blend of expertise,
          cutting-edge techniques, and a genuine dedication to customer
          satisfaction, we stand as the shield between your property and
          unwanted intruders. Trust us to protect what matters most to you.
        </h6>
      </div>
    </div>
  );
}

export default MobileAboutUs;
