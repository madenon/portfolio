import React from 'react';
import "./Hero.css"
import profile_img from "../../assets/profile_image.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img className='profile_img' src={profile_img} alt="" />
      <h1><span>Je suis Koné Nabini Siaka</span>  developpeur frontend et backend au Maroc </h1>
      <p>Je suis un  developpeur Junior passioné dans le web depuis des années</p>
      <div className="hero-action">
        <div className="hero-connect">    <AnchorLink className="anchor-link" offset={50} href="#contact">Connecte avec moi</AnchorLink>
        </div>
        <div className="hero-resume">Mon Resumé</div>
      </div>
    </div>
  );
};

export default Hero;