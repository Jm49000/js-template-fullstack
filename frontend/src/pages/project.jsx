/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-useless-fragment */
import MenuBurger from "@components/MenuBurger";
import Navbar from "@components/NavBar";
import ProjectImage from "@components/ProjectImage";
import TextPropos from "@components/TextPropos";
import "./project.css";

export default function Project() {
  return (
    <>
      <Navbar />
      <MenuBurger />
      <TextPropos />
      <hr className="hr-project" />
      <div className="wrapper-project">
        <ProjectImage />
      </div>
    </>
  );
}
