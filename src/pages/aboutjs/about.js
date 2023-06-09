import React from "react";
import arrow from "../../assets/Images/chevron-yellow.svg";

function About() {
  return (
    <div className="about" id="about">
      <h1 className="about_heading">ABOUT US</h1>
      <div className="about_content">
        <div className="about_image">
          <img src="" alt="img" />
        </div>
        <div className="about_us">
          <h4>
            I'm <span>Raj</span> <span>Kumar</span>, a freelance photographer.
            My passion is taking photos of the most stunning architecture around
            the world.
          </h4>
          <p>
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold. Viverra tristique usto duis vitae diam
            neque nivamus estan ateuene artines viverra nec setlie no curabit
            tristique.
          </p>
          <div className="myequipment">
            <h5>My Equipment</h5>
            <ul style={{ "list-style-type": "none" }}>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                Canon Eos 5D Mark IV 24-105mm
              </li>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                Manfrotto Compact Tripod
              </li>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                DJI Ronin MX 3-Axis Gimbal Stabilizer
              </li>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                Canon EF100-400MM Lens
              </li>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                Wondlan Wer01 Wireless Slider Time Lapse
              </li>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                Nikon D5 24-70mm F2.8
              </li>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                Nikon Af-S 24Mm F/1.4G Ed Lens
              </li>
              <li>
                <img className="arrowImg" src={arrow} alt="ico" />
                Wondlan Sniper Sn 2.1 Wf Wireless Dslr Rig
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
