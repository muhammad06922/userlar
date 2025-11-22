import rasmlar from "../assets/front/imglar"
import Navbar from "./Navbar"

function Home() {
  return (
    <div className="home">  
      <div className="home-nav">
        <h1>Dizinfeksiya <br /> Hizmati </h1>
         <p>Biz Andijonda 10 yildan beri professional
            dezinfeksiya ishlarini olib boramiz,
             shuning uchun birinchi marta
            zararkunandalardan qanday qutulishni bilamiz.
          </p>
         <button className="btn" style={{ display: "block", textAlign: "left" }}>Bog'lanish</button>
      </div>   
      <div className="home-img">
        <img src={rasmlar.wir} />
      </div>      
    </div>
  )
}

export default Home
