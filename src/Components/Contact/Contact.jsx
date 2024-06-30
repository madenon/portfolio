import React, { useState } from "react";
import "./Contact.css";
import contact from "../../assets/contact.jpg";
import email from "../../assets/email_img.jpg";
import phone from "../../assets/phone.jpg";
import location from "../../assets/location.jpg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f62c3fcb-5f40-47c0-9506-c41a91726689");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json
    }).then((res) => res.json());
    if ((res.success)) {
      alert(res.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Contactez-moi </h1>
        <img className="contact_img" src={contact} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Parlons maintenant</h1>
          <p>
            Je suis actuellement disponible pour entreprendre de nouveaux
            projets, alors n'hésitez pas à m'envoyer un message sur tout ce sur
            quoi vous souhaitez que je travaille. Vous pouvez me contacter à
            tout moment
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img className="my_img" src={email} alt="" />{" "}
              <p>nabinikone0@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img className="my_img" src={phone} alt="" /> <p>+212691942109</p>
            </div>

            <div className="contact-detail">
              <img className="my_img" src={location} alt="" />{" "}
              <p>Adresse, MAROC CASABLANCA </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Votre nom</label>
          <input type="text" placeholder="Votre nom" name="name" required />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="votre email" name="email" required />
          <label htmlFor="">Votre message ici</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Ecrivez votre message"
          ></textarea>

          <button className="contact-submit" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
