import React from "react";
import Card from "../../components/ui/card";
import WeddingImg from "../../assets/Images/wedding.jpeg";
import BirthdayImg from "../../assets/Images/birthdayparty.jpeg";
import BabyshootImg from "../../assets/Images/babyshoot.jpeg";
import MaternityImg from "../../assets/Images/maternity.jpeg";
import PubertyImg from "../../assets/Images/puberty.jpeg";
import Label from "../../assets/Images/zlabel.jpeg";

function Service() {
  return (
    <div className="service" id="service">
      <h1 className="service_heading">SERVICES AND PRICES </h1>
      <div className="card">
        <Card name={"Wedding Shoot"} image={WeddingImg} />
        <Card name={"Birthday Party Shoot"} image={BirthdayImg} />
        <Card name={"Maternity shoot"} image={BabyshootImg} />
        <Card name={"Puberty Shoot"} image={MaternityImg} />
        <Card name={"Baby Shower and Baby Shoot"} image={PubertyImg} />
        <Card name={"Label"} image={Label} />
      </div>
    </div>
  );
}
export default Service;
