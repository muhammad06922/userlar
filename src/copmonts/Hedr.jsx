import Home from "./Home";
import Haqida from "./Haqida";
import Hizmat from "./Hizmat";
import Faq from "./Faq";

function Hedr() {
  return (
    <div>
      <section id="asosiy">
        <Home />
      </section>
      <section id="haqimizda">
        <Haqida />
      </section>
      <section id="hizmat">
        <Hizmat />
      </section>
      <section id="faq">
        <Faq />
      </section>
    </div>
  );
}
export default Hedr;