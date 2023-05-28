import React from "react";
import About from "../../pages/aboutjs/about";
import Service from "../../pages/services/service";
import Work from "../../pages/work/work";
import Customerreview from "../../pages/customerreview/customerreview";

const Content = () => {
  return (
    <div className="content">
      <div className="image">
        <img src="" alt="temp img" />
      </div>
      <About />
      <Service />
      <Work />
      <Customerreview />
    </div>
  );
};
export default Content;
