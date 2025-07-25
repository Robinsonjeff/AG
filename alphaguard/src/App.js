import { useRef, useState, useEffect } from "react";
import { colors } from "../src/Components/Colors";
import navImage from "./Assets/header.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigators from "./Components/Mobile/Navigators";
import InfoContainer from "./Components/Browser/InfoContainer";
import MobileAboutUs from "./Components/Mobile/MobileAboutUs";
import MobileWhyChooseUs from "./Components/Mobile/MobileWhyChooseUs";
import MobileWhereWeService from "./Components/Mobile/MobileWhereWeService";
import MobileFAQ from "./Components/Mobile/MobileFAQ";

import { BrowserView, MobileView } from "react-device-detect";
// import NavigationBar from "./Components/Mobile/NavigationBar";

import Header from "./Components/Browser/Header";
import HeaderImage from "./Components/Browser/HeaderImage";
import HeaderText from "./Components/Browser/HeaderText";
import AboutUs from "./Components/Browser/AboutUs";

import ChooseUs from "./Components/Browser/ChooseUs";
import WhereWeService from "./Components/Browser/WhereWeService";
import FAQ from "./Components/Browser/FAQ";
import MobileInfoContainer from "./Components/Mobile/MobileInfoContainer";
import Footer from "./Components/Footer";
import FooterItems from "./Components/FooterItems";

import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import MobileHomeScreen from "./Components/Mobile/MobileHomeScreen";

