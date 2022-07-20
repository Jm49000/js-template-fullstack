/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-useless-fragment */
import MenuBurger from "@components/MenuBurger";
import Navbar from "@components/NavBar";
import "./Contact.scss";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <MenuBurger />
      <h1 className="titre-contact">Me contacter</h1>
      <hr className="hr-contact"></hr>
      <div className="wrapper">
        <h3 className="info-contact">Informations personnelles :</h3>
        <div className="name-contact">
          <label className="contact-label">
            Prénom*{" "}
            <input className="prenom-contact" type="text" name="prénom" />
          </label>

          <label className="contact-label">
            Nom*
            <input className="nom-contact" type="text" name="nom" />
          </label>
        </div>
        <label className="email-label">
          Email* <input className="email" type="email" name="email" />
        </label>

        <label className="message-contact">
          Message* <textarea rows="10" cols="50"></textarea>
        </label>
        <div className="container-button-contact">
          <button className="button-contact" type="submit">
            Soumettre
          </button>
        </div>
      </div>
    </div>
  );
}
