import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./copmonts/Navbar";
import Home from "./copmonts/Home";
import Haqida from "./copmonts/Haqida";
import Hizmat from "./copmonts/Hizmat";
import Faq from "./copmonts/Faq";
import Hedr from "./copmonts/Hedr";
import Footer from "./copmonts/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-anim");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.4 });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="app">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Hedr />} />
        <Route path="/haqida" element={<Home  />} />
        <Route path="/haqimizda" element={<Haqida  />} />
        <Route path="/hizmat" element={<Hizmat  />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
