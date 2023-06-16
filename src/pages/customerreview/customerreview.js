import React from "react";
import AddIcon from "../../assets/Images/circle-plus-solid.svg";
function Customerreview() {
  return (
    <div className="customerreview" id="customerreview">
      <h1 className="customer_heading">HAPPY CLIENTS</h1>
      <div className="customer_content">{<div></div>}</div>
      <img className="add_icon" src={AddIcon} alt="img" />
    </div>
  );
}
export default Customerreview;
