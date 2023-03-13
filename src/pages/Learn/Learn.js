import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header-2";
import img1 from "../../images/Intersection-1.png";
import img2 from "../../images/Intersection-2.png";
import img3 from "../../images/Intersection-3.png";
import img4 from "../../images/V3-new.png";
import { cardDetails } from "./constant";
import "./Learn.css";

const Learn = () => {
  // Local State
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Functions
  const handleScroll = () => setScrollPosition(window?.scrollY);
  return (
    <div className="App" onScroll={handleScroll}>
      <div
        className={`${
          scrollPosition > 50
            ? "fixed bg-black py-0 animate__animated animate__fadeIn"
            : "absolute py-3"
        } w-full z-50`}
      >
        <Header scrollPosition={scrollPosition} />
      </div>
      {/* Hero Section */}
      <div className="flex justify-between items-center w-full mt-40">
        <div className="ml-20">
          <div className="text-left text-5xl font-semibold mb-10">
            Web3 Curious?
          </div>
          <div className="text-left text-4xl leading-10">
            Check out our collection of resources for
            <br />
            brands and individuals looking to learn
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img src={img1} data-aos="fade-left" style={{ width: "40vw" }} className="" alt="img1" />
          <img src={img2} data-aos="fade-left" style={{ width: "40vw" }} className="" alt="img2" />
          <img src={img3} data-aos="fade-left" style={{ width: "40vw" }} className="" alt="img3" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 mt-40">
        {cardDetails?.map((items, index) => (
          <div
            className="shadow-md rounded"
            key={index}
            style={{ width: "400px" }}
          >
            <div className="">
              <img src={items?.img} alt="" />
            </div>
            <div className="p-10">
              <div className="text-left font-bold text-3xl mb-5 ">
                {items?.title}
              </div>
              <div className="text-left font-light text-xl">{items?.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-40 flex items-center">
        <div>
          <img src={img4} style={{ width: "40vw" }} alt="Footer" />
        </div>
        <div className="mx-auto">
          <div className="font-semibold text-5xl mb-10">Connect with us</div>
          <div className="flex justify-between">
            <span>
              <FontAwesomeIcon color="#9926f4" icon={faFacebook} size="4x" />
            </span>
            <span>
              <FontAwesomeIcon color="#9926f4" icon={faTwitter} size="4x" />
            </span>
            <span>
              <FontAwesomeIcon color="#9926f4" icon={faInstagram} size="4x" />
            </span>
            <span>
              <FontAwesomeIcon color="#9926f4" icon={faLinkedin} size="4x" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
