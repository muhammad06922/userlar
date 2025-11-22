import rasmlar from "../assets/front/imglar";
import './footer.css'


function Footer() {
  return (
    <div className="footr">
      <div className="footer-main">
        <div className="main-bir">
          <img src={rasmlar.adlog} alt="" width={"120px"} />
          <p>
            Biz Andijonda 10 yildan beri professional dezinfeksiya ishlarini
            olib boramiz, shuning uchun birinchi martada zararkunandalardan
            qanday qutulishni bilamiz.
          </p>
        </div>
        <div className="main-ikk">
          <section>
            <img src={rasmlar.location} alt="" />
            <p>Andijon viloyati Andijon shahri</p>
          </section>
          <section>
            <img src={rasmlar.tel} alt="" />
            <p>+998 99 999 99 99 </p>
          </section>
        </div>
      </div>
      <div className="footer-img">
        <img src={rasmlar.tel} alt="" />
        <img src={rasmlar.instagram} alt="" />
        <img src={rasmlar.fecbook} alt="" />
      </div>
      <hr style={{ border: "1px solid red" }} />
      <p
       className="coyright"
      >
        Copright <img src={rasmlar.copyright} alt="" width={"20px"} /> 2020
        -Muhammad{" "}
      </p>
    </div>
  );
}

export default Footer;
