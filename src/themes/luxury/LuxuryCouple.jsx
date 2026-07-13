import "./LuxuryCouple.css";

import groomImage from "../../assets/images/groom.jpg";
import brideImage from "../../assets/images/bride.jpg";

import invitationData from "../../data/invitation";

function LuxuryCouple() {
  return (
    <section className="luxury-couple" data-aos="fade-up">
      <p className="luxury-couple__label">THE HAPPY COUPLE</p>

      <h2>Groom & Bride</h2>

      <div className="luxury-couple__wrapper">
        <div className="luxury-person">
          <img src={groomImage} alt="Groom" />

          <h3>{invitationData.couple.groom}</h3>

          <p>Putra pertama keluarga</p>
        </div>

        <div className="luxury-divider">&</div>

        <div className="luxury-person">
          <img src={brideImage} alt="Bride" />

          <h3>{invitationData.couple.bride}</h3>

          <p>Putri pertama keluarga</p>
        </div>
      </div>
    </section>
  );
}

export default LuxuryCouple;
