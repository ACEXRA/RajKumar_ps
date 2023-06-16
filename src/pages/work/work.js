import React from "react";
import AddIcon from "../../assets/Images/circle-plus-solid.svg";

function Work() {
  return (
    <div className="work" id="work">
      <h1 className="work_heading">MY WORKS</h1>
      <div className="work_card"></div>
      <img className="add_icon" src={AddIcon} alt="img" />
    </div>
  );
}
export default Work;
