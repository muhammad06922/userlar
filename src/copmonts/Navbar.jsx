import rasmlar from "../assets/front/imglar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const handleClick = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="navbar">
      <img src={rasmlar.adlog} alt="" />
      <main className="navbar-link">
        <NavLink to="/#asosiy" onClick={() => handleClick('asosiy')}>Asosiy</NavLink>
        <NavLink to="/#haqimizda" onClick={() => handleClick('haqimizda')}>Biz Haqimizda</NavLink>
        <NavLink to="/#hizmat" onClick={() => handleClick('hizmat')}>Xizmatlar</NavLink>
        <NavLink to="/#faq" onClick={() => handleClick('faq')}>Faq</NavLink>
        <button className="btn">Bog'lanish</button>
      </main>
    </div>
  );
}
export default Navbar;