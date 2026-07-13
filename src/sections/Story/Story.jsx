import "./Story.css";

import invitationData from "../../data/invitation";

function Story() {
  return (
    <section className="story">
      <p className="story__label">OUR STORY</p>

      <h2>Perjalanan Cinta Kami</h2>

      <div className="story__timeline">
        {invitationData.story.map((item, index) => (
          <div className="story__item" key={index}>
            <div className="story__year">{item.year}</div>

            <div className="story__content">
              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Story;
