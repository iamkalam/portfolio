import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";
import Wave1 from "../img/wave1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";




const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave1} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>arsalanahmed.ws@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/arsalanahmadws/" target="_blank">
          <LinkedIn color="white" size={"3rem"} /></a>
          <a href="" target="_blank">
          <Insta color="white" size={"3rem"} /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
