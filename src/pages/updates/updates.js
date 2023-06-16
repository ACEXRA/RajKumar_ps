import React from "react";
import AddIcon from "../../assets/Images/circle-plus-solid.svg";

const Updates = () => {
  return (
    <div className="updates" id="updates">
      <h1 className="updates_heading">UPDATES</h1>
      <div className="updates_content"></div>
      <img className="add_icon" src={AddIcon} alt="img" />
    </div>
  );
};
export default Updates;
