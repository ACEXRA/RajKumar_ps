import React, { useState } from "react";
import AddIcon from "../../assets/Images/circle-plus-solid.svg";
import Model from "../../components/ui/model";

function Work() {
  const [model, setModel] = useState(false);
  const HandleModel = () => {
    setModel(true);
  };
  const obj = [
    { name: "rasheed" },
    { name: "ahamed" },
    { name: "ahamed" },
    { name: "ahamed" },
    { name: "ahamed" },
    { name: "ahamed" },
  ];
  return (
    <>
      <div className="work" id="work">
        <h1 className="work_heading">MY WORKS</h1>
        <div className="work_card">
          {obj.map((items) => {
            return <div className="card">{items.name}</div>;
          })}
        </div>
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
export default Work;
