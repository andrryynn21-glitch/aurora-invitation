import "./Gift.css";

function Gift() {
  const copyNumber = (number) => {
    navigator.clipboard.writeText(number);

    alert("Nomor berhasil disalin 🤍");
  };

  return (
    <section className="gift">
      <div className="gift__title">
        <p>DIGITAL GIFT</p>

        <h2>Wedding Gift</h2>

        <span>Doa restu Anda adalah hadiah terindah bagi kami</span>
      </div>

      <div className="gift__cards" data-aos="fade-up">
        <div className="gift__card">
          <h3>Bank BCA</h3>

          <p className="number">1234567890</p>

          <p>a.n Fulan</p>

          <button onClick={() => copyNumber("1234567890")}>Copy</button>
        </div>

        <div className="gift__card">
          <h3>E-Wallet</h3>

          <p className="number">081234567890</p>

          <p>a.n Fulanah</p>

          <button onClick={() => copyNumber("081234567890")}>Copy</button>
        </div>
      </div>
    </section>
  );
}

export default Gift;
