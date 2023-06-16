import React from "react";
import chevron from "../../assets/Images/chevron-right-solid (1).svg";
import location from "../../assets/Images/location-dot-solid.svg";
import phone from "../../assets/Images/phone-solid.svg";
import email from "../../assets/Images/envelope-solid.svg";
const Footer = () => {
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
          <ul>
            <img className="arrowImg" src={chevron} alt="ico" />
            Home
          </ul>
          <ul>
            <img className="arrowImg" src={chevron} alt="ico" />
            About
          </ul>
          <ul>
            <img className="arrowImg" src={chevron} alt="ico" />
            Services
          </ul>
          <ul>
            <img className="arrowImg" src={chevron} alt="ico" />
            Work
          </ul>
          {/* <ul>Blog</ul> */}
          <ul>
            <img className="arrowImg" src={chevron} alt="ico" />
            Happy Clients
          </ul>
          <ul>
            <img className="arrowImg" src={chevron} alt="ico" />
            Updates
          </ul>
          <ul>
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
