import React from "react";
import chevron from "../../assets/Images/chevron-right-solid (1).svg";
import location from "../../assets/Images/location-dot-solid.svg";
import phone from "../../assets/Images/phone-solid.svg";
import email from "../../assets/Images/envelope-solid.svg";
const Footer = () => {
  const handleClickScroll = (props) => {
    const element = document.getElementById(props);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="footer">
      <div className="foot_about">
        <h4>About us</h4>
        <p>
          Lorem ipsum dolor sit amet, di dunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam. Excepteur sint qui officia deserunt
          Excepteur.
        </p>
      </div>
      <div className="foot_main">
        <h4>Main Menu</h4>
        <div>
          <ul
            onClick={() => {
              handleClickScroll("home");
            }}
          >
            <img className="arrowImg" src={chevron} alt="ico" />
            Home
          </ul>
          <ul
            onClick={() => {
              handleClickScroll("about");
            }}
          >
            <img className="arrowImg" src={chevron} alt="ico" />
            About
          </ul>
          <ul
            onClick={() => {
              handleClickScroll("service");
            }}
          >
            <img className="arrowImg" src={chevron} alt="ico" />
            Services
          </ul>
          <ul
            onClick={() => {
              handleClickScroll("work");
            }}
          >
            <img className="arrowImg" src={chevron} alt="ico" />
            Work
          </ul>
          {/* <ul>Blog</ul> */}
          <ul
            onClick={() => {
              handleClickScroll("customerreview");
            }}
          >
            <img className="arrowImg" src={chevron} alt="ico" />
            Happy Clients
          </ul>
          <ul
            onClick={() => {
              handleClickScroll("updates");
            }}
          >
            <img className="arrowImg" src={chevron} alt="ico" />
            Updates
          </ul>
          <ul
            onClick={() => {
              handleClickScroll("contact");
            }}
          >
            <img className="arrowImg" src={chevron} alt="ico" />
            Contact
          </ul>
        </div>
      </div>
      <div className="foot_contact">
        <h4>Contact us</h4>
        <div>
          <ul>
            <img className="arrowImg" src={location} alt="ico" />
            Location
          </ul>
          <ul>
            <img className="arrowImg" src={phone} alt="ico" />
            Phone
          </ul>
          <ul>
            <img className="arrowImg" src={email} alt="ico" />
            Mail
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
