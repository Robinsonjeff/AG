import React, { useState } from "react";
import { colors } from "../Colors";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function FAQ(props) {
  const [div1, setdiv1] = useState(false);
  const [div2, setdiv2] = useState(false);
  const [div3, setdiv3] = useState(false);
  const [div4, setdiv4] = useState(false);
  const [div5, setdiv5] = useState(false);
  const [div6, setdiv6] = useState(false);
  const [div7, setdiv7] = useState(false);
  const [div8, setdiv8] = useState(false);

  const handleDiv1click = () => {
    setdiv1(!div1);
    setdiv2(false);
    setdiv3(false);
    setdiv4(false);
    setdiv5(false);
    setdiv6(false);
    setdiv7(false);
    setdiv8(false);
  };

  const handleDiv2click = () => {
    setdiv2(!div2);
    setdiv1(false);
    setdiv3(false);
    setdiv4(false);
    setdiv5(false);
    setdiv6(false);
    setdiv7(false);
    setdiv8(false);
  };
  const handleDiv3click = () => {
    setdiv3(!div3);
    setdiv1(false);
    setdiv2(false);
    setdiv4(false);
    setdiv5(false);
    setdiv6(false);
    setdiv7(false);
    setdiv8(false);
  };
  const handleDiv4click = () => {
    setdiv3(false);
    setdiv1(false);
    setdiv2(false);
    setdiv4(!div4);
    setdiv5(false);
    setdiv6(false);
    setdiv7(false);
    setdiv8(false);
  };
  const handleDiv5click = () => {
    setdiv3(false);
    setdiv1(false);
    setdiv2(false);
    setdiv4(false);
    setdiv5(!div5);
    setdiv6(false);
    setdiv7(false);
    setdiv8(false);
  };
  const handleDiv6click = () => {
    setdiv3(false);
    setdiv1(false);
    setdiv2(false);
    setdiv4(false);
    setdiv5(false);
    setdiv6(!div6);
    setdiv7(false);
    setdiv8(false);
  };
  const handleDiv7click = () => {
    setdiv3(false);
    setdiv1(false);
    setdiv2(false);
    setdiv4(false);
    setdiv5(false);
    setdiv6(false);
    setdiv7(!div7);
    setdiv8(false);
  };
  const handleDiv8click = () => {
    setdiv3(false);
    setdiv1(false);
    setdiv2(false);
    setdiv4(false);
    setdiv5(false);
    setdiv6(false);
    setdiv7(false);
    setdiv8(!div8);
  };
  //   const handleDiv9click = () => {
  //     setdiv3(!div3);
  //     setdiv1(false);
  //     setdiv2(false);
  //   };
  //   const handleDiv10click = () => {
  //     setdiv3(!div3);
  //     setdiv1(false);
  //     setdiv2(false);
  //   };

  return (
    // Container div
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: "10%",
        paddingRight: 50,
      }}
    >
      <h4 style={{ color: colors.darkGreen }}>Frequently Asked Questions</h4>
      <div
        style={{
          width: "23vw",
          height: 4,
          backgroundColor: colors.darkGreen,
          marginBottom: 15,
        }}
      ></div>

      {/* First question div */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",

          //   paddingLeft: "5%",
        }}
        onClick={handleDiv1click}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "35%",
          }}
        >
          <h5
            style={{
              //  marginTop: 20,
              marginLeft: 10,
            }}
          >
            How harmful are pests to my family's health?
          </h5>
        </div>
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div1 && <FontAwesomeIcon icon={faChevronDown} />}
          {div1 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of first question */}
      {/* First question answer div */}
      <div
        style={{
          width: "90%",
          height: div1 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          Pests can pose significant health risks, from triggering allergies to
          transmitting diseases. At AlphaGuard Pest Solutions, our comprehensive
          treatments not only eliminate pests but also prioritize your family's
          health and well-being, ensuring a safe and healthy environment
        </h5>
      </div>
      {/* end of first answer */}
      {/* second question div */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        onClick={handleDiv2click}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginLeft: 10 }}>
            Are your pest control methods safe for pets and the environment?
          </h5>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div2 && <FontAwesomeIcon icon={faChevronDown} />}
          {div2 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of second question */}
      {/* second question answer div */}
      <div
        style={{
          width: "90%",
          height: div2 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          Yes, our pest control techniques are pet-friendly and environmentally
          conscious. We utilize advanced, eco-friendly solutions that
          effectively target pests while minimizing any adverse effects on your
          beloved pets and the surrounding environment in new age as well as
          traditional treatment options. AlphaGuard uses only EPA (United States
          Environmental Protection Agency) approved products and strictly
          follows all application guidelines.
        </h5>
      </div>
      {/* Third Question */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        onClick={handleDiv3click}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginLeft: 10 }}>
            Is regular pest control necessary, even if I don't see pests
            currently?
          </h5>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div3 && <FontAwesomeIcon icon={faChevronDown} />}
          {div3 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of third question */}
      {/* third question answer div */}
      <div
        style={{
          width: "90%",
          height: div3 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          Absolutely. Prevention is key in pest control. Regular maintenance
          treatments help maintain a pest-free environment, preventing
          infestations before they become noticeable. Whenever you spot an
          infestation, you can assume that the infestation in question has been
          there for quite some time before it had gotten big enough to attract
          your attention. Our proactive approach ensures continuous protection
          for your property.
        </h5>
      </div>
      {/* End of third answer */}

      {/* 4 Question */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        onClick={handleDiv4click}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginLeft: 10 }}>
            Are your services suitable for both residential and commercial
            properties?
          </h5>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div4 && <FontAwesomeIcon icon={faChevronDown} />}
          {div4 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of 4 question */}
      {/* 4 question answer div */}
      <div
        style={{
          width: "90%",
          height: div4 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          Yes, our services cater to both residential and commercial clients.
          Whether it's your home or business, AlphaGuard Pest Solutions provides
          comprehensive pest control solutions tailored to your property's
          unique needs.
        </h5>
      </div>
      {/* End of 4 answer */}

      {/* 5 Question */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        onClick={handleDiv5click}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginLeft: 10 }}>
            Do you offer guarantees or warranties on your pest control services?
          </h5>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div5 && <FontAwesomeIcon icon={faChevronDown} />}
          {div5 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of third question */}
      {/* third question answer div */}
      <div
        style={{
          width: "90%",
          height: div5 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          We stand by the effectiveness of our treatments. AlphaGuard Pest
          Solutions offers guarantees and warranties on our services, ensuring
          that if pest problems persist, we'll return to re-treat the affected
          areas at no extra cost. We promise guaranteed services for a pest-free
          environment under the pests originally treated on most of our
          services. If you are not totally satisfied with your treatment, we
          will come back out and reassess your property. If necessary, we will
          retreat at no additional charge.
        </h5>
      </div>
      {/* End of 5 answer */}

      {/* 6 Question */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        onClick={handleDiv6click}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginLeft: 10 }}>
            Are your services affordable, and do you offer flexible payment
            options?
          </h5>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div6 && <FontAwesomeIcon icon={faChevronDown} />}
          {div6 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of 6 question */}
      {/* 6 question answer div */}
      <div
        style={{
          width: "90%",
          height: div6 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          AlphaGuard Pest Solutions offers competitive pricing without
          compromising on quality. Additionally, we provide flexible payment
          options to ensure our services remain accessible and affordable for
          our valued customers.
        </h5>
      </div>
      {/* End of 6 answer */}

      {/* 7 Question */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        onClick={handleDiv7click}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginLeft: 10 }}>
            How often should I have pest control services done?
          </h5>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div7 && <FontAwesomeIcon icon={faChevronDown} />}
          {div7 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of 7 question */}
      {/* 7 question answer div */}
      <div
        style={{
          width: "90%",
          height: div7 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          Bugs are a big part of life in Missouri. Since pests never stop
          looking for food and harborage, and pest control products only provide
          temporary results, services work best when performed on a regular
          schedule. Six times per year (every other month) performed about eight
          to 10 weeks apart is ideal for most customers.
        </h5>
      </div>
      {/* End of 7 answer */}

      {/* 8 Question */}
      <div
        style={{
          width: "90%",
          height: 70,
          backgroundColor: colors.smoke,
          cursor: "pointer",
          border: "2px solid #8d9491",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        onClick={handleDiv8click}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginLeft: 10 }}>
            Do I have to be home when services are done?
          </h5>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          {!div8 && <FontAwesomeIcon icon={faChevronDown} />}
          {div8 && <FontAwesomeIcon icon={faChevronUp} />}
        </div>
      </div>
      {/* End of 8 question */}
      {/* 8 question answer div */}
      <div
        style={{
          width: "90%",
          height: div8 ? 100 : 0,
          transition: "height 1s ease-in-out",
          backgroundColor: colors.lightGrey,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <h5>
          No there isn’t a need to be home. Most of our pest control programs
          are designed to control pests from the outside before they get in.
          This means fewer pesticides used inside the home and less scheduling
          hassles for you creating a clean and easy experience.
        </h5>
      </div>
      {/* End of 8 answer */}
    </div>
  );
}

export default FAQ;
