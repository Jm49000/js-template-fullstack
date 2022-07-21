/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-useless-fragment */
import "./home.css";
import MenuBurger from "@components/MenuBurger";
import Navbar from "@components/NavBar";
import jm from "@assets/jm.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <MenuBurger />
      <div className="wrapper-home">
        <img className="img-home" src={jm} />
        <div className="propos-home">
          <h4>A propos de moi</h4>
          <hr className="hr-home"></hr>
          <p className="text-home">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}
