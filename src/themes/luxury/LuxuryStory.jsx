import "./LuxuryStory.css";

import invitationData from "../../data/invitation";

function LuxuryStory() {
  return (
    <section className="luxury-story" data-aos="fade-up">
      <div className="luxury-story__header">
        <span>OUR JOURNEY</span>

        <h2>Love Story</h2>

        <p>Perjalanan kecil yang membawa kami menuju hari bahagia.</p>
      </div>

      <div className="luxury-story__timeline">
        {invitationData.story.map((item, index) => (
          <div
            className="luxury-story__item"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="luxury-story__image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="luxury-story__content">
              <span className="year">{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LuxuryStory;
