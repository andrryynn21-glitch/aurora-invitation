import "./Opening.css";

import Guest from "../../components/Guest/Guest";

import invitationData from "../../data/invitation";

function Opening({ onOpen }) {
  return (
    <section className="opening">
      <div className="opening__overlay"></div>

      <div className="opening__ornament">✦</div>

      <div className="opening__content">
        <p className="opening__subtitle">THE WEDDING OF</p>

        <h1>
          <span>{invitationData.couple.groom}</span>

          <small>&</small>

          <span>{invitationData.couple.bride}</span>
        </h1>

        <p className="opening__date">
          {invitationData.event.day},
          <br />
          {invitationData.event.date}
        </p>

        <Guest />

        <button className="opening__button" onClick={onOpen}>
          Buka Undangan
        </button>
      </div>
    </section>
  );
}

export default Opening;
