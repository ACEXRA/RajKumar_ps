import React from "react";
import "../../assets/scss/app.scss";

const Model = ({ setModel }) => {
  return (
    <div className="model">
      <div className="backdrop" onClick={() => setModel(false)}></div>
      <div className="model_content">model</div>
    </div>
  );
};
export default Model;
