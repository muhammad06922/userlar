import rasmlar, { hizmat, hizmat_turlari } from "../assets/front/imglar";

function Hizmat() {
  return (
    <>
      <div className="hizmat">
        <div className="louy">
          <h1>Hizmatlar</h1>
          {hizmat.map((item) => (
            <div className="hizmat-bir" key={item.id}>
              <img src={item.img} alt="" />
              <section>
                <h1>{item.name}</h1>
                <p>{item.index}</p>
              </section>
            </div>
          ))}
        </div>

        <h1>Hizmat turlari </h1>
        <div className="hizmat-ikki">
          {hizmat_turlari.map((item) => (
            <div className="ikki-blok">
              <h1>{item.name}</h1>
              <p>{item.text}</p>
              <section>
                <button className="btn">Bog'lanish</button>
                <img src={item.img} />
              </section>
            </div>
          ))}
        </div>
      </div>
     <div className="boglan">
         <img src={rasmlar.doc} alt="" width={"350px"}/>
       <div className="boglan-ust">
         <input type="text"placeholder="Ismingiz" />
         <input type="text" placeholder="Famiyangiz" />
         <button className="btn">Boglanish</button>
       </div>
     </div>

    </>
  );
}

export default Hizmat;
