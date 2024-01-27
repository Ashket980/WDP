import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./components/Login"
// import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}