import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

function Gallery() {
  const photos = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section className="gallery">
      <div className="gallery__title">
        <p>OUR MOMENTS</p>

        <h2>Gallery</h2>
      </div>

      <div className="gallery__grid">
        {photos.map((photo, index) => (
          <div className="gallery__item" key={index}>
            <img data-aos="fade-up" src={photo} alt="wedding" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
