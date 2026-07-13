import { useState } from "react";

import "./LuxuryGallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

function LuxuryGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="luxury-gallery">
      <div className="luxury-gallery__header">
        <span>OUR MOMENT</span>

        <h2>Gallery</h2>
      </div>

      <div className="luxury-gallery__grid">
        {galleryImages.map((image, index) => (
          <div
            className={`luxury-gallery__item data-aos="zoom-in" item-${index + 1}`}
            key={index}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt="Wedding Gallery" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="luxury-lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" />

          <button onClick={() => setSelectedImage(null)}>×</button>
        </div>
      )}
    </section>
  );
}

export default LuxuryGallery;
