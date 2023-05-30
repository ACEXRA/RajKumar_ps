import React from "react";
import About from "../../pages/aboutjs/about";
import Service from "../../pages/services/service";
import Work from "../../pages/work/work";
import Blog from "../../pages/blog/blog";
import Customerreview from "../../pages/customerreview/customerreview";
import Contact from "../../pages/contact/contact";

const Content = () => {
  return (
    <div className="content">
      <div className="image">
        <img src="" alt="temp img" />
      </div>
      <About />
      <Service />
      <Work />
      <Blog />
      <Customerreview />
      <Contact />
    </div>
  );
};
export default Content;
