import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandshake,
  faPenFancy,
  faShield,
  faFaceSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../Colors";

function ChooseUs(props) {
  return (
    <div
      style={{
        // backgroundColor: "red",
        display: "flex",
        height: 500,
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "15%",
          height: "85%",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.smoke,
          marginTop: 10,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            backgroundColor: colors.darkGreen,
            borderRadius: 50,
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginTop: 45,
          }}
        >
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            color: colors.darkGreen,
          }}
        >
          <h6 style={{ textAlign: "center" }}>Family-Centric Approach</h6>
        </div>
        <div
          style={{ width: "80%", backgroundColor: colors.darkGreen, height: 5 }}
        ></div>
        <div style={{ marginTop: 20, paddingLeft: 7, paddingRight: 7 }}>
          <p style={{ fontSize: 13, textAlign: "center" }}>
            As a family-founded company, we understand the importance of a safe
            and healthy environment for your loved ones, including pets. Our
            services prioritize the well-being of your family, offering
            comprehensive pest solutions that ensure a secure space for
            everyone.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "15%",
          height: "85%",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.smoke,
          marginTop: 10,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            backgroundColor: colors.darkGreen,
            borderRadius: 50,
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginTop: 45,
          }}
        >
          <FontAwesomeIcon icon={faHandshake} />
        </div>
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            color: colors.darkGreen,
          }}
        >
          <h6 style={{ textAlign: "center" }}>Experienced Professionals</h6>
        </div>
        <div
          style={{ width: "80%", backgroundColor: colors.darkGreen, height: 5 }}
        ></div>
        <div style={{ marginTop: 20, paddingLeft: 7, paddingRight: 7 }}>
          <p style={{ fontSize: 13, textAlign: "center" }}>
            With prior experience in the pest control profession, our team
            brings expertise and a seasoned eye to every situation. You can
            trust our knowledgeable staff to tackle any pest issue efficiently
            and effectively, giving you peace of mind.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "15%",
          height: "85%",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.smoke,
          marginTop: 10,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            backgroundColor: colors.darkGreen,
            borderRadius: 50,
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginTop: 45,
          }}
        >
          <FontAwesomeIcon icon={faPenFancy} />
        </div>
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            color: colors.darkGreen,
          }}
        >
          <h6 style={{ textAlign: "center" }}>Tailored Solutions</h6>
        </div>
        <div
          style={{
            width: "80%",
            backgroundColor: colors.darkGreen,
            height: 5,
            marginTop: 10,
          }}
        ></div>
        <div style={{ marginTop: 20, paddingLeft: 7, paddingRight: 7 }}>
          <p style={{ fontSize: 13, textAlign: "center" }}>
            We don't believe in one-size-fits-all approaches. At AlphaGuard Pest
            Solutions, we personalize our treatments to suit your specific
            needs, ensuring that your property receives the most effective and
            suitable pest control methods available.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "15%",
          height: "85%",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.smoke,
          marginTop: 10,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            backgroundColor: colors.darkGreen,
            borderRadius: 50,
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginTop: 45,
          }}
        >
          <FontAwesomeIcon icon={faShield} />
        </div>
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
            color: colors.darkGreen,
          }}
        >
          <h6 style={{ textAlign: "center" }}>Commitment to Safety</h6>
        </div>
        <div
          style={{
            width: "80%",
            backgroundColor: colors.darkGreen,
            height: 5,
            // marginTop: 10,
          }}
        ></div>
        <div style={{ marginTop: 20, paddingLeft: 7, paddingRight: 7 }}>
          <p style={{ fontSize: 13, textAlign: "center" }}>
            We go beyond pest eradication; we prioritize the safety of your home
            or business. Our procedures are designed to eliminate pests while
            ensuring minimal impact on the environment and the health of your
            family, pets, and employees.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "15%",
          height: "85%",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.smoke,
          marginTop: 10,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            backgroundColor: colors.darkGreen,
            borderRadius: 50,
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginTop: 45,
          }}
        >
          <FontAwesomeIcon icon={faFaceSmileBeam} />
        </div>
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            color: colors.darkGreen,
          }}
        >
          <h6 style={{ textAlign: "center" }}>
            Reliability and Customer Satisfaction
          </h6>
        </div>
        <div
          style={{
            width: "80%",
            backgroundColor: colors.darkGreen,
            height: 5,
          }}
        ></div>
        <div style={{ marginTop: 10, paddingLeft: 7, paddingRight: 7 }}>
          <p style={{ fontSize: 13, textAlign: "center" }}>
            We take pride in our reliability and dedication to customer
            satisfaction. Count on AlphaGuard Pest Solutions to be there when
            you need us, providing exceptional service and ensuring your
            complete peace of mind throughout the pest control process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
