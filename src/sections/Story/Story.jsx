import "./Story.css";

function Story() {
  return (
    <section className="story">
      <div className="story__container">
        <p className="story__label">OUR JOURNEY</p>

        <h2 className="story__title">Love Story</h2>

        <div className="timeline">
          <div className="timeline__item">
            <div className="timeline__year">2022</div>

            <div className="timeline__card">
              <h3>First Meet</h3>

              <p>
                Pertama kali kami bertemu dan mulai mengenal satu sama lain.
              </p>
            </div>
          </div>

          <div className="timeline__item">
            <div className="timeline__year">2024</div>

            <div className="timeline__card">
              <h3>Our Journey</h3>

              <p>
                Menjalani perjalanan bersama, melewati berbagai cerita dan
                kenangan.
              </p>
            </div>
          </div>

          <div className="timeline__item">
            <div className="timeline__year">2027</div>

            <div className="timeline__card">
              <h3>The Proposal</h3>

              <p>Satu langkah menuju kehidupan baru bersama.</p>
            </div>
          </div>

          <div className="timeline__item">
            <div className="timeline__year">2027</div>

            <div className="timeline__card">
              <h3>Wedding Day</h3>

              <p>Hari dimana dua hati menjadi satu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
