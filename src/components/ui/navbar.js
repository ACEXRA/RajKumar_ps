import React from "react";

const Navbar = () => {
  const handleClickScroll = (props) => {
    const element = document.getElementById(props);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar">
      <div>
        <img src="" alt="temp img" />
      </div>
      <div className="nav_route">
        <ul
          onClick={() => {
            handleClickScroll("home");
          }}
        >
          Home
        </ul>
        <ul
          onClick={() => {
            handleClickScroll("about");
          }}
        >
          About
        </ul>
        <ul
          onClick={() => {
            handleClickScroll("service");
          }}
        >
          Services
        </ul>
        <ul
          onClick={() => {
            handleClickScroll("work");
          }}
        >
          Work
        </ul>
        {/* <ul>Blog</ul> */}
        <ul
          onClick={() => {
            handleClickScroll("customerreview");
          }}
        >
          Happy Clients
        </ul>
        <ul
          onClick={() => {
            handleClickScroll("updates");
          }}
        >
          Updates
        </ul>
        <ul
          onClick={() => {
            handleClickScroll("contact");
          }}
        >
          Contact
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
