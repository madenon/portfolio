import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import  imp from "../../assets/img_simple.jpg"
import arrow_icon from "../../assets/arrow_icon.png"
const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>Mes dernières réalisation</h1>
        <img width={"170px"} src={imp} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <img className="w_img"  key={index}  src={work.w_img}  alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Voir plus  </p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
