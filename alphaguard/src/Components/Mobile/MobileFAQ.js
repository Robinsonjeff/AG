import React from "react";
import MobileFAQQuestion from "./MobileFAQQuestion";
import { colors } from "../Colors";

function MobileFAQ(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 15,
        }}
      >
        <h3>Frequently Asked Questions</h3>
        <div
          style={{
            width: "80vw",
            height: 3,
            backgroundColor: colors.darkGreen,
          }}
        ></div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="How harmful are pests to my family's health?"
            answer="Pests can pose significant health risks, from triggering allergies to
            transmitting diseases. At AlphaGuard Pest Solutions, our comprehensive
            treatments not only eliminate pests but also prioritize your family's
            health and well-being, ensuring a safe and healthy environment"
            height={200}
          ></MobileFAQQuestion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="Are your pest control methods safe for pets and the environment?"
            answer=" Yes, our pest control techniques are pet-friendly and environmentally
            conscious. We utilize advanced, eco-friendly solutions that
            effectively target pests while minimizing any adverse effects on your
            beloved pets and the surrounding environment in new age as well as
            traditional treatment options. AlphaGuard uses only EPA (United States
            Environmental Protection Agency) approved products and strictly
            follows all application guidelines."
            height={250}
          ></MobileFAQQuestion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="Is regular pest control necessary, even if I don't see pests
            currently?"
            answer="Absolutely. Prevention is key in pest control. Regular maintenance
            treatments help maintain a pest-free environment, preventing
            infestations before they become noticeable. Whenever you spot an
            infestation, you can assume that the infestation in question has been
            there for quite some time before it had gotten big enough to attract
            your attention. Our proactive approach ensures continuous protection
            for your property."
            height={250}
          ></MobileFAQQuestion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="Are your services suitable for both residential and commercial
            properties?"
            answer=" Yes, our services cater to both residential and commercial clients.
            Whether it's your home or business, AlphaGuard Pest Solutions provides
            comprehensive pest control solutions tailored to your property's
            unique needs."
            height={120}
          ></MobileFAQQuestion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="Do you offer guarantees or warranties on your pest control services?"
            answer="We stand by the effectiveness of our treatments. AlphaGuard Pest
            Solutions offers guarantees and warranties on our services, ensuring
            that if pest problems persist, we'll return to re-treat the affected
            areas at no extra cost. We promise guaranteed services for a pest-free
            environment under the pests originally treated on most of our
            services. If you are not totally satisfied with your treatment, we
            will come back out and reassess your property. If necessary, we will
            retreat at no additional charge."
            height={250}
          ></MobileFAQQuestion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="Are your services affordable, and do you offer flexible payment
            options?"
            answer=" AlphaGuard Pest Solutions offers competitive pricing without
            compromising on quality. Additionally, we provide flexible payment
            options to ensure our services remain accessible and affordable for
            our valued customers."
            height={150}
          ></MobileFAQQuestion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="How often should I have pest control services done?"
            answer=" Bugs are a big part of life in Missouri. Since pests never stop
            looking for food and harborage, and pest control products only provide
            temporary results, services work best when performed on a regular
            schedule. Six times per year (every other month) performed about eight
            to 10 weeks apart is ideal for most customers."
            height={200}
          ></MobileFAQQuestion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MobileFAQQuestion
            question="Do I have to be home when services are done?"
            answer=" No there isn’t a need to be home. Most of our pest control programs
            are designed to control pests from the outside before they get in.
            This means fewer pesticides used inside the home and less scheduling
            hassles for you creating a clean and easy experience."
            height={150}
          ></MobileFAQQuestion>
        </div>
      </div>
    </div>
  );
}

export default MobileFAQ;
