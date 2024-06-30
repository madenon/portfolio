import React from "react";
import "./Services.css";
import service from "../../assets/service.jpg";
import arrow_icon from "../../assets/arrow_icon.png";
import Services_Data from "../../assets/services_data";

import "./Services.css";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>Mes Services</h1>
        <img className="service_image" src={service} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          console.log(service);

          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Voir plus</p>
                <img className="arrow_icon" src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
