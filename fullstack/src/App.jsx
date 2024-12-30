import './App.css';
import Home from "./Components/FunctionalComponents/Home";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import NavBar from "./Components/FunctionalComponents/NavBar";
import Footer from "./Components/FunctionalComponents/Footer";
import "./assets/css/Home.css";
import "./assets/css/NavBAr.css";
import "./assets/css/Footer.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About college="Kongu Engineering"clg1="IT"/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contact" element={<Contact/>}/></Routes></BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
