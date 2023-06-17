import React, { useState } from "react";
import AddIcon from "../../assets/Images/circle-plus-solid.svg";
import Model from "../../components/ui/model";

const Updates = () => {
  const [model, setModel] = useState(false);
  const HandleModel = () => {
    setModel(true);
  };
  return (
    <>
      <div className="updates" id="updates">
        <h1 className="updates_heading">UPDATES</h1>
        <div className="updates_content"></div>
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
};
export default Updates;
