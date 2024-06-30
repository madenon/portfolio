import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg"
import user from "../../assets/user.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="asset" src={logo} alt="" />
          <p>
            Je suis un developpeur Junior dans le web je touche un peu de
            langage sachant que l'objetif est de devenir un developpeur full
            stack
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-email-input">
            <img className="asset" src={user} alt="" />
            <input type="email" placeholder="ENtrer votre email" />
          </div>
          <div className="footer-subscribe">S'abonner</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 Nabini Koné .Tout droith réservé</p>
        <div className="footer-bottom-right">
          <p>Conditions d'utilisation</p>
          <p>Politique de confidentialité</p>
          <p>Conactez-moi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
