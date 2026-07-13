import { useState } from "react";
import "./RSVP.css";

import invitationData from "../../data/invitation";
import { getGuestName } from "../../utils/guest";

function RSVP() {
  const guest = getGuestName();

  const [status, setStatus] = useState("Hadir");
  const [total, setTotal] = useState(1);

  const sendWhatsApp = () => {
    const message = `
Halo ${invitationData.couple.groom} & ${invitationData.couple.bride},

Saya ${guest} ingin mengkonfirmasi kehadiran.

Status: ${status}

Jumlah tamu: ${total} orang

Terima kasih 🙏
`;

    const url = `https://wa.me/${invitationData.whatsapp.number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="rsvp">
      <p className="rsvp__label">RSVP</p>

      <h2>Konfirmasi Kehadiran</h2>

      <p>Mohon konfirmasi kehadiran Anda</p>

      <div className="rsvp__form">
        <div className="guest-name">
          <label>Nama Tamu</label>

          <input value={guest} readOnly />
        </div>

        <div>
          <label>Kehadiran</label>

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Hadir</option>

            <option>Tidak Hadir</option>
          </select>
        </div>

        <div>
          <label>Jumlah Tamu</label>

          <select value={total} onChange={(e) => setTotal(e.target.value)}>
            <option value="1">1 Orang</option>

            <option value="2">2 Orang</option>

            <option value="3">3 Orang</option>
          </select>
        </div>

        <button onClick={sendWhatsApp}>Konfirmasi via WhatsApp</button>
      </div>
    </section>
  );
}

export default RSVP;
