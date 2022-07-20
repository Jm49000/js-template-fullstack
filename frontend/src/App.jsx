/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import "./App.css";
import Navbar from "@components/NavBar";
import Upload from "@components/Upload";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <p>coucou</p>
    </div>
  );
}

export default App;
