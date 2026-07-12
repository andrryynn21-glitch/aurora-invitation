import { useState } from "react";
import "./RSVP.css";

function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "Hadir",
    guest: "1",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Terima kasih ${form.name} atas konfirmasinya 🤍`);

    setForm({
      name: "",
      attendance: "Hadir",
      guest: "1",
      message: "",
    });
  };

  return (
    <section className="rsvp">
      <div className="rsvp__title">
        <p>RSVP</p>

        <h2>Konfirmasi Kehadiran</h2>
      </div>

      <form className="rsvp__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nama Anda"
          value={form.name}
          onChange={handleChange}
        />

        <select
          name="attendance"
          value={form.attendance}
          onChange={handleChange}
        >
          <option>Hadir</option>

          <option>Tidak Hadir</option>
        </select>

        <select name="guest" value={form.guest} onChange={handleChange}>
          <option value="1">1 Orang</option>

          <option value="2">2 Orang</option>

          <option value="3">3 Orang</option>

          <option value="4">4 Orang</option>
        </select>

        <textarea
          name="message"
          placeholder="Tuliskan ucapan dan doa..."
          value={form.message}
          onChange={handleChange}
        />

        <button>Kirim Konfirmasi</button>
      </form>
    </section>
  );
}

export default RSVP;
