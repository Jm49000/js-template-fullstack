/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-useless-fragment */
import MenuBurger from "@components/MenuBurger";
import Navbar from "@components/NavBar";
import TextPropos from "@components/TextPropos";

export default function Project() {
  return (
    <>
      <Navbar />
      <MenuBurger />
      <TextPropos />
      {/* <div className="wrapper-contact">

      </div> */}
    </>
  );
}
