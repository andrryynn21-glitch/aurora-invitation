import { useState } from "react";
import "./Gallery.css";

import invitationData from "../../data/invitation";

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery">
      <p className="gallery__label">OUR MOMENTS</p>

      <h2>Beautiful Memories</h2>

      <div className="gallery__grid">
        {invitationData.gallery?.map((image, index) => (
          <img
            key={index}
            src={image}
            onClick={() => setActiveImage(image)}
            className="gallery__image"
          />
        ))}
      </div>

      {activeImage && (
        <div className="gallery__modal" onClick={() => setActiveImage(null)}>
          <img src={activeImage} />
        </div>
      )}
    </section>
  );
}

export default Gallery;
