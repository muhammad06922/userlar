import React from "react";
import rasmlar from "../assets/front/imglar";

function Haqida() {
  return (
    <div id="haqida" className="haqida">
        <h1 style={{color:"red"}}>Biz Haqimizda</h1>
        <hr />
      <div className="contenr">
        <div className="contenr-too">
          <img src={rasmlar.light} width={"120px"} />
          <h1 >Tez Xizmat Korsatish </h1>
          <p>
            Arizalar kuniga 24 soat qabul qilinadi. Agar muammo shoshilinch
            bo‘lsa, biz darhol ketishimiz mumkin. Shu bilan birga, sifat
            muqammal bo‘lib qoladi.
          </p>
        </div>
        <div className="contenr-yul">
          <img src={rasmlar.order} alt="" width={"120px"} />
          <h1>Yetuk Mutahasislarimiz</h1>
          <p>
            Bizning hodimlarimiz hamma narsaga g‘amxo‘rlik qiladi:
            hisob-kitoblar, xonani tayyorlash, qayta ishlash, yakuniy tozalash,
            ventilatsiya va nazorat tekshiruvlar.
          </p>
        </div>
        <div className="contenr-b">
          <img src={rasmlar.hand} alt="" width={"120px"} />
          <h1>Sizga Maqul Vaqtda </h1>
          <p>
            Siz o'zingiz uchun maqul va qulay vaqtni tanlang va bizga murojat
            qiling. Sizga kafolatlangan va samarali natijani olib boramiz.
          </p>
        </div>
      </div>

      <div className="asosiy">
        <div className="asosiy-matn">
           <h1>Klapa va zararli hashoratlarni endi yoq
             dep hisoblang</h1>
             <p>
              Bizning ko‘p yillar davomida o‘z faoliyatini
               olib kelayotgan kompaniyamiz. Mijozlarimiz bizdan mamnun.
             </p>
             <button style={{width:"85px"}} className="btn">Bog'lanish</button>
        </div>
      </div>
    </div>
  );
}

export default Haqida;
