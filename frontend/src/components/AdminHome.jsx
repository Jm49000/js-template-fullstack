/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import LeftSlide from "@components/Leftslide";
import TextEditor from "@components/TextEditor";
import Topslide from "@components/Topslide";

export default function AdminHome() {
  return (
    <section className="background-home">
      <LeftSlide />
      <Topslide />
      <div className="position-admin--editor">
        <div className="background-texteditor">
          <TextEditor />
        </div>
      </div>
    </section>
  );
}
