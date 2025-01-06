import "./App.css";
import Home from "./Components/FunctionalComponents/Home";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import NavBar from "./Components/FunctionalComponents/NavBar";
import UseEffect from "./Components/FunctionalComponents/UseEffect";
import Footer from "./Components/FunctionalComponents/Footer";
import UseRef from "./Components/FunctionalComponents/UseRef";
import Login from "./Components/FunctionalComponents/Login";
import UseMemo from "./Components/FunctionalComponents/UseMemo";
import Signup from "./Components/FunctionalComponents/Signup";
import UseContext from "./Components/FunctionalComponents/UseContext";
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route
              path="/About"
              element={<About college="Kongu Engineering" clg1="IT" />}
            />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/UseEffect" element={<UseEffect />} />
            <Route path="/UseRef" element={<UseRef />} />
            <Route path="/UseContext" element={<UseContext />} />
            <Route path="/UseMemo" element={<UseMemo />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
