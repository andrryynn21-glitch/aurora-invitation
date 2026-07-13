import "./LuxuryEvent.css";
import invitationData from "../../data/invitation";

function LuxuryEvent() {
  return (
    <section className="luxury-event" data-aos="fade-up">
      <div className="luxury-event__container">
        <p className="luxury-event__label">SAVE THE DATE</p>

        <h2>Wedding Event</h2>

        <div className="luxury-event__info">
          <div className="luxury-event__item">
            <span>DATE</span>

            <h3>{invitationData.event.day}</h3>

            <p>{invitationData.event.date}</p>
          </div>

          <div className="luxury-event__item">
            <span>TIME</span>

            <h3>{invitationData.event.time}</h3>
          </div>

          <div className="luxury-event__item">
            <span>LOCATION</span>

            <h3>{invitationData.event.location}</h3>

            <button>Buka Google Maps</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LuxuryEvent;
