/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import "./App.css";
import Home from "@pages/Home";
import Project from "@pages/project";
import Upload from "@components/Upload";
import { Route, Routes } from "react-router-dom";
import Contact from "@pages/Contact";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
