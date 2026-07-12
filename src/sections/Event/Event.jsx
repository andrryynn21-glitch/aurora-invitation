import "./Event.css";

function Event() {
  return (
    <section className="event" data-aos="fade-up">
      <div className="event__title">
        <p>WEDDING EVENT</p>

        <h2>Save The Date</h2>
      </div>

      <div className="event__cards">
        <div className="event__card">
          <h3>Akad Nikah</h3>

          <div className="line"></div>

          <p>Minggu, 12 Desember 2027</p>

          <p>08.00 WIB - Selesai</p>

          <h4>Masjid Nama Tempat</h4>

          <a href="#" className="map-button">
            Lihat Lokasi
          </a>
        </div>

        <div className="event__card">
          <h3>Resepsi</h3>

          <div className="line"></div>

          <p>Minggu, 12 Desember 2027</p>

          <p>11.00 WIB - 15.00 WIB</p>

          <h4>Gedung Nama Tempat</h4>

          <a href="#" className="map-button">
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Event;