function App() {
  const [navClick, setNavClick] = useState(false);
  const navBarRef = useRef(null);

const handleBookNowClick = () => {
  console.log("booknowclicked")
 
  if (window._gorillaInitPortal) {
    window._gorillaInitPortal();
    console.log("Window._gorillaInitPortal)
  } else {
    console.log("fallback")
    // Fallback if the widget doesn't load
    window.open(
      "https://book.housecallpro.com/book/AlphaGuard/4aa60453411449049d25a2b4894894b0",
      "_blank"
    );
  }
};

  useEffect(() => {
  if (window._gorilla) return;

  window._gorilla = {
    account_id: 'aaa507f15afcfbbfd6e1e4bbbd2b3582',
    loaded: false,
    chatbot: false,
  };

  window._gorillaInitPortal = function () {
    if (window._gorilla.loaded) return;
    window._gorilla.loaded = true;
    const a = document.createElement('script');
    a.type = 'text/javascript';
    a.async = true;
    a.defer = true;
    a.src = 'https://app.gorilladesk.com/js/portal/portal.js';
    document.body.appendChild(a);
  };
}, []);


  

  const handleNavClick = () => {
    setNavClick(!navClick);
    console.log(navClick);
  };

  const [showAboutUs, setShowAboutUs] = useState(true);
  const [showChooseUs, setShowChooseUs] = useState(false);
  const [showWhereWeService, setShowWhereWeService] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  // const [showHomeScreen, setShowHomeScreen] = useState(true);

  const infoContainerRef = useRef(null);

  const handleAboutUsClickBrowser = () => {
    setShowChooseUs(false);
    setShowAboutUs(true);
    setShowWhereWeService(false);
    setShowFAQ(false);
    infoContainerRef.current.scrollIntoView({
      behavior: "smooth",
      display: "block",
      inline: "center",
    });
  };

  const handleAboutUsClickMobile = () => {
    setShowChooseUs(false);
    setShowAboutUs(true);
    setShowWhereWeService(false);
    setShowFAQ(false);
    setNavClick(false);
  };

  const handleChooseUsClickBrowser = () => {
    setShowAboutUs(false);
    setShowChooseUs(true);
    setShowWhereWeService(false);
    setShowFAQ(false);
    infoContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChooseUsClickMobile = () => {
    setShowAboutUs(false);
    setShowChooseUs(true);
    setShowWhereWeService(false);
    setShowFAQ(false);
    setNavClick(false);
  };

  const handleWhereWeServiceCickBrowser = () => {
    setShowChooseUs(false);
    setShowAboutUs(false);
    setShowWhereWeService(true);
    setShowFAQ(false);
    infoContainerRef.current.scrollIntoView({
      behavior: "smooth",
      display: "block",
      inline: "center",
    });
  };

  const handleWhereWeServiceCickMobile = () => {
    setShowChooseUs(false);
    setShowAboutUs(false);
    setShowWhereWeService(true);
    setShowFAQ(false);
    setNavClick(false);
  };

  const handleFAQClickBrowser = () => {
    setShowAboutUs(false);
    setShowChooseUs(false);
    setShowWhereWeService(false);
    setShowFAQ(true);
    infoContainerRef.current.scrollIntoView({
      behavior: "smooth",
      display: "block",
      inline: "center",
    });
  };

  const handleFAQClickMobile = () => {
    setShowAboutUs(false);
    setShowChooseUs(false);
    setShowWhereWeService(false);
    setShowFAQ(true);
    setNavClick(false);
  };
  return (
    <>
      <BrowserView>
        <Header />
        {/* This is the nav bar */}
        <div
          ref={navBarRef}
          style={{
            width: "100vw",
            backgroundColor: "#687c70",
            height: 60,
            display: "flex",
            paddingRight: 40,
            // position: isSticky ? "fixed" : "relative",
            // top: 0,
            // left: 0,
            // right: 0,
            // zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // color: aboutUsIsHoverd ? colors.lightGreen : "white",
              color: "white",
              height: "100%",
              marginRight: 8,
              cursor: "pointer",
              marginLeft: "5%",
            }}
            onClick={handleAboutUsClickBrowser}
            // onMouseEnter={() => setAboutUsHoverd(true)}
            // onMouseOut={() => setAboutUsHoverd(false)}
          >
            <h6 style={{ marginTop: 8, fontWeight: "bold" }}>About Us</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              height: "100%",
              marginRight: 8,
              cursor: "pointer",
              marginLeft: "5%",
            }}
            onClick={handleChooseUsClickBrowser}
          >
            <h6 style={{ marginTop: 8, fontWeight: "bold" }}>Why Choose Us</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              height: "100%",
              marginRight: 8,
              cursor: "pointer",
              marginLeft: "5%",
            }}
            onClick={handleWhereWeServiceCickBrowser}
          >
            <h6 style={{ marginTop: 8, fontWeight: "bold" }}>
              Where We Service
            </h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              height: "100%",
              marginRight: 8,
              cursor: "pointer",
              marginLeft: "5%",
            }}
            onClick={handleFAQClickBrowser}
            onMouseEnter={() => console.log("mouse over")}
          >
            <h6 style={{ marginTop: 8, fontWeight: "bold" }}>FAQ</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              height: "100%",
              marginRight: 8,
              marginLeft: "5%",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              href={"mailto:alphaguardps@gmail.com"}
            >
              Email Us
            </a>
          </div>
        </div>
        <HeaderImage>
          <HeaderText></HeaderText>
        </HeaderImage>
        <div ref={infoContainerRef}>
          <InfoContainer>
            {showAboutUs && <AboutUs />}
            {showChooseUs && <ChooseUs />}
            {showWhereWeService && <WhereWeService />}
            {showFAQ && <FAQ />}
          </InfoContainer>
        </div>
      </BrowserView>
      <MobileView>
        {/* {showHomeScreen && (
          <MobileHomeScreen
            handleHomeScreenClick={setShowHomeScreen(!showHomeScreen)}
          ></MobileHomeScreen>
        )} */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",

            // backgroundColor: "red",
          }}
        >
          {/* Header Bar Div*/}
          <div
            style={{
              width: "100vw",
              height: "7vh",
              backgroundColor: colors.lightGrey,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Icon Div*/}
            <div
              style={{
                position: "absolute",
                left: 10,
                // backgroundColor: " red",
                height: "100%",
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer", // added cursor style
                transition: "left 0.5s ease", // added transition property
              }}
              onClick={handleNavClick}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>

            <img
              src={navImage}
              alt="headerImage"
              style={{ maxHeight: "100%" }}
            ></img>

            {/* Book now button in navbar */}
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 5,
              }}
            >
              <div
                style={{
                  width: "15vw",
                  height: "50%",
                  backgroundColor: colors.darkGreen,
                  color: "white",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 5,
                }}
                onClick={handleBookNowClick}
              >
                <div
                  style={{
                    marginTop: "40%",
                    marginBottom: "20%",
                    display: "flex",
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Book
                  </p>

                  <p style={{ fontSize: 10, marginLeft: 2 }}> Now!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Panel div */}
          <div
            style={{
              maxHeight: navClick ? "300px" : "0", // Adjust the maximum height as needed
              overflow: "hidden",
              transition: "max-height .7s ease-in-out", // added transition property
              zIndex: 1000,
            }}
          >
            {/* Navigation Panel Code */}

            <div
              style={{
                backgroundColor: colors.darkGreen,
                // height: "23vh",
              }}
            >
              <Navigators title="About Us" onClick={handleAboutUsClickMobile} />
              <Navigators
                title="Why Choose Us"
                onClick={handleChooseUsClickMobile}
              />
              <Navigators
                title="Where We Service"
                onClick={handleWhereWeServiceCickMobile}
              />
              <Navigators title="FAQ" onClick={handleFAQClickMobile} />
            </div>
          </div>
          <div
            ref={infoContainerRef}
            style={{ position: "absolute", top: "7vh" }}
          >
            <MobileInfoContainer>
              {showAboutUs && <MobileAboutUs />}
              {showChooseUs && <MobileWhyChooseUs />}
              {showWhereWeService && <MobileWhereWeService />}
              {showFAQ && (
                <div style={{ paddingBottom: 30 }}>
                  <MobileFAQ />
                </div>
              )}
            </MobileInfoContainer>
            <Footer>
              <FooterItems
                icon={faInstagram}
                navItem={"instagram://user?screen_name=AlphaGuardPS"}
              />
              <FooterItems
                icon={faXTwitter}
                navItem={"twitter://user?screen_name=AlphaGuardPS"}
              />
              <FooterItems
                icon={faTiktok}
                navItem={
                  "https://www.tiktok.com/@alphaguardpestsolutions?is_from_webapp=1&sender_device=pc"
                }
              />
              <FooterItems
                icon={faYoutube}
                navItem={
                  "https://www.youtube.com/channel/UCXeTmM4f_Jl2vdgwNEA_Iew"
                }
              />
              <FooterItems
                icon={faFacebook}
                navItem={
                  "https://www.facebook.com/profile.php?id=61555161394690&mibextid=LQQJ4d"
                }
              />
            </Footer>
          </div>
        </div>
      </MobileView>
    </>
  );
}

export default App;
