import "./Couple.css";

import bride from "../../assets/images/bride.jpg";
import groom from "../../assets/images/groom.jpg";

function Couple() {
  return (
    <section className="couple" data-aos="fade-up">
      <div className="couple__title" data-aos="fade-down">
        <p>THE HAPPY COUPLE</p>

        <h2>Bride & Groom</h2>
      </div>

      <div className="couple__container">
        <div className="person">
          <div className="photo-frame">
            <img data-aos="zoom-in" src={bride} alt="Bride" />
          </div>

          <h3>Fulanah</h3>

          <span>The Bride</span>

          <p>
            Putri dari
            <br />
            Bapak Nama Ayah
            <br />
            &amp;
            <br />
            Ibu Nama Ibu
          </p>
        </div>

        <div className="ampersand">&amp;</div>

        <div className="person">
          <div className="photo-frame">
            <img src={groom} alt="Groom" />
          </div>

          <h3>Fulan</h3>

          <span>The Groom</span>

          <p>
            Putra dari
            <br />
            Bapak Nama Ayah
            <br />
            &amp;
            <br />
            Ibu Nama Ibu
          </p>
        </div>
      </div>
    </section>
  );
}

export default Couple;
