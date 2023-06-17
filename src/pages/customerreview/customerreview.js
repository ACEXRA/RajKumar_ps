import React, { useState } from "react";
import AddIcon from "../../assets/Images/circle-plus-solid.svg";
import Model from "../../components/ui/model";
function Customerreview() {
  const [model, setModel] = useState(false);
  const HandleModel = () => {
    setModel(true);
  };
  return (
    <>
      <div className="customerreview" id="customerreview">
        <h1 className="customer_heading">HAPPY CLIENTS</h1>
        <div className="customer_content">{<div></div>}</div>
        <img
          className="add_icon"
          src={AddIcon}
          alt="img"
          onClick={HandleModel}
        />
      </div>
      {model && <Model setModel={setModel} />}
    </>
  );
}
export default Customerreview;
