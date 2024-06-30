import React from "react";
import "./About.css";
import paysage from "../../assets/paysage.jpg";
import profile_img from "../../assets/profile_image.jpg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>A propos de moi</h1>
        <img
          className="img_pattern"
          src={paysage}
          alt=""
        />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="image" width={"200px"} src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>J'ai une expérience dans le fronttend et dans le backend </p>
            <p>
              Je me suis donné pour objectif etre un develppeur Freelance un
              jour
            </p>
          </div>
          <div className="about-skills">
          <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Mysql</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "60%" }} />
            </div>
            
            <div className="about-skill">
              <p>Mongodb</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>ANNÉES D'EXPÉRIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>PROJETS COMPLET</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>CLIENTS SATIFAIT</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
