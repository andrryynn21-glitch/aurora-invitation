import "./Opening.css";

function Opening({ onOpen }) {
  return (
    <section className="opening">
      <div className="opening__frame"></div>

      <div className="light1"></div>
      <div className="light2"></div>

      <div className="opening__content">
        <p className="opening__label">THE WEDDING OF</p>

        <h1 className="opening__title">
          Fulan
          <span>&</span>
          Fulanah
        </h1>

        <p className="opening__date">Minggu, 12 Desember 2027</p>

        <div className="opening__guest">
          <p>Kepada Yth.</p>

          <h3>Bapak/Ibu/Saudara/i</h3>

          <h2>Nama Tamu</h2>
        </div>

        <button className="opening__button" onClick={onOpen}>
          Buka Undangan
        </button>
      </div>
    </section>
  );
}

export default Opening;
