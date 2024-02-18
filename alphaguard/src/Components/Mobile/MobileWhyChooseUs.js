import React from "react";
import WhyChooseUsTiles from "./WhyChooseUsTiles";

import {
  faFaceSmileBeam,
  faHandshake,
  faPenFancy,
  faShield,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function MobileWhyChooseUs(props) {
  return (
    <div
      style={{
        width: "97.6vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WhyChooseUsTiles
        icon={faUsers}
        bodyText={
          "As a family-founded company, we understand the importance of a safe and healthy environment for your loved ones, including pets. Our services prioritize the well-being of your family, offering comprehensive pest solutions that ensure a secure space for everyone."
        }
      >
        <span>Family-Centric</span>
        <span>Approach</span>
      </WhyChooseUsTiles>

      <WhyChooseUsTiles
        icon={faHandshake}
        bodyText={
          "With prior experience in the pest control profession, our team brings expertise and a seasoned eye to every situation. You can trust our knowledgeable staff to tackle any pest issue efficiently and effectively, giving you peace of mind."
        }
      >
        <span>Experienced </span>
        <span> Professionals</span>
      </WhyChooseUsTiles>

      <WhyChooseUsTiles
        icon={faPenFancy}
        bodyText={
          "We don't believe in one-size-fits-all approaches. At AlphaGuard Pest Solutions, we personalize our treatments to suit your specific needs, ensuring that your property receives the most effective and suitable pest control methods available."
        }
      >
        <span>Tailored</span>
        <span>Solutions</span>
      </WhyChooseUsTiles>

      <WhyChooseUsTiles
        icon={faShield}
        bodyText={
          "We go beyond pest eradication; we prioritize the safety of your home or business. Our procedures are designed to eliminate pests while ensuring minimal impact on the environment and the health of your family, pets, and employees."
        }
      >
        <span>Commitment</span>
        <span>to Safety</span>
      </WhyChooseUsTiles>
      <WhyChooseUsTiles
        icon={faFaceSmileBeam}
        bodyText={
          "We take pride in our reliability and dedication to customer satisfaction. Count on AlphaGuard Pest Solutions to be there when you need us, providing exceptional service and ensuring your complete peace of mind throughout the pest control process."
        }
      >
        <span>Reliability</span>
        <span>&</span>
        <span>Customer</span>
        <span>Satisfaction</span>
      </WhyChooseUsTiles>
    </div>
  );
}

export default MobileWhyChooseUs;
