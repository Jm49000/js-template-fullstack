/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import "./App.css";
import Home from "@pages/Home";
import Project from "@pages/project";
import Upload from "@components/Upload";
import { Route, Routes } from "react-router-dom";
import Contact from "@pages/Contact";
// import AdminLogin from "@components/AdminLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} />
        {/* <Route exact path="/admin" element={<AdminLogin setAdm={setAdm} />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
